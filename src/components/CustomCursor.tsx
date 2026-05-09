import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Set initial positions off-screen
    gsap.set([cursor, cursorDot], { x: -100, y: -100 });

    const onMouseMove = (e: MouseEvent) => {
      // Both move at the same time with same duration
      gsap.to([cursor, cursorDot], {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "none",
        overwrite: true,
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const onMouseLeave = () => {
      setIsHovering(false);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 hidden md:block ${
          isHovering
            ? "w-16 h-16 border-primary bg-primary/10"
            : "w-10 h-10 border-primary/50"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{ mixBlendMode: "difference" }}
      />
      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 hidden md:block ${
          isHovering
            ? "w-2 h-2 bg-primary"
            : "w-3 h-3 bg-primary"
        } ${isClicking ? "scale-150" : "scale-100"}`}
      />
    </>
  );
}
