# Alpha Centauri Experiment

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)


This repository contains the source code for a web-based psychology study application. The application presents participants with hypothetical scenarios set on a futuristic Alpha Centauri colony to study social decision-making and behavioral responses.

## Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rgelpi/alpha-centauri-experiment.git
    cd alpha-centauri-experiment
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Environment Setup:
    In order to collect data, you must create a `.env.local` file in the root directory with your Firebase configuration keys.
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

src/
├─ app/               # Next.js app
├─ components/        # UI components
├─ lib/               # Experiment, scale, and firebase configuration
public/               
└─ images/            # Images for the experiment

-   `src/app`: Contains the main application pages and layout (App Router).
-   `src/components`: Reusable UI components for different stages of the experiment (e.g., `ConsentForm`, `VignetteDisplay`, `PsychometricScales`).
-   `src/lib`: Utility functions, including Firebase configuration and data submission logic.
-   `public/images`: Static assets for the experiment.

## Deployment

The application is optimized for deployment on [Vercel](https://vercel.com/docs). Ensure your environment variables are correctly set in the Vercel project settings.
