/* ═══════════════════════════════════════════════════════════════
   NEEDIN ADMIN PANEL — app.js
   Full Supabase integration, table rendering, CSV/JSON export
═══════════════════════════════════════════════════════════════ */

// ── CONFIG ─────────────────────────────────────────────────────────────────

const CONFIG = {
  supabaseUrl:  'https://ghiydlxlvrfkgzngnonk.supabase.co',
  supabaseKey:  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaXlkbHhsdnJma2d6bmdub25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTg3NDcsImV4cCI6MjA4ODk5NDc0N30.sNJwfPB5c3AxxlCfm3F9hOtM4nas64U7sIU5kxtEZWY',

  // Admin email whitelist — only these emails can log in
  adminEmails: [
    'chetanpunj9@gmail.com',
  ],

  rowsPerPage: 25,
};

// ── TABLE DEFINITIONS ──────────────────────────────────────────────────────
// Define which columns to display for each table and how to render them.

const TABLE_CONFIGS = {
  profiles: {
    label: 'Users / Profiles',
    table: 'profiles',
    orderBy: 'created_at',
    columns: [
      { key: 'id',                    label: 'UID',          render: renderID },
      { key: 'full_name',             label: 'Name',         render: renderName },
      { key: 'phone',                 label: 'Phone' },
      { key: 'email',                 label: 'Email' },
      { key: 'city',                  label: 'City' },
      { key: 'is_identity_verified',  label: 'Verified',     render: renderVerified },
      { key: 'created_at',            label: 'Joined',       render: renderDate },
    ],
  },
  journeys: {
    label: 'Journeys',
    table: 'journeys',
    orderBy: 'created_at',
    columns: [
      { key: 'id',             label: 'Journey ID',   render: renderID },
      { key: 'driver_id',      label: 'Traveler UID', render: renderID },
      { key: 'origin',         label: 'From' },
      { key: 'destination',    label: 'To' },
      { key: 'travel_mode',    label: 'Mode' },
      { key: 'departure_time', label: 'Departure',    render: renderDate },
      { key: 'capacity_kg',    label: 'Capacity (kg)' },
      { key: 'status',         label: 'Status',       render: renderStatus },
      { key: 'created_at',     label: 'Posted',       render: renderDate },
    ],
  },
  parcels: {
    label: 'Parcels / Bookings',
    table: 'parcels',
    orderBy: 'created_at',
    columns: [
      { key: 'id',          label: 'Parcel ID',    render: renderID },
      { key: 'sender_id',   label: 'Sender UID',   render: renderID },
      { key: 'title',       label: 'Item',         render: renderName },
      { key: 'parcel_size', label: 'Size' },
      { key: 'weight_kg',   label: 'Weight (kg)' },
      { key: 'origin',      label: 'From' },
      { key: 'destination', label: 'To' },
      { key: 'price',       label: 'Price (₹)',    render: renderAmount },
      { key: 'status',      label: 'Status',       render: renderStatus },
      { key: 'created_at',  label: 'Booked',       render: renderDate },
    ],
  },
  transactions: {
    label: 'Transactions',
    table: 'transactions',
    orderBy: 'created_at',
    columns: [
      { key: 'id',              label: 'Txn ID',        render: renderID },
      { key: 'parcel_id',       label: 'Parcel ID',     render: renderID },
      { key: 'amount',          label: 'Amount (₹)',    render: renderAmount },
      { key: 'payment_method',  label: 'Method' },
      { key: 'status',          label: 'Status',        render: renderStatus },
      { key: 'transaction_ref', label: 'Reference',     render: renderID },
      { key: 'created_at',      label: 'Date',          render: renderDate },
    ],
  },
  pricing_logs: {
    label: 'Pricing Logs',
    table: 'pricing_logs',
    orderBy: 'created_at',
    columns: [
      { key: 'id',               label: 'Log ID',       render: renderID },
      { key: 'latency_ms',       label: 'Latency (ms)' },
      { key: 'request_payload',  label: 'Request',      render: renderJSON },
      { key: 'response_payload', label: 'Response',     render: renderJSON },
      { key: 'created_at',       label: 'Timestamp',    render: renderDate },
    ],
  },
};

