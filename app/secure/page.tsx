"use server";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from 'aws-amplify/auth';
import { AuthGetCurrentUserServer, AuthfetchAuthSessionServer, AuthfetchUserAttributesServer } from "../utils/amplify-utils";
import { cookies } from 'next/headers';

export default async function SecurePage() {

  const user = await AuthfetchUserAttributesServer();

  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  return (
    <div>
      {userId}
    </div>
  );
}
