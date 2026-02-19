import { useState, useEffect } from 'react';
import VignetteDisplay from './VignetteDisplay';
import { generateTrialSequence } from '@/lib/experiment-data';

export default function VignetteController({ onComplete }) {
  const [trials, setTrials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    // Initialize trials on mount
    const sequence = generateTrialSequence();
    setTrials(sequence);
  }, []);

  const handleResponse = (response) => {
    const newResponses = [...responses, response];
    setResponses(newResponses);

    if (currentIndex + 1 < trials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newResponses);
    }
  };

  if (trials.length === 0) return <div>Loading scenarios...</div>;

  return (
    <div>
      <div className="progress-bar">
        Scenario {currentIndex + 1} of {trials.length}
      </div>
      <VignetteDisplay
        trial={trials[currentIndex]}
        onResponse={handleResponse}
      />

      <style jsx>{`
        .progress-bar {
          text-align: center;
          margin-bottom: 2rem;
          color: #888;
        }
      `}</style>
    </div>
  );
}
