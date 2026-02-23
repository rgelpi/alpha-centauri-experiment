'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import ConsentForm from '@/components/ConsentForm';
import Captcha from '@/components/Captcha';
import VignetteController from '@/components/VignetteController';
import PsychometricScales from '@/components/PsychometricScales';
import DemographicsForm from '@/components/DemographicsForm';
import FeedbackForm from '@/components/FeedbackForm';
import { saveExperimentData } from '@/lib/firebase';

function ExperimentContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState('CONSENT'); // CONSENT, CAPTCHA, INTRO, VIGNETTES, SCALES, DEMOGRAPHICS, THANK_YOU
  const [data, setData] = useState({
    consent: false,
    consentTimestamp: null,
    vignetteResponses: [],
    scaleResponses: {},
    demographics: {},
    feedback: '',
    urlParams: {
      ProlificPid: searchParams.get('ProlificPid') || "DEFAULT_TEST",
      StudyId: searchParams.get('StudyId') || "DEFAULT_TEST",
      SessionId: searchParams.get('SessionId') || "DEFAULT_TEST",
    }
  });

  const handleConsent = () => {
    setData(prev => ({
      ...prev,
      consent: true,
      consentTimestamp: new Date().toISOString()
    }));
    setStep('CAPTCHA');
  };

  const handleCaptchaVerified = () => {
    setStep('INTRO');
  };

  const handleIntroNext = () => {
    setStep('VIGNETTES');
  };

  const handleVignettesComplete = (responses) => {
    setData(prev => ({ ...prev, vignetteResponses: responses }));
    setStep('DEMOGRAPHICS');
  };

  // // For now, skip scales
  // const handleScalesComplete = (responses) => {
  //   setData(prev => ({ ...prev, scaleResponses: responses }));
  //   setStep('DEMOGRAPHICS');
  // };

  const handleDemographicsComplete = (responses) => {
    setData(prev => ({
      ...prev,
      demographics: responses
    }));
    setStep('FEEDBACK');
  };

  const handleFeedbackComplete = async (feedbackText) => {
    const completedAt = new Date().toISOString();
    let completionTimeSeconds = null;

    if (data.consentTimestamp) {
      const start = new Date(data.consentTimestamp);
      const end = new Date(completedAt);
      completionTimeSeconds = (end - start) / 1000;
    }

    const finalData = {
      ...data,
      feedback: feedbackText,
      completedAt,
      completionTimeSeconds
    };
    setData(finalData);

    // Save to backend
    await saveExperimentData(finalData);
    setStep('THANK_YOU');
  };

  return (
    <main className="main-container">
      {step === 'CONSENT' && <ConsentForm onConsent={handleConsent} />}

      {step === 'CAPTCHA' && <Captcha onVerify={handleCaptchaVerified} />}

      {step === 'INTRO' && (
        <div className="section-container">
          <h2>Instructions</h2>
          <p>
            You will read a few scenarios that take place in the future. You will be asked some questions about what you would do in the situations you are placed in.
          </p>
          <p>
            In the future, human beings have settled other planets, and you have just accepted a contract to take a job in Alpha Centauri for several years. The population of human beings on Alpha Centauri is unfamiliar to you, so you do not know about the ways that they tend to behave, and you do not know how to speak the language that is used there.
          </p>
          <p>
            <img width="100%" src="/images/alpha-centauri.png" alt="Alpha Centauri" />
          </p>
          <button onClick={handleIntroNext} className="primary-button">Start Vignettes</button>
        </div>
      )}

      {step === 'VIGNETTES' && <VignetteController onComplete={handleVignettesComplete} />}

      {step === 'SCALES' && <PsychometricScales onComplete={handleScalesComplete} />}

      {step === 'DEMOGRAPHICS' && <DemographicsForm onComplete={handleDemographicsComplete} />}

      {step === 'FEEDBACK' && <FeedbackForm onComplete={handleFeedbackComplete} />}

      {step === 'THANK_YOU' && (
        <div className="section-container">
          <h2>Thank You!</h2>
          <p>Your responses have been recorded.</p>
          <p>You may now close this window.</p>
        </div>
      )}

      <style jsx>{`
        .main-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .primary-button {
          margin-top: 2rem;
          padding: 0.75rem 2rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExperimentContent />
    </Suspense>
  );
}