// ── GLOBALS ────────────────────────────────────────────────────────────────

let supabase = null;
let currentUser = null;
let currentSection = 'dashboard';

// Per-table state
const tableState = {};
Object.keys(TABLE_CONFIGS).forEach(key => {
  tableState[key] = {
    allData:      [],
    filteredData: [],
    currentPage:  1,
    sortCol:      null,
    sortDir:      'asc',
    searchQuery:  '',
    loaded:       false,
  };
});

// ── INIT ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  supabase = window.supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
  checkExistingSession();
});

async function checkExistingSession() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session && isAdminEmail(session.user.email)) {
    currentUser = session.user;
    showApp();
  }
  // Listen for auth state changes
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session && isAdminEmail(session.user.email)) {
      currentUser = session.user;
    }
  });
}

function isAdminEmail(email) {
  if (!email) return false;
  return CONFIG.adminEmails.includes(email.toLowerCase().trim());
}

// ── AUTH ───────────────────────────────────────────────────────────────────

async function handleLogin() {
  const email    = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value;
  const errEl    = document.getElementById('login-error');
  const btnText  = document.getElementById('login-btn-text');
  const spinner  = document.getElementById('login-spinner');
  const btn      = document.getElementById('login-btn');

  errEl.classList.add('hidden');

  if (!email || !password) {
    showLoginError('Please enter your email and password.');
    return;
  }

  // Loading state
  btn.disabled = true;
  btnText.textContent = 'Signing in...';
  spinner.classList.remove('hidden');

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      showLoginError(friendlyAuthError(error.message));
      return;
    }

    if (!isAdminEmail(data.user.email)) {
      await supabase.auth.signOut();
      showLoginError('Access denied. Your account does not have admin privileges.');
      return;
    }

    currentUser = data.user;
    showApp();

  } catch (e) {
    showLoginError('An unexpected error occurred. Please try again.');
    console.error(e);
  } finally {
    btn.disabled = false;
    btnText.textContent = 'Sign In';
    spinner.classList.add('hidden');
  }
}


async function handleLogout() {
  await supabase.auth.signOut();
  currentUser = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('email-input').value = '';
  document.getElementById('password-input').value = '';
  // Reset table states
  Object.keys(tableState).forEach(k => { tableState[k].loaded = false; });
}

function showLoginError(msg) {
  const errEl = document.getElementById('login-error');
  errEl.textContent = msg;
  errEl.classList.remove('hidden');
}

function friendlyAuthError(msg) {
  if (!msg) return 'Login failed. Please try again.';
  const m = msg.toLowerCase();
  if (m.includes('invalid') || m.includes('credentials')) return 'Invalid email or password.';
  if (m.includes('email not confirmed')) return 'Please confirm your email address first.';
  if (m.includes('rate limit')) return 'Too many attempts. Please wait a moment.';
  return msg;
}

// ── SHOW APP ───────────────────────────────────────────────────────────────

function showApp() {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');

  // Populate admin info
  const email = currentUser.email || '';
  const name  = email.split('@')[0] || 'Admin';
  document.getElementById('admin-name').textContent  = capitalize(name);
  document.getElementById('admin-email').textContent = email;
  document.getElementById('admin-avatar').textContent = (name[0] || 'A').toUpperCase();

  // Load dashboard
  loadDashboard();
}

// ── NAVIGATION ─────────────────────────────────────────────────────────────

function switchSection(section) {
  // Update nav items
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === section);
  });

  // Update sections
  document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
  document.getElementById(`section-${section}`).classList.add('active');

  // Update topbar
  const labels = { dashboard: 'Dashboard', profiles: 'Users & Profiles', journeys: 'Journeys', parcels: 'Parcels & Bookings', transactions: 'Transactions', pricing_logs: 'Pricing Logs' };
  document.getElementById('page-title').textContent = labels[section] || section;
  document.getElementById('breadcrumb').textContent = `Needin Admin / ${labels[section] || section}`;

  currentSection = section;

  if (section === 'dashboard') {
    loadDashboard();
  } else {
    loadTableSection(section);
  }
}

