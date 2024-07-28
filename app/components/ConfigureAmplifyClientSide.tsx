'use client';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: process.env.NEXT_PUBLIC_POOL_CLIENT_ID!,
      userPoolId: process.env.NEXT_PUBLIC_POOL_ID!,
      identityPoolId: process.env.NEXT_PUBLIC_POOL_IDENTITY_ID!,
      loginWith: {
        username: true,
        email: true
      },
    },
  },
  
  
}, { ssr: true });

export default function AmplifyClientSide() {
  return null;
}