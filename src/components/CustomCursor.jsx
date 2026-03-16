import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const check = () => setIsDesktop(window.matchMedia("(min-width: 769px) and (pointer: fine)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Position off-screen initially
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const moveCursor = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out", overwrite: "auto" });
    };

    const grow = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.3, duration: 0.3, overwrite: "auto" });
      gsap.to(dot, { scale: 0.5, duration: 0.3, overwrite: "auto" });
    };

    const shrink = () => {
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.3, overwrite: "auto" });
      gsap.to(dot, { scale: 1, duration: 0.3, overwrite: "auto" });
    };

    window.addEventListener("mousemove", moveCursor);

    // Delegate hover detection instead of attaching per-element
    const handleOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover], .cert-card, .tech-card, .group")) {
        grow();
      }
    };
    const handleOut = (e) => {
      const related = e.relatedTarget;
      if (!related || !related.closest("a, button, [data-cursor-hover], .cert-card, .tech-card, .group")) {
        shrink();
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-white rounded-full pointer-events-none z-[9999]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white/60 rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
};

export default CustomCursor;