function refreshCurrentSection() {
  if (currentSection === 'dashboard') {
    loadDashboard();
  } else {
    tableState[currentSection].loaded = false;
    loadTableSection(currentSection);
  }
}

// ── DASHBOARD ──────────────────────────────────────────────────────────────

async function loadDashboard() {
  const stats = await Promise.allSettled([
    supabase.from('profiles').select('id, is_identity_verified', { count: 'exact', head: false }),
    supabase.from('journeys').select('id, status', { count: 'exact', head: false }).eq('status', 'active'),
    supabase.from('parcels').select('id', { count: 'exact', head: true }),
    supabase.from('transactions').select('amount, status').eq('status', 'completed'),
    supabase.from('pricing_logs').select('id', { count: 'exact', head: true }),
    supabase.from('parcels').select('id', { count: 'exact', head: true }).in('status', ['delivered', 'completed']),
  ]);

  // Users
  const profRes = stats[0].status === 'fulfilled' ? stats[0].value : null;
  const allProfiles = profRes?.data || [];
  setStatValue('stat-users', allProfiles.length || profRes?.count || 0);
  const verifiedCount = allProfiles.filter(p => p.is_identity_verified).length;
  setStatValue('stat-verified', verifiedCount);

  // Active journeys
  const jRes = stats[1].status === 'fulfilled' ? stats[1].value : null;
  setStatValue('stat-journeys', jRes?.data?.length || jRes?.count || 0);

  // Total parcels
  const pRes = stats[2].status === 'fulfilled' ? stats[2].value : null;
  setStatValue('stat-parcels', pRes?.count || '—');

  // Revenue
  const txRes = stats[3].status === 'fulfilled' ? stats[3].value : null;
  const revenue = (txRes?.data || []).reduce((sum, t) => sum + (parseFloat(t.amount) || 0), 0);
  setStatValue('stat-revenue', revenue > 0 ? `₹${formatNum(revenue)}` : '—');

  // Pricing logs
  const plRes = stats[4].status === 'fulfilled' ? stats[4].value : null;
  setStatValue('stat-pricing', plRes?.count || '—');

  // Update nav badges
  updateBadge('profiles',      allProfiles.length || profRes?.count);
  updateBadge('journeys',      jRes?.data?.length || jRes?.count);
  updateBadge('parcels',       pRes?.count);
  updateBadge('pricing_logs',  plRes?.count);

  // Recent parcels
  const recentParcels = await supabase.from('parcels')
    .select('title, origin, destination, status, price, created_at')
    .order('created_at', { ascending: false }).limit(5);
  renderMiniList('recent-parcels-list', recentParcels.data || [], row => `
    <div class="mini-row">
      <span class="mini-label">${esc(row.title || '—')} <span style="color:var(--text-muted);font-weight:400">· ${esc(row.origin || '')} → ${esc(row.destination || '')}</span></span>
      <span class="mini-val">${statusBadge(row.status)} <strong style="color:#34D399;margin-left:6px">₹${row.price || 0}</strong></span>
    </div>`
  );

  // Recent transactions
  const recentTx = await supabase.from('transactions')
    .select('amount, status, payment_method, created_at')
    .order('created_at', { ascending: false }).limit(5);
  renderMiniList('recent-transactions-list', recentTx.data || [], row => `
    <div class="mini-row">
      <span class="mini-label">${esc(row.payment_method || 'Unknown')} <span style="color:var(--text-muted);font-weight:400">· ${shortDate(row.created_at)}</span></span>
      <span class="mini-val">${statusBadge(row.status)} <strong style="color:#34D399;margin-left:6px">₹${row.amount || 0}</strong></span>
    </div>`
  );

  // Load transaction count for badge
  const txCountRes = await supabase.from('transactions').select('id', { count: 'exact', head: true });
  updateBadge('transactions', txCountRes?.count);
}

