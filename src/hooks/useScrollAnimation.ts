import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "stagger";

interface UseScrollAnimationOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>({
  type = "fadeUp",
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.1,
  once = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getAnimation = () => {
      switch (type) {
        case "fadeUp":
          return { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } };
        case "fadeIn":
          return { from: { opacity: 0 }, to: { opacity: 1 } };
        case "slideLeft":
          return { from: { opacity: 0, x: -80 }, to: { opacity: 1, x: 0 } };
        case "slideRight":
          return { from: { opacity: 0, x: 80 }, to: { opacity: 1, x: 0 } };
        case "scale":
          return { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } };
        case "stagger":
          return { from: { opacity: 0, y: 40 }, to: { opacity: 1, y: 0 } };
        default:
          return { from: { opacity: 0, y: 60 }, to: { opacity: 1, y: 0 } };
      }
    };

    const { from, to } = getAnimation();

    if (type === "stagger") {
      const children = element.children;
      gsap.set(children, from);
      gsap.to(children, {
        ...to,
        duration,
        stagger: staggerDelay,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    } else {
      gsap.set(element, from);
      gsap.to(element, {
        ...to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [type, delay, duration, staggerDelay, once]);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
}
