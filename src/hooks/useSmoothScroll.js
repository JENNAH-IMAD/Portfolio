import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;

    // Avoid smooth scrolling on touch devices or when reduced motion is preferred
    if (prefersReducedMotion || isTouch) {
      window.lenis = null;
      htmlEl.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      bodyEl.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(raf);
      htmlEl.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      bodyEl.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
    };
  }, []);
};

export default useSmoothScroll;
