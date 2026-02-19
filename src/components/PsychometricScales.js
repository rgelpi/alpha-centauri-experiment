import { useState } from 'react';
import { SCALES } from '../lib/scales';

const QUESTIONS = SCALES.socialDesirabilityScaleItems;

const STAGES = {
  INFO: 'INFO',
  FORM: 'FORM'
};

export default function PsychometricScales({ onComplete }) {
  const [stage, setStage] = useState(STAGES.INFO);
  const [responses, setResponses] = useState({});


  const handleChange = (questionId, value) => {
    setResponses(prev => ({ ...prev, [questionId]: parseInt(value) }));
  };

  const handleSubmit = () => {
    onComplete(responses);
  };

  if (stage === STAGES.INFO) {
    return (
      <div className="section-container">
        <h2>Questionnaire</h2>
        <p>You will now complete a short questionnaire consisting of a few statements. Please read each statement carefully and indicate your agreement or disagreement.</p>
        <button onClick={() => setStage(STAGES.FORM)} className="primary-button">
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h2>Questionnaire</h2>
      <p>Please indicate how much you agree with the following statements on a scale from 1 (Strongly disagree) to 7 (Strongly agree).</p>

      <div className="questions-list">
        {QUESTIONS.map((q) => (
          <div key={q.id} className="question-item">
            <p className="question-text">{q.text}</p>
            <div className="scale-container">
              <span className="scale-anchor anchor-left">Strongly<br />Disagree</span>
              <div className="scale-options">
                {[1, 2, 3, 4, 5, 6, 7].map((val) => (
                  <label
                    key={val}
                    className={`scale-label ${responses[q.id] === val ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={val}
                      checked={responses[q.id] === val}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                    />
                    {val}
                  </label>
                ))}
              </div>
              <span className="scale-anchor anchor-right">Strongly<br />Agree</span>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="primary-button">
        Continue
      </button>

      <style jsx>{`
        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .question-item {
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem 1.5rem;
          border-radius: 8px;
        }
        .question-text {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        .scale-container {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
        }
        .scale-options {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
        }
        .scale-label {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--foreground);
          background: rgba(255, 255, 255, 0.05);
          color: var(--foreground);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: bold;
          user-select: none;
        }
        .scale-label:hover {
          background: rgba(125, 125, 125, 0.15);
          transform: translateY(-2px);
        }
        .scale-label.selected {
          border-color: #0070f3;
          background: rgba(0, 112, 243, 0.15);
          color: #0070f3;
          box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.3);
          font-weight: bold;
        }
        .scale-label input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .scale-anchor {
          font-size: 0.9rem;
          opacity: 0.8;
          max-width: 100px;
          text-align: center;
        }
        .anchor-left {
          text-align: right;
        }
        .anchor-right {
          text-align: left;
        }

        @media (max-width: 600px) {
          .scale-container {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "left right"
              "options options";
            gap: 0.5rem;
          }
          .scale-options {
            grid-area: options;
            justify-content: space-between;
            width: 100%;
          }
          .scale-anchor {
            max-width: none;
            padding-bottom: 0.5rem;
          }
          .anchor-left {
            grid-area: left;
            text-align: left;
          }
          .anchor-right {
            grid-area: right;
            text-align: right;
          }
        }
      `}</style>
    </div>
  );
}
