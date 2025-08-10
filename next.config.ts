import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'shopsphere-jz759',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:70281079862:web:930139378f04cc30033c97',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'shopsphere-jz759.firebasestorage.app',
    NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyAtuuAjbL9pKPw45XK8vWBPtRGqgg_PBwM',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'shopsphere-jz759.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '70281079862',
  },
};

export default nextConfig;
