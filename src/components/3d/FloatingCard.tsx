import { useRef, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function FloatingCard({ children, className = "", glowColor = "hsl(var(--primary))" }: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [{ rotateX, rotateY, scale, shadow }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    shadow: 0,
    config: { mass: 1, tension: 350, friction: 40 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    api.start({
      rotateX: rotateXValue,
      rotateY: rotateYValue,
      scale: 1.02,
      shadow: 1,
    });
  };

  const handleMouseLeave = () => {
    api.start({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      shadow: 0,
    });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform: rotateX.to(
          (rx) =>
            `perspective(1000px) rotateX(${rx}deg) rotateY(${rotateY.get()}deg)`
        ),
        scale,
        boxShadow: shadow.to(
          (s) =>
            `0 ${4 + s * 8}px ${12 + s * 12}px -4px ${glowColor}15,
             0 ${2 + s * 4}px ${8 + s * 8}px -2px ${glowColor}08`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}
