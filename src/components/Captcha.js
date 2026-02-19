import { useState } from 'react';

export default function Captcha({ onVerify }) {
  // Simple "Odd one out" task
  const items = ['🍎', '🍎', '🍌', '🍎', '🍎'];
  const correctIndex = 2; // Banana

  const [error, setError] = useState(false);

  const handleSelect = (index) => {
    if (index === correctIndex) {
      onVerify();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <div className="section-container">
      <h2>Placeholder Captcha</h2>
      <p>Please select the item that does not belong.</p>

      <div className="captcha-grid">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className="captcha-button"
            aria-label="Select item"
          >
            {item}
          </button>
        ))}
      </div>

      {error && <p className="error-message">Incorrect. Please try again.</p>}

      <style jsx>{`
        .section-container {
          text-align: center;
        }
        .captcha-grid {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }
        .captcha-button {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          cursor: pointer;
          padding: 1rem;
          transition: transform 0.2s;
        }
        .captcha-button:hover {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.2);
        }
        .error-message {
          color: #ff4444;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
