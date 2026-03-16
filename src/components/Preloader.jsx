import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    // Counter 0 → 100
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.val) + "%";
        }
      },
    }, 0);

    // First name letters cascade from bottom with rotation
    const firstChars = firstNameRef.current?.querySelectorAll(".char");
    if (firstChars) {
      tl.fromTo(firstChars,
        { opacity: 0, y: 60, rotateX: -90, scale: 0.5 },
        {
          opacity: 1, y: 0, rotateX: 0, scale: 1,
          stagger: 0.06, duration: 0.5, ease: "back.out(1.7)",
        },
        0.2
      );
    }

    // Last name letters cascade (slightly delayed)
    const lastChars = lastNameRef.current?.querySelectorAll(".char");
    if (lastChars) {
      tl.fromTo(lastChars,
        { opacity: 0, y: 60, rotateX: -90, scale: 0.5 },
        {
          opacity: 1, y: 0, rotateX: 0, scale: 1,
          stagger: 0.06, duration: 0.5, ease: "back.out(1.7)",
        },
        0.5
      );
    }

    // Line draws from center
    tl.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
      1.0
    );

    // Subtitle fade in
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      1.2
    );

    // Hold for a moment then reveal
    tl.to({}, { duration: 0.3 });

    // All text scales up slightly and fades
    tl.to([firstNameRef.current, lastNameRef.current, lineRef.current, subtitleRef.current, counterRef.current], {
      opacity: 0,
      scale: 1.1,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      stagger: 0.05,
    });

    // Container slides up
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: "power3.inOut",
    }, "-=0.1");
  }, [onComplete]);

  const renderChars = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ display: "inline-block", perspective: "600px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Counter */}
      <div
        ref={counterRef}
        className="absolute top-8 right-10 text-white/20 text-6xl sm:text-8xl font-bold tracking-tighter"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        0%
      </div>

      {/* Name */}
      <div className="flex flex-col items-center gap-1">
        <div
          ref={firstNameRef}
          className="flex text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.15em] text-white"
          style={{ perspective: "600px" }}
        >
          {renderChars("JENNAH")}
        </div>
        <div
          ref={lastNameRef}
          className="flex text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.3em] text-white/80"
          style={{ perspective: "600px" }}
        >
          {renderChars("IMAD")}
        </div>
      </div>

      {/* Line */}
      <div
        ref={lineRef}
        className="h-[1px] w-40 sm:w-56 bg-gradient-to-r from-transparent via-white to-transparent mt-6 origin-center"
        style={{ transform: "scaleX(0)" }}
      />

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-white/30 text-xs sm:text-sm tracking-[0.4em] uppercase mt-4"
        style={{ opacity: 0 }}
      >
        Full Stack Developer
      </p>
    </div>
  );
};

export default Preloader;
