'use client';

import { Amplify } from 'aws-amplify';
import { getPoolId } from '../utils/getClientId';
import { useEffect } from 'react';

interface IAmplifyClientSide {
  userPoolCLientId: string;
}

export default function AmplifyClientSide({ userPoolCLientId }: IAmplifyClientSide) {

  useEffect(() => {

    const uri = window.location.host;

    console.log(uri);

    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolClientId: getPoolId(uri),
          userPoolId: "us-east-2_EnrIBqkYL",
          identityPoolId: "us-east-2:01b24d4f-bc96-4a86-8fe1-462cf4868eb0",
          loginWith: {
            username: true,
            email: true
          },
        },
      },
    }, { ssr: true });
  }, []);


  return null;
}