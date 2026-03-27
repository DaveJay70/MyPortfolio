'use client';

import React from 'react';

const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

function Navbar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .jnav {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: rgba(10, 0, 20, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(167, 139, 250, 0.12);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }

        .jnav-inner {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── Logo ── */
        .jlogo {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 8px;
        }
        .jlogo-bracket {
          font-family: monospace;
          font-size: 0.7rem;
          color: rgba(167,139,250,0.4);
          line-height: 1;
        }
        .jlogo-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.03em;
        }
        .jlogo-dot {
          font-size: 1.6rem;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ── Nav links ── */
        .jlinks {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .jlink {
          position: relative;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(156, 163, 175, 1);
          padding: 7px 16px;
          border-radius: 999px;
          letter-spacing: 0.01em;
          transition: color 0.2s ease, background 0.2s ease;
          display: block;
        }
        .jlink:hover {
          color: #fff;
          background: rgba(167, 139, 250, 0.1);
        }
        .jlink::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #a78bfa, #f472b6);
          transition: width 0.3s ease;
        }
        .jlink:hover::after {
          width: calc(100% - 32px);
        }

        /* ── Hire Me button ── */
        @keyframes jshimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .jhire {
          text-decoration: none;
          display: inline-block;
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.03em;
          background: linear-gradient(135deg, #7c3aed, #ec4899, #7c3aed);
          background-size: 200% auto;
          animation: jshimmer 4s linear infinite;
          border: none;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .jhire:hover {
          box-shadow: 0 0 24px rgba(124,58,237,0.55), 0 0 48px rgba(236,72,153,0.18);
          transform: translateY(-1px);
          color: #fff;
          text-decoration: none;
        }

        /* ── Responsive ── */
        @media (max-width: 767px) {
          .jlinks  { display: none; }
          .jhire   { display: none; }
        }
      `}</style>

      <nav className="jnav">
        <div className="jnav-inner">

          {/* Logo */}
          <a href="#home" className="jlogo">
            <img src="/logo.png" alt="J" style={{ width: 32, height: 32, borderRadius: '8px', objectFit: 'cover' }} />
            <span className="jlogo-name">Jay</span>
            <span className="jlogo-dot">.</span>
          </a>

          {/* Links */}
          <ul className="jlinks">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="jlink">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="jhire">
            Hire Me ✦
          </a>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
