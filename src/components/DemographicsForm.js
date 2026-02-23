import { useState } from 'react';

const STAGES = {
  INFO: 'INFO',
  FORM: 'FORM'
};

export default function DemographicsForm({ onComplete }) {
  const [stage, setStage] = useState(STAGES.INFO);
  const [formData, setFormData] = useState({
    age: '',
    gender: [],
    genderOther: '',
    race: [],
    raceOther: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category, value) => {
    setFormData(prev => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...current, value] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
  };

  if (stage === STAGES.INFO) {
    return (
      <div className="section-container">
        <h2>Demographics</h2>
        <p>Finally, you will see a short demographic questionnaire. You may skip questions you prefer not to answer.</p>
        <button onClick={() => setStage(STAGES.FORM)} className="primary-button">
          Continue
        </button>
      </div>
    );
  }

  const GENDER_OPTIONS = [
    'Female', 'Male', 'Non-binary', 'Other', 'Prefer not to say'
  ];

  const RACE_OPTIONS = [
    'American Indian or Alaska Native',
    'Asian',
    'Black or African American',
    'Hispanic or Latino',
    'Native Hawaiian or Other Pacific Islander',
    'White',
    'Other',
    'Prefer not to say'
  ];

  return (
    <div className="section-container">
      <h2>Demographics</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ fontWeight: 'bold' }}>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="text-input"
          />
        </div>

        <div className="form-group">
          <label style={{ fontWeight: 'bold' }}>Gender (Check all that apply):</label>
          <div className="checkbox-group">
            {GENDER_OPTIONS.map(option => (
              <div key={option} style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.gender.includes(option)}
                    onChange={() => handleCheckboxChange('gender', option)}
                  />
                  {option}
                </label>
                {option === 'Other' && formData.gender.includes('Other') && (
                  <input
                    type="text"
                    name="genderOther"
                    value={formData.genderOther}
                    onChange={handleChange}
                    className="text-input other-input"
                    placeholder="Please specify"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label style={{ fontWeight: 'bold' }}>Race/Ethnicity (Check all that apply):</label>
          <div className="checkbox-group">
            {RACE_OPTIONS.map(option => (
              <div key={option} style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value={option}
                    checked={formData.race.includes(option)}
                    onChange={() => handleCheckboxChange('race', option)}
                  />
                  {option}
                </label>
                {option === 'Other' && formData.race.includes('Other') && (
                  <input
                    type="text"
                    name="raceOther"
                    value={formData.raceOther}
                    onChange={handleChange}
                    className="text-input other-input"
                    placeholder="Please specify"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="primary-button">
          Continue
        </button>
      </form>

      <style jsx>{`
        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          margin-bottom: 0.5rem;
          // font-weight: bold;
        }
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .checkbox-label input {
          width: 1.2rem;
          height: 1.2rem;
          cursor: pointer;
        }
        .other-input {
          margin-left: 1.7rem;
          margin-top: 0.25rem;
          width: calc(100% - 1.7rem);
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}
