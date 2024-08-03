"use server";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from 'aws-amplify/auth';
import { AuthGetCurrentUserServer, AuthfetchAuthSessionServer, AuthfetchUserAttributesServer } from "../utils/amplify-utils";
import { cookies, headers } from 'next/headers';

export default async function SecurePage() {

  const headersList = headers()
  const uri = headersList.get('x-pathname');

  console.log(uri);

  const session = await AuthfetchAuthSessionServer();

  console.log(session?.tokens?.accessToken.toString());

  const cookieStore = cookies();
  const userId = cookieStore.get("userId")?.value;

  return (
    <div className="flex gap-4 w-xl flex-col">
      <p className="max-w-md">{session?.tokens?.accessToken.toString()}</p>
      <p className="text-red-500">{uri}</p>
    </div>
  );
}
