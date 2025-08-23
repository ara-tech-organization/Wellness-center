// components/FloatingButtons.jsx
import React from "react";

const FloatingButtons = () => {
  return (
    <>
      <div className="floating-buttons">
        {/* WhatsApp */}
        <a
          href="https://wa.me/917200175761"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-button whatsapp"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp icon"></i>
        </a>

        {/* Call */}
        <a
          href="tel:+917200175761"
          className="fab-button call"
          aria-label="Call"
        >
          <i className="fa-solid fa-phone icon"></i>
          {/* <i class="fa-solid fa-phone"></i> */}
        </a>
      </div>

      <style>{`
        .floating-buttons {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 9999;
        }

        .fab-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          animation: slow-beat 2s ease-in-out infinite;
          transition: background-color 0.3s;
        }

        .fab-button:hover {
          filter: brightness(1.1);
        }

        .whatsapp {
          background-color: #25D366;
        }

        .call {
          background-color: #007bff;
        }

        .icon {
          font-size: 20px;
        }

        @keyframes slow-beat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;
