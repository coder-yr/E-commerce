# ShopSphere - A Modern E-commerce Storefront

Welcome to ShopSphere, a feature-rich e-commerce application built with a modern, full-stack technology set. This project serves as a comprehensive template for building production-ready online stores, complete with an admin dashboard, user authentication, product management, and a seamless shopping experience.

This application was built with the help of an AI assistant.

## Overview

ShopSphere is designed to provide a complete e-commerce solution, from the customer-facing storefront to the administrative backend. It showcases best practices in modern web development, including server-side rendering, client-side interactivity, and integration with backend services.

### Key Features:

*   **Modern Storefront**: A responsive and visually appealing shop where users can browse products, view details, and add items to their cart.
*   **Comprehensive Product Pages**: Detailed product views with image galleries, descriptions, reviews, and related items.
*   **Shopping Cart & Wishlist**: Persistent cart and wishlist functionality using client-side state management.
*   **Secure Checkout Flow**: A multi-step checkout process with user authentication checks.
*   **User Authentication**: Full email/password sign-up and login functionality powered by Firebase Auth.
*   **Admin Dashboard**: A protected area for store administrators to manage products, view orders, and oversee customers.
*   **Database Seeding**: An easy-to-use interface for populating the Firestore database with sample data.
*   **Theming**: Light and dark mode support with a customizable theme.

## Tech Stack

This project leverages a powerful and modern set of technologies:

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
*   **Authentication**: [Firebase Authentication](https://firebase.google.com/docs/auth)
*   **Database**: [Cloud Firestore](https://firebase.google.com/docs/firestore)
*   **Generative AI**: [Google AI with Genkit](https://firebase.google.com/docs/genkit)
*   **Deployment**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

## Getting Started

Follow these steps to get a local copy of the project up and running.

### 1. Prerequisites

*   Node.js (v18 or later)
*   npm, yarn, or pnpm

### 2. Firebase Setup

This project requires a Firebase project to handle authentication and the database.

1.  Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  In your project, go to **Project Settings** > **General**.
3.  Under "Your apps", click the **Web** icon (`</>`) to create a new web app.
4.  Give your app a nickname and click **Register app**.
5.  You will be presented with a `firebaseConfig` object. You will need these values for your environment variables.

### 3. Environment Variables

Create a `.env.local` file in the root of your project and add your Firebase configuration keys. You will also need to add your Google AI (Gemini) API key for any AI-powered features.

```
# Firebase Public Config
NEXT_PUBLIC_FIREBASE_API_KEY="AIza..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-project-id.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="1234567890"
NEXT_PUBLIC_FIREBASE_APP_ID="1:1234567890:web:abcdef123456"

# Genkit/Gemini API Key
GEMINI_API_KEY="your-gemini-api-key"
```

### 4. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/shopsphere.git
cd shopsphere
npm install
```

### 5. Running the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.

## Seeding the Database

To get started with sample data, you can use the database seeding utility in the admin dashboard.

1.  Log in as the admin user (`admin@shopsphere.com`). You may need to create this user in your Firebase Authentication console first.
2.  Navigate to the **Admin Dashboard**.
3.  Go to the **Seed Database** page.
4.  Click the **Start Seeding** button to populate your Firestore with sample products, users, and orders.

## Deployment

This application is ready to be deployed on modern hosting platforms like Vercel or Netlify.

### Deploying with Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Go to the [Vercel dashboard](https://vercel.com/new) and import your repository.
3.  Vercel will automatically detect the Next.js framework.
4.  Go to the **Settings** tab of your new Vercel project and add the environment variables from your `.env.local` file.
5.  Trigger a new deployment. Vercel will build and deploy your application.

### Deploying with Netlify

1.  Push your code to a Git repository.
2.  Go to your [Netlify dashboard](https://app.netlify.com/start) and import your repository.
3.  Netlify will use the `netlify.toml` file included in this project to configure the build.
4.  Go to **Site settings > Build & deploy > Environment** and add your environment variables.
5.  Trigger a new deployment.
