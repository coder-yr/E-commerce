# ShopSphere: A Modern E-commerce Platform

ShopSphere is a full-stack, feature-rich e-commerce application built with a modern tech stack. It serves as a comprehensive template for anyone looking to build a scalable and beautiful online store.

## Key Features

- **Dynamic Product Catalog**: Browse products by category, view featured items, and see detailed product pages with image galleries and customer reviews.
- **Complete Shopping Cart**: A persistent shopping cart that lets users add, remove, and update item quantities.
- **Wishlist Feature**: Allow users to save their favorite products for later.
- **User Authentication**: Secure user sign-up and login functionality powered by Firebase Authentication.
- **Order Tracking**: A dedicated page for users to track the status of their past orders.
- **Protected Admin Dashboard**: A dedicated admin section (`/admin`) to manage products, view orders, and see a list of customers.
- **Firebase Firestore Integration**: The application uses Firestore as its backend database to store and retrieve product, user, and order data dynamically.
- **One-Click Database Seeding**: A convenient admin utility to populate the Firestore database with sample data from local files, making setup a breeze.
- **Modern & Responsive UI**: A sleek and fully responsive user interface built with Tailwind CSS and ShadCN UI components.
- **Dark Mode Toggle**: Implement theme switching between light and dark modes.
- **Server-Side Rendering (SSR)**: Built with the Next.js App Router for optimal performance and SEO.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Backend**: [Firebase](https://firebase.google.com/) (Authentication & Firestore)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) (ready for future AI features)
- **Theming**: `next-themes` for easy light/dark mode implementation.

## Getting Started

### 1. Install Dependencies

To get the project running locally, first install the necessary npm packages:

```bash
npm install
```

### 2. Configure Firebase

The application requires a Firebase project to handle authentication and the database.

1.  Create a project in the [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Firebase Authentication** (with the Email/Password provider) and **Firestore Database**.
3.  Copy your Firebase project's configuration object and paste it into `src/lib/firebase.ts`.

### 3. Seed the Database

To add the sample product, user, and order data to your Firestore database, you can use the built-in seeding utility.

1.  Log in to the application with an admin account (e.g., `admin@shopsphere.com`).
2.  Navigate to the admin dashboard at `/admin/seed-database`.
3.  Click the **Start Seeding** button.

### 4. Run the Development Server

Once your setup is complete, you can start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:9002`.
