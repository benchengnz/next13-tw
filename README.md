This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Setup

To run this project locally, you'll need to set up your environment variables. Create a file named `.env.local` in the root of the project with the following content:

```env
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-firebase-auth-domain"
NEXT_PUBLIC_FIREBASE_DATABASE_URL="your-firebase-database-url"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-firebase-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-firebase-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-firebase-messaging-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-firebase-app-id"
FIREBASE_EMAIL="your-firebase-email-for-server-authentication"
FIREBASE_PASSWORD="your-firebase-password-for-server-authentication"
FIREBASE_PRIVATE_KEY="your-firebase-admin-sdk-private-key"
```

Replace the placeholders with your actual Firebase configuration values and credentials. This information can be found in your Firebase project settings.

Firebase Configuration Variables

- NEXT_PUBLIC_FIREBASE_API_KEY: Your Firebase API key.
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: Your Firebase Auth domain.
- NEXT_PUBLIC_FIREBASE_DATABASE_URL: Your Firebase Database URL.
- NEXT_PUBLIC_FIREBASE_PROJECT_ID: Your Firebase project ID.
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: Your Firebase storage bucket.
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: Your Firebase messaging sender ID.
- NEXT_PUBLIC_FIREBASE_APP_ID: Your Firebase app ID.

Server Authentication Variables

- FIREBASE_EMAIL: Email for server-side Firebase authentication (used for restricted operations).
- FIREBASE_PASSWORD: Password for server-side Firebase authentication.
- FIREBASE_PRIVATE_KEY: Your Firebase Admin SDK private key. Ensure this key is kept secure and is not exposed in public repositories. Replace newline characters in the private key with \n.

Note: Do not expose your real Firebase credentials or private keys in public repositories or documentation.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
