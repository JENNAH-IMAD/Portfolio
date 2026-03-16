import { useEffect, useRef } from "react";
import { CONTACT } from "../constants/index";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactItem = ({ icon, label, value, link, index }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(itemRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: "power3.out",
          delay: index * 0.12,
          scrollTrigger: { trigger: itemRef.current, start: "top 90%", toggleActions: "play none none none" }
        }
      );
    }
  }, [index]);

  return (
    <div ref={itemRef} className="contact-item" style={{ opacity: 0 }}>
      <div className="flex justify-between items-center">
        <span className="contact-label">
          <span className="contact-icon">{icon}</span>
          {label}
        </span>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            {value}
          </a>
        ) : (
          <span className="contact-value">{value}</span>
        )}
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
  index: PropTypes.number.isRequired,
};

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);

  const emailAddress = "imad.jennah.pro@gmail.com";

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactItems = [
    { icon: <FaMapMarkerAlt />, label: "Address", value: CONTACT.address },
    { icon: <FaPhone />, label: "Phone", value: CONTACT.phoneNo },
    { icon: <FaEnvelope />, label: "Email", value: emailAddress, link: `mailto:${emailAddress}?subject=Hello%20Imad&body=Hi%20Imad,` },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "LinkedIn Profile", link: CONTACT.linkedin },
  ];

  return (
    <div ref={sectionRef} id="contact" className="border-b border-neutral-800 py-24">
      <div ref={titleRef} className="pb-2 w-full text-center" style={{ opacity: 0 }}>
        <h1 className="my-2 text-center text-4xl">Contact</h1>
        <div ref={lineRef} className="h-1 w-24 bg-gray-500 mx-auto mt-2 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>

      <div className="container mx-auto px-6 max-w-2xl">
        <p ref={subtitleRef} className="text-gray-400 text-center mb-8" style={{ opacity: 0 }}>
          I am always on the lookout for new challenges and opportunities to learn and grow.
          If you have a project or idea that you think I could help with, I would love to hear from you.
          Please feel free to get in touch through any of the contact methods below.
        </p>

        {contactItems.map((item, index) => (
          <ContactItem
            key={index}
            icon={item.icon}
            label={item.label}
            value={item.value}
            link={item.link}
            index={index}
          />
        ))}
      </div>

      <style>{`
        .contact-item {
          margin-bottom: 16px;
          padding: 14px 18px;
          background: rgba(23, 23, 23, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          transition: transform 0.3s ease-out, border-color 0.3s ease-out, box-shadow 0.3s ease-out;
        }
        .contact-item:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .contact-label {
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          color: #ccc;
          transition: color 0.2s ease-out;
        }
        .contact-item:hover .contact-label {
          color: #fff;
        }
        .contact-icon {
          margin-right: 10px;
          font-size: 16px;
          color: #888;
          transition: color 0.2s ease-out;
        }
        .contact-item:hover .contact-icon {
          color: #ccc;
        }
        .contact-value {
          font-size: 14px;
          color: #888;
          text-decoration: none;
          transition: color 0.2s ease-out;
        }
        .contact-value:hover {
          color: #fff;
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-item { transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
