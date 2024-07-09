"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";

export default function SecurePage() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={signOut}>Cerrar sesión</button>
    </div>
  );
}