function setStatValue(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val === null || val === undefined ? '—' : val;
}

function updateBadge(section, count) {
  const el = document.getElementById(`badge-${section}`);
  if (el) el.textContent = count !== null && count !== undefined ? formatNum(count) : '—';
}

function renderMiniList(containerId, rows, template) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!rows.length) { el.innerHTML = '<div class="loading-row">No data available</div>'; return; }
  el.innerHTML = rows.map(template).join('');
}

// ── TABLE SECTIONS ─────────────────────────────────────────────────────────

function loadTableSection(sectionKey) {
  const cfg = TABLE_CONFIGS[sectionKey];
  if (!cfg) return;

  const container = document.getElementById(`section-${sectionKey}`);
  if (!container) return;

  // Build scaffold if not yet built
  if (!tableState[sectionKey].scaffolded) {
    container.innerHTML = buildTableScaffold(sectionKey, cfg);
    tableState[sectionKey].scaffolded = true;

    // Wire up search
    const searchInput = document.getElementById(`search-${sectionKey}`);
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        tableState[sectionKey].searchQuery = e.target.value.toLowerCase();
        tableState[sectionKey].currentPage = 1;
        applyFilterAndRender(sectionKey);
      }, 200));
    }
  }

  if (!tableState[sectionKey].loaded) {
    fetchTableData(sectionKey);
  }
}

function buildTableScaffold(key, cfg) {
  return `
    <div class="table-toolbar">
      <div class="toolbar-left">
        <div class="search-box">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input id="search-${key}" type="text" placeholder="Search ${cfg.label.toLowerCase()}..." />
        </div>
        <span class="row-count" id="count-${key}">Loading...</span>
      </div>
      <div class="toolbar-right">
        <button class="export-btn" onclick="exportData('${key}','csv')">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export CSV
        </button>
        <button class="export-btn primary" onclick="exportData('${key}','json')">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export JSON
        </button>
      </div>
    </div>
    <div class="table-wrapper">
      <div id="table-body-${key}">
        <div class="table-loading">
          <div class="spinner" style="border-color:rgba(240,90,79,0.3);border-top-color:#F05A4F;"></div>
          <span>Loading ${cfg.label}...</span>
        </div>
      </div>
    </div>`;
}

async function fetchTableData(key) {
  const cfg = TABLE_CONFIGS[key];
  const state = tableState[key];

  try {
    const { data, error } = await supabase
      .from(cfg.table)
      .select('*')
      .order(cfg.orderBy, { ascending: false })
      .limit(5000); // fetch up to 5000 rows

    if (error) throw error;

    state.allData      = data || [];
    state.filteredData = [...state.allData];
    state.loaded       = true;
    state.currentPage  = 1;

    updateBadge(key, state.allData.length);
    applyFilterAndRender(key);

  } catch (e) {
    console.error(`Error fetching ${key}:`, e);
    document.getElementById(`table-body-${key}`).innerHTML = `
      <div class="table-empty">
        <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <p>Error loading data: ${esc(e.message || 'Unknown error')}</p>
      </div>`;
  }
}

function applyFilterAndRender(key) {
  const state = tableState[key];
  const q = state.searchQuery;

  if (q) {
    state.filteredData = state.allData.filter(row =>
      Object.values(row).some(val =>
        val !== null && val !== undefined && String(val).toLowerCase().includes(q)
      )
    );
  } else {
    state.filteredData = [...state.allData];
  }

  // Apply sort
  if (state.sortCol) {
    state.filteredData.sort((a, b) => {
      const av = a[state.sortCol] ?? '';
      const bv = b[state.sortCol] ?? '';
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
      return state.sortDir === 'asc' ? cmp : -cmp;
    });
  }

  // Update count label
  const countEl = document.getElementById(`count-${key}`);
  if (countEl) {
    countEl.innerHTML = q
      ? `<strong>${formatNum(state.filteredData.length)}</strong> of ${formatNum(state.allData.length)} rows`
      : `<strong>${formatNum(state.allData.length)}</strong> rows total`;
  }

  renderTablePage(key);
}

