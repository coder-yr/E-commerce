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
    FIREBASE_PROJECT_ID: 'shopsphere-jz759',
    FIREBASE_APP_ID: '1:70281079862:web:930139378f04cc30033c97',
    FIREBASE_STORAGE_BUCKET: 'shopsphere-jz759.firebasestorage.app',
    FIREBASE_API_KEY: 'AIzaSyAtuuAjbL9pKPw45XK8vWBPtRGqgg_PBwM',
    FIREBASE_AUTH_DOMAIN: 'shopsphere-jz759.firebaseapp.com',
    FIREBASE_MESSAGING_SENDER_ID: '70281079862',
  },
};

export default nextConfig;
