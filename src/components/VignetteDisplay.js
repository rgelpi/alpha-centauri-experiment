import { useState, useEffect } from 'react';

const STAGES = {
  INFO: 'INFO',
  CHOICE: 'CHOICE'
};

const INFORMANT_TYPES = [
  'guy1', 'guy2', 'guy3', 'guy4',
  'woman1', 'woman2', 'woman3', 'woman4'
];

export default function VignetteDisplay({ trial, onResponse }) {
  const { vignette, condition } = trial;
  const [stage, setStage] = useState(STAGES.INFO);
  const [choice, setChoice] = useState(null);
  const [informants, setInformants] = useState([]);

  // Reset state when trial changes
  useEffect(() => {
    setStage(STAGES.INFO);
    setChoice(null);

    // Select 5 unique informants
    const shuffled = [...INFORMANT_TYPES].sort(() => Math.random() - 0.5);
    setInformants(shuffled.slice(0, 5));
  }, [trial]);

  const handleNext = () => {
    setStage(STAGES.CHOICE);
  };

  const handleSubmit = () => {
    if (choice) {
      onResponse({
        vignetteId: vignette.id,
        condition,
        choice,
        timestamp: Date.now()
      });
    }
  };

  const renderContent = () => {
    switch (stage) {
      case STAGES.INFO:
        return (
          <>
            <h2>{vignette.title}</h2>
            <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.intro }} />
            <p className="scenario-text" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}><img style={{ width: '40%' }} src={vignette.options[0].image} alt="" /><img style={{ width: '40%' }} src={vignette.options[1].image} alt="" /></p>

            {/* Conditional Reward Info */}
            {condition.reward === 'Info' && vignette.reward.active && (
              <div className="info-block">
                <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.reward.active }} />
                <p className="scenario-text" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}><img style={{ width: '30%' }} src={vignette.images.reward} alt="" /></p>
              </div>
            )}

            {/* Conditional Norm Info */}
            {condition.norm === 'Info' && vignette.norm.active && (
              <div className="info-block">
                <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.norm.active }} />
                <p className="scenario-text" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}><img style={{ width: '30%' }} src={vignette.images.norm} alt="" /></p>
              </div>
            )}

            <button onClick={handleNext} className="primary-button">Next</button>
          </>
        );
      case STAGES.CHOICE:
        // Social Proof Text
        let minorityText = ''
        let majorityText = ''
        switch (condition.proportion) {
          case 5:
            minorityText = `<b>None</b> of the individuals walk up to the`
            majorityText = `<b>all five</b> of the individuals walk up to the`
            break;
          case 4:
            minorityText = `<b>One</b> of the individuals walks up to the`
            majorityText = `<b>four</b> of the individuals walk up to the`
            break;
          case 3:
            minorityText = `<b>Two</b> of the individuals walk up to the`
            majorityText = `<b>three</b> of the individuals walk up to the`
            break;
        }

        const socialProofText = `${minorityText} ${vignette.options[1 - vignette.majority_option].informant_text}, and ${majorityText} ${vignette.options[vignette.majority_option].informant_text}.`;

        // Calculate groups
        // Majority is Option 2 (Right side)
        // Minority is Option 1 (Left side)
        const majorityCount = condition.proportion;
        const minorityCount = 5 - majorityCount;

        let leftGroup = [];
        let rightGroup = [];

        if (vignette.majority_option === 0) {
          leftGroup = informants.slice(0, majorityCount);
          rightGroup = informants.slice(majorityCount, 5);
        } else {
          leftGroup = informants.slice(0, minorityCount);
          rightGroup = informants.slice(minorityCount, 5);
        }


        return (
          <>
            <h2>{vignette.title}</h2>
            <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.test_intro[0] }} />
            <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.test_intro[1] }} />
            <p className="scenario-text" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}><img style={{ maxWidth: '80%', maxHeight: 300 }} src={vignette.images.test} alt="" /></p>

            <div className="informant-visualization" style={{ display: 'flex', justifyContent: 'center', gap: '10%' }}>
              <div className="informant-column" style={{ justifyContent: 'center', alignItems: 'center', width: '40%' }}>
                <h3 className="column-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{vignette.options[0].name}</h3>
                <div className="informant-group left-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {leftGroup.map((type, i) => (
                    <img key={i} style={{ width: '20%' }} src={`/images/informants/${type}_right.png`} alt="Informant" className="informant-img" />
                  ))}
                </div>
              </div>

              <div className="informant-column" style={{ justifyContent: 'center', alignItems: 'center', width: '40%' }}>
                <h3 className="column-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{vignette.options[1].name}</h3>
                <div className="informant-group right-group" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {rightGroup.map((type, i) => (
                    <img key={i} style={{ width: '20%' }} src={`/images/informants/${type}_left.png`} alt="Informant" className="informant-img" />
                  ))}
                </div>
              </div>
            </div>

            <p className="scenario-text" dangerouslySetInnerHTML={{ __html: socialProofText }} />
            <p className="scenario-text" dangerouslySetInnerHTML={{ __html: vignette.choice }} />

            <div className="options-container">
              {vignette.options.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setChoice(option.name)}
                  className={`option-button ${choice === option.name ? 'selected' : ''}`}
                >
                  {option.name}
                </button>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!choice}
              className="primary-button"
            >
              Submit
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="vignette-container">
      <div className="section-container">
        {renderContent()}
      </div>

      <style jsx>{`
        .vignette-container {
          margin: 0 auto;
          text-align: center;
        }
        /* section-container is global */
        .scenario-text {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .info-block {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(125, 125, 125, 0.1);
          border-left: 4px solid #0070f3;
          border-radius: 4px;
        }
        .info-block h3 {
          margin-top: 0;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #0070f3;
        }
        
        .informant-visualization {
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;
          margin-bottom: 2rem;
          gap: 2rem;
          width: 100%;
        }
        
        .informant-column {
          flex: 1 1 0; /* Grow, shrink, basis 0 to force equal width */
          width: 40%; /* Fallback/explicit width constraint */
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.05); /* Subtle background for container visibility */
          border-radius: 8px;
          padding: 1rem;
        }

        .column-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 1rem;
          color: #333; /* Or inherit */
        }
        /* Dark mode adjustment if needed, but sticking to basics */
        @media (prefers-color-scheme: dark) {
          .column-title {
            color: #eee;
          }
        }
        
        .informant-group {
          display: flex;
          gap: 5px;
          min-height: 100px; /* Specific height to prevent jumping */
          align-items: center;
          justify-content: center;
          width: 100%;
          flex-wrap: wrap; /* Allow wrapping if many informants, though max is 5 */
        }
        
        .informant-img {
          height: 100px; /* User specified size */
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