function renderTablePage(key) {
  const cfg   = TABLE_CONFIGS[key];
  const state = tableState[key];
  const data  = state.filteredData;
  const total = data.length;
  const pp    = CONFIG.rowsPerPage;
  const page  = state.currentPage;
  const pages = Math.ceil(total / pp) || 1;
  const start = (page - 1) * pp;
  const end   = Math.min(start + pp, total);
  const rows  = data.slice(start, end);

  const bodyEl = document.getElementById(`table-body-${key}`);
  if (!bodyEl) return;

  if (!rows.length) {
    bodyEl.innerHTML = `<div class="table-empty">
      <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M3 3h18v18H3z" opacity=".2"/><path d="M3 9h18M9 21V9"/></svg>
      <p>No records found${state.searchQuery ? ' for "' + esc(state.searchQuery) + '"' : ''}</p>
    </div>`;
    return;
  }

  // Build table
  const colHeaders = cfg.columns.map(col => `
    <th onclick="sortTable('${key}','${col.key}')" class="${state.sortCol === col.key ? 'sorted' : ''}">
      ${col.label}
      <span class="sort-icon">${state.sortCol === col.key ? (state.sortDir === 'asc' ? '↑' : '↓') : '↕'}</span>
    </th>`).join('');

  const tableRows = rows.map((row, idx) => {
    const cells = cfg.columns.map(col => {
      const val = row[col.key];
      const rendered = col.render ? col.render(val, row) : esc(val ?? '—');
      return `<td>${rendered}</td>`;
    }).join('');
    return `<tr onclick="showRowDetail('${key}',${start + idx})">${cells}</tr>`;
  }).join('');

  // Build pagination
  const paginationHtml = buildPagination(key, page, pages, start, end, total);

  bodyEl.innerHTML = `
    <table class="data-table">
      <thead><tr>${colHeaders}</tr></thead>
      <tbody>${tableRows}</tbody>
    </table>
    ${paginationHtml}`;
}

function buildPagination(key, page, pages, start, end, total) {
  if (pages <= 1) return '';
  let pageButtons = '';

  const range = [];
  for (let i = Math.max(1, page - 2); i <= Math.min(pages, page + 2); i++) range.push(i);

  if (range[0] > 1) { pageButtons += `<button class="page-btn" onclick="goToPage('${key}',1)">1</button>`; if (range[0] > 2) pageButtons += `<span style="color:var(--text-muted);padding:0 4px">…</span>`; }
  range.forEach(p => { pageButtons += `<button class="page-btn ${p === page ? 'active' : ''}" onclick="goToPage('${key}',${p})">${p}</button>`; });
  if (range[range.length - 1] < pages) { if (range[range.length - 1] < pages - 1) pageButtons += `<span style="color:var(--text-muted);padding:0 4px">…</span>`; pageButtons += `<button class="page-btn" onclick="goToPage('${key}',${pages})">${pages}</button>`; }

  return `<div class="pagination">
    <span class="pagination-info">Showing <strong>${start + 1}–${end}</strong> of <strong>${formatNum(total)}</strong> records</span>
    <div class="pagination-controls">
      <button class="page-btn" onclick="goToPage('${key}',${page - 1})" ${page <= 1 ? 'disabled' : ''}>
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      ${pageButtons}
      <button class="page-btn" onclick="goToPage('${key}',${page + 1})" ${page >= pages ? 'disabled' : ''}>
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>`;
}

function goToPage(key, page) {
  const state = tableState[key];
  const pages = Math.ceil(state.filteredData.length / CONFIG.rowsPerPage) || 1;
  state.currentPage = Math.max(1, Math.min(page, pages));
  renderTablePage(key);
}

function sortTable(key, col) {
  const state = tableState[key];
  if (state.sortCol === col) {
    state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    state.sortCol = col;
    state.sortDir = 'asc';
  }
  state.currentPage = 1;
  applyFilterAndRender(key);
}

