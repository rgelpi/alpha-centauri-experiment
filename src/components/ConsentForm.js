import { useState } from 'react';

export default function ConsentForm({ onConsent }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="section-container">
      <img style={{ width: '50%', display: 'block', margin: '0 auto' }} src="/images/jhu-logo.png" alt="Johns Hopkins University" />
      <h2>Consent to Participate</h2>
      <div className="consent-text">
        <p>
          You are being asked to join a research study. Participation in this study is voluntary. Even if you decide to join now, you can change your mind later.
        </p>
        <p>
          <strong>Research Summary (Key Information):</strong><br />The information in this section is intended to be an introduction to the study only.  Complete details of the study are listed in the sections below. If you are considering participation in the study, the entire document should be discussed with you before you make your final decision.  You can ask questions about the study now and at any time in the future.
        </p>
        <p>
          The purpose of this study is to understand how people use different kinds of information, such as potential rewards that are available in social settings to reason about how to behave in unfamiliar environments. In the study, you will read a few scenarios in which you will learn how others are behaving, and you will answer some questions about how you would behave in this setting.
        </p>
        <p>
          The study should take roughly 10 minutes for you to complete. To be eligible to complete the study, you should be a resident of the United States and a fluent English speaker. There are no direct benefits to you participating in the study, and the risks associated with the study are minimal.
        </p>
        <p>
          <strong>Why is this research being done?</strong><br />This research is being done to understand what kinds of information about a person or situation people use when they are trying to learn how to behave an unfamiliar environment.
        </p>
        <p>
          Participants residing in the United States who speak English can join this study.
        </p>
        <p>
          <strong>What will happen if you join this study?</strong><br />If you agree to be in this study, we will ask you to do the following things: You will read some short scenarios about how people are acting in unfamiliar settings. You will answer some questions about how you would behave in these settings. You will complete a short questionnaire at the end with a few additional questions about your understanding of the scenarios.
        </p>
        <p>
          The total time anticipated to complete this study is roughly 5–15 (depending on task version) minutes.
        </p>
        <p>
          <strong>What are the risks or discomforts of the study?</strong><br />The risks associated with participation in this study are no greater than those encountered in daily life (or during the performance of routine physical or psychological examinations or tests).
        </p>
        <p>
          <strong>Are there benefits to being in the study?</strong><br />There is no direct benefit to you from being in this study. This study may benefit society if the results lead to a better understanding of the information people use when learning from others.
        </p>
        <p><strong>What are your options if you do not want to be in the study?</strong><br />Your participation in this study is entirely voluntary. You choose whether to participate, and may decide at any time to stop if you no longer wish to participate.
        </p>
        <p>
          If you decide not to participate, there are no penalties, and you will not lose any benefits to which you would otherwise be entitled.
        </p>
        <p>
          <strong>Will it cost you anything to be in this study?</strong><br />No.
        </p>
        <p>
          <strong>Will you be paid if you join this study?</strong><br />If you satisfactorily complete the study, you will receive [$1.25–$3.75 (depending on task version)] to compensate you for your participation.
        </p>
        <p>
          <strong>Can you leave the study early?</strong><br />You can agree to be in the study now and change your mind later, without any penalty or loss of benefits. If you want to withdraw from the study, you may simply leave this page.
        </p>
        <p>
          <strong>What is the Institutional Review Board (IRB) and how does it protect you?</strong><br />This study has been reviewed by an Institutional Review Board (IRB), a group of people that reviews human research studies. The IRB can help you if you have questions about your rights as a research participant or if you have other questions, concerns or complaints about this research study.  You may contact the IRB at 410-516-6580 or hirb@jhu.edu.
        </p>
        <p>
          <strong>What should you do if you have questions about the study?</strong><br />Contact the principal investigator, Dr. Gillian K. Hadfield by email at [insert email here]. If you cannot reach the principal investigator or wish to talk to someone else, call the IRB office at 410-516-5680.
        </p>
        <p>
          If you have questions about your rights as a research participant or feel that you have not been treated fairly, please call the Homewood Institutional Review Board at Johns Hopkins University at (410) 516-6580.
        </p>
      </div>

      <div className="consent-checkbox">
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I have read the above information and agree to participate.
        </label>
      </div>

      <button
        onClick={onConsent}
        disabled={!agreed}
        className="primary-button"
      >
        Start Experiment
      </button>

      <style jsx>{`
        .consent-text {
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .consent-checkbox {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
