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
import { SignInInput, signIn } from "aws-amplify/auth";
import { saveSessionMetadata } from "../actions/utils";
I18n.putVocabularies(translations);
I18n.setLanguage("es");

I18n.putVocabulariesForLanguage('es', {
  'Sign In': 'Iniciar sesión', // Tab header
  'Sign in': 'Ingresar', // Button label
});

const handleSignIn = async (input: SignInInput) => {
  const { username, password } = input;
  const signInOutput = await signIn({
    username: username,
    password: password,
    options: {
      authFlowType: "USER_PASSWORD_AUTH"
    }
  });

  if (signInOutput.nextStep.signInStep === "DONE") {
    await saveSessionMetadata();
  }

  console.log(signInOutput);

  return signInOutput

}

export default function Login() {
  return (
    <div className="h-full w-full flex flex-row ">
      <div className="w-1/2 bg-blue-700"></div>
      <Authenticator
        services={{
          handleSignIn
        }}
        formFields={{
          signIn: {
            username: {
              placeholder: 'Ingresa tu RUT o Correo',
              label: 'RUT o Correo'
            },
            password: {
              placeholder: 'Escribe tu contraseña'
            }
          }
        }}
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