// ── ROW DETAIL MODAL ───────────────────────────────────────────────────────

function showRowDetail(key, index) {
  const state = tableState[key];
  const row   = state.filteredData[index];
  if (!row) return;

  const cfg = TABLE_CONFIGS[key];
  document.getElementById('modal-title').textContent = `${cfg.label} — Row Details`;

  const fields = Object.entries(row).map(([k, v]) => {
    const displayVal = v === null || v === undefined ? '<span style="color:var(--text-muted)">null</span>' :
      typeof v === 'object' ? `<pre style="font-size:11px;white-space:pre-wrap;max-height:120px;overflow-y:auto">${JSON.stringify(v, null, 2)}</pre>` :
      esc(String(v));
    return `<div class="modal-field">
      <span class="modal-field-key">${esc(k)}</span>
      <span class="modal-field-val">${displayVal}</span>
    </div>`;
  }).join('');

  document.getElementById('modal-body').innerHTML = fields;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ── EXPORT ─────────────────────────────────────────────────────────────────

function exportData(key, format) {
  const state = tableState[key];
  const data  = state.filteredData;
  if (!data.length) { alert('No data to export.'); return; }

  const cfg  = TABLE_CONFIGS[key];
  const name = `needin_${key}_${new Date().toISOString().split('T')[0]}`;

  if (format === 'json') {
    downloadFile(`${name}.json`, JSON.stringify(data, null, 2), 'application/json');
    return;
  }

  // CSV
  const headers = cfg.columns.map(c => `"${c.label}"`).join(',');
  const csvRows = data.map(row =>
    cfg.columns.map(c => {
      const val = row[c.key];
      if (val === null || val === undefined) return '';
      const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
      return `"${str.replace(/"/g, '""')}"`;
    }).join(',')
  );
  downloadFile(`${name}.csv`, [headers, ...csvRows].join('\n'), 'text/csv');
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob(['\uFEFF' + content], { type: `${mimeType};charset=utf-8` }); // BOM for Excel
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── CELL RENDERERS ─────────────────────────────────────────────────────────

function renderID(val) {
  if (!val) return '<span style="color:var(--text-muted)">—</span>';
  const s = String(val);
  return `<span class="cell-id" title="${esc(s)}">${s.slice(0, 8)}…</span>`;
}

function renderName(val) {
  if (!val) return '<span style="color:var(--text-muted)">—</span>';
  return `<span class="cell-name">${esc(String(val))}</span>`;
}

function renderDate(val) {
  if (!val) return '<span style="color:var(--text-muted)">—</span>';
  try {
    const d = new Date(val);
    return `<span title="${val}">${d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' })} <span style="color:var(--text-muted)">${d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' })}</span></span>`;
  } catch { return esc(String(val)); }
}

function renderStatus(val) {
  if (!val) return '<span style="color:var(--text-muted)">—</span>';
  return statusBadge(val);
}

function statusBadge(val) {
  const cls = `badge badge-${String(val).toLowerCase().replace(/ /g, '_')}`;
  return `<span class="${cls}">${esc(String(val))}</span>`;
}

function renderAmount(val) {
  if (val === null || val === undefined) return '<span style="color:var(--text-muted)">—</span>';
  return `<span class="cell-amount">₹${formatNum(parseFloat(val) || 0)}</span>`;
}

function renderVerified(val) {
  const yes = val === true || val === 'true';
  return `<span class="badge ${yes ? 'badge-yes' : 'badge-no'}">${yes ? '✓ Yes' : '✗ No'}</span>`;
}

function renderJSON(val) {
  if (!val) return '<span style="color:var(--text-muted)">—</span>';
  const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
  return `<span style="font-family:monospace;font-size:11px;color:var(--text-muted)" title="${esc(str)}">{…}</span>`;
}

// ── UTILITIES ──────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatNum(n) {
  if (n === null || n === undefined) return '—';
  return Number(n).toLocaleString('en-IN');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function shortDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso).toLocaleDateString('en-IN', { day:'2-digit', month:'short' }); } catch { return ''; }
}

function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}
