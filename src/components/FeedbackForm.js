import { useState } from 'react';

export default function FeedbackForm({ onComplete }) {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(feedback);
  };

  return (
    <div className="section-container">
      <h2>Brief Feedback</h2>
      <p>Please provide any brief feedback you have about the experiment below. This is optional.</p>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div className="form-group" style={{ width: '100%' }}>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="text-input"
            rows="5"
            placeholder="Enter your feedback here..."
            style={{
              width: '100%',
              resize: 'vertical',
              padding: '0.75rem',
              fontFamily: 'inherit',
              fontSize: '1rem'
            }}
          />
        </div>
        <button type="submit" className="primary-button">
          Submit Experiment
        </button>
      </form>
      <style jsx>{`
        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}
