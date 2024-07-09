"use client";

import { Authenticator } from "@aws-amplify/ui-react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
};
