import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronRight, Maximize2, Loader2, Calendar } from 'lucide-react';
import { GalleryItem, galleryItems, galleryCategories, Category } from '@/data/galleryData';
import { Button } from '@/components/ui/button';
import GalleryHeroScene from '@/components/3d/GalleryHeroScene';

const HighlightGallery = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [visibleCount, setVisibleCount] = useState(12);
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [imageLoading, setImageLoading] = useState(true);

    // Filter items based on active category
    const filteredItems = useMemo(() => {
        return galleryItems.filter((item) =>
            activeCategory === 'All' ? true : item.category === activeCategory
        );
    }, [activeCategory]);

    // Get items to show based on "Load More"
    const visibleItems = filteredItems.slice(0, visibleCount);

    // Reset visible count when category changes
    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category);
        setVisibleCount(12);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    const openLightbox = (item: GalleryItem) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'unset';
        setImageLoading(true);
    };

    return (
        <div className="relative min-h-screen w-full py-20 px-4 md:px-8">
            {/* 3D Background */}
            <GalleryHeroScene />

            <div className="relative container mx-auto z-10">

                {/* 1. Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black text-foreground tracking-tight"
                    >
                        Highlights & <span className="text-orange-500">Media</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Explore our journey, milestones, and the people making it happen.
                    </motion.p>
                </div>

                {/* 2. Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {galleryCategories.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`
                relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === category
                                    ? 'text-white shadow-lg shadow-orange-500/25'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-background/50 backdrop-blur-sm border border-border/50'}
              `}
                        >
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-orange-500 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{category}</span>
                        </motion.button>
                    ))}
                </div>

                {/* 3. Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer bg-muted/20"
                                onClick={() => openLightbox(item)}
                            >
                                {/* Image / Thumbnail */}
                                <div className="absolute inset-0 w-full h-full">
                                    {item.mediaType === 'video' ? (
                                        <div className="relative w-full h-full bg-black">
                                            {/* Using a high-res thumbnail for YouTube/Video if possible, else generic placeholder */}
                                            <img
                                                src={item.videoSource === 'youtube'
                                                    ? `https://img.youtube.com/vi/${item.src}/maxresdefault.jpg`
                                                    : 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop'} // Fallback for other video types if no thumb provided
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                                                    <Play className="w-5 h-5 md:w-7 md:h-7 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white rounded-md">
                                            {item.category}
                                        </span>
                                        {item.date && (
                                            <span className="text-xs text-white/70 font-medium flex items-center gap-1">
                                                <Calendar className="w-3 h-3" /> {item.date}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 mb-1 group-hover:text-orange-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                        <p className="text-xs text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 flex items-center gap-1">
                                            View Details <ChevronRight className="w-3 h-3" />
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Maximize Icon */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-orange-500 hover:border-orange-500 transition-colors">
                                        <Maximize2 className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 5. Load More Button */}
                {visibleCount < filteredItems.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mt-12"
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleLoadMore}
                            className="rounded-full px-8 border-orange-200 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-all text-base"
                        >
                            Load More Highlights
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* 4. Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all z-50 group"
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        <div
                            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="w-full relative rounded-xl overflow-hidden shadow-2xl bg-black"
                            >
                                {selectedItem.mediaType === 'video' ? (
                                    <div className="aspect-video w-full bg-black">
                                        {selectedItem.videoSource === 'youtube' && (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${selectedItem.src}?autoplay=1`}
                                                title={selectedItem.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        )}
                                        {/* Add handling for vimeo/local if needed */}
                                    </div>
                                ) : (
                                    <div className="relative flex justify-center items-center bg-zinc-900 min-h-[400px]">
                                        {imageLoading && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                                            </div>
                                        )}
                                        <img
                                            src={selectedItem.src}
                                            alt={selectedItem.title}
                                            className={`max-h-[80vh] w-auto object-contain transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                                            onLoad={() => setImageLoading(false)}
                                        />
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-full mt-6 text-left"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        {selectedItem.category}
                                    </span>
                                    {selectedItem.date && (
                                        <span className="text-zinc-400 text-sm">
                                            {selectedItem.date}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    {selectedItem.title}
                                </h2>
                                {/* Placeholder for deeper description if data had it */}
                                <p className="text-zinc-400 max-w-2xl">
                                    Experience the best of Needin. {selectedItem.category} highlights from our journey.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HighlightGallery;
