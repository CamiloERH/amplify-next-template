"use client";

import {
  Authenticator,
  Image,
  View,
  useTheme,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui-react";
I18n.putVocabularies(translations);
I18n.setLanguage("es");

I18n.putVocabularies({
  es: {
    "Sign In": "Iniciar sesión",
    "Sign Up": "Regístrate",
  },
});

export default function SignInPage() {
  return (
    <div className="h-full w-full flex flex-row ">
      <div className="w-1/2 bg-blue-700"></div>
      <Authenticator
        className="w-1/2"
        components={{
          Header() {
            const { tokens } = useTheme();

            return (
              <View textAlign="center" padding={tokens.space.large}>
                <Image
                  alt="Amplify logo"
                  src="https://cdn.prod.website-files.com/641c71dbd14ab4774355779b/6515df4264016fc268fbe1f1_Logo%20actualizado_Medismart-04.png"
                />
              </View>
            );
          },
        }}
      >
        {({ signOut, user }) => (
          <div className="flex flex-col w-1/2 m-auto justify-center items-center">
            <div>{JSON.stringify(user)}</div>
            <button onClick={signOut} className="w-1/2">
              Cerrar sesion
            </button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}
