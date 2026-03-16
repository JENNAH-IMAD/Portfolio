import { useEffect, useRef } from "react";
import { CERTIFICATIONS_IMAGES } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  { id: 1, src: CERTIFICATIONS_IMAGES.C1, title: "Modeling Software Systems using UML", issuer: "Coursera · Hong Kong University", link: "https://www.coursera.org/account/accomplishments/verify/2G5A7W2SX97T" },
  { id: 2, src: CERTIFICATIONS_IMAGES.C2, title: "Android App Development", issuer: "Coursera · Specialization", link: "https://www.coursera.org/account/accomplishments/specialization/BFYBZ3TVW53L" },
  { id: 3, src: CERTIFICATIONS_IMAGES.C3, title: "Java FullStack Developer", issuer: "Coursera · Specialization", link: "https://www.coursera.org/account/accomplishments/specialization/Q3R6ZGNS69D2" },
  { id: 4, src: CERTIFICATIONS_IMAGES.C4, title: "Machine Learning with Python", issuer: "Coursera · IBM", link: "https://www.coursera.org/account/accomplishments/verify/V273Y5SWFURZ" },
  { id: 5, src: CERTIFICATIONS_IMAGES.C5, title: "DevOps, Cloud, and Agile Foundations", issuer: "Coursera · IBM", link: "https://www.coursera.org/account/accomplishments/specialization/WK7NPNM99Z3R" },
  { id: 6, src: CERTIFICATIONS_IMAGES.C6, title: "Advanced Topics in Database Technologies", issuer: "Coursera · Professional Certificate", link: "https://www.coursera.org/account/accomplishments/verify/SMW3WW3KH9BR" },
  { id: 7, src: CERTIFICATIONS_IMAGES.C7, title: "Back-End Apps with Node.js and Express", issuer: "Coursera · IBM", link: "https://www.coursera.org/account/accomplishments/verify/PC5WLKE8WWTU" },
  { id: 8, src: CERTIFICATIONS_IMAGES.C8, title: "Scalable Java Microservices with Spring Boot", issuer: "Coursera · Google Cloud", link: "https://www.coursera.org/account/accomplishments/verify/N9JWG28TFYAU" },
  { id: 9, src: CERTIFICATIONS_IMAGES.C9, title: "Advanced React", issuer: "Coursera · Meta", link: "https://www.coursera.org/account/accomplishments/verify/QQH2N78B9X3U" },
];

const Certification = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(trackRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allCards = [...certifications, ...certifications];

  return (
    <div ref={sectionRef} id="certifications" className="border-b border-neutral-800 py-24 overflow-hidden">
      {/* Title — same style as other sections */}
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">Certifications</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>
      <p ref={subtitleRef} className="text-gray-400 text-center mb-10 container mx-auto px-6" style={{ opacity: 0 }}>
        Professional certifications that reflect my commitment to continuous learning and growth.
      </p>

      {/* Infinite scroll track */}
      <div className="cert-marquee-mask">
        <div ref={trackRef} className="cert-marquee-track" style={{ opacity: 0 }}>
          <div className="cert-marquee-inner">
            {allCards.map((cert, i) => (
              <a
                key={`${cert.id}-${i}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-scroll-card group"
              >
                {/* Image */}
                <div className="cert-card-img-wrap">
                  <img src={cert.src} alt={cert.title} className="cert-card-img" />
                </div>
                {/* Info */}
                <div className="cert-card-info">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-issuer">{cert.issuer}</p>
                </div>
                {/* Hover overlay button */}
                <span className="cert-hover-btn">View Certificate</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Marquee mask (fade edges) ── */
        .cert-marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
          mask-image: linear-gradient(to right, transparent, black 60px, black calc(100% - 60px), transparent);
        }

        .cert-marquee-track {
          overflow: hidden;
          width: 100%;
        }
        .cert-marquee-inner {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: certScroll 40s linear infinite;
        }
        .cert-marquee-track:hover .cert-marquee-inner {
          animation-play-state: paused;
        }

        @keyframes certScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Card ── */
        .cert-scroll-card {
          flex-shrink: 0;
          width: 280px;
          display: block;
          position: relative;
          background: rgba(23, 23, 23, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out;
        }
        .cert-scroll-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* ── Image ── */
        .cert-card-img-wrap {
          height: 140px;
          overflow: hidden;
        }
        .cert-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease-out;
        }
        .cert-scroll-card:hover .cert-card-img {
          transform: scale(1.06);
        }

        /* ── Info ── */
        .cert-card-info {
          padding: 14px 16px;
        }
        .cert-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          line-height: 1.35;
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cert-card-issuer {
          font-size: 12px;
          color: #777;
        }

        /* ── Hover button ── */
        .cert-hover-btn {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #fff;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease-out;
          border-radius: 12px;
        }
        .cert-scroll-card:hover .cert-hover-btn {
          opacity: 1;
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .cert-scroll-card {
            width: 240px;
          }
          .cert-card-img-wrap {
            height: 120px;
          }
          .cert-card-info {
            padding: 12px 14px;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .cert-marquee-inner { animation: none !important; }
          .cert-scroll-card, .cert-card-img, .cert-hover-btn { transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Certification;
