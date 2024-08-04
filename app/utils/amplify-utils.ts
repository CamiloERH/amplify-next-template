import { cookies, headers } from "next/headers";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { fetchAuthSession, getCurrentUser, fetchUserAttributes } from "aws-amplify/auth/server";
import { getUserClientPoolId } from "./getClientId";

export const getAmplifyServerContext = (uri: string) => {

    const userPoolClientId = getUserClientPoolId(uri);

    const { runWithAmplifyServerContext } = createServerRunner({
        config: {
            Auth: {
                Cognito: {
                    userPoolClientId: userPoolClientId,
                    userPoolId: "us-east-2_EnrIBqkYL",
                    identityPoolId: "us-east-2:01b24d4f-bc96-4a86-8fe1-462cf4868eb0"
                }
            }
        }
    });

    return runWithAmplifyServerContext;

}

export async function AuthGetCurrentUserServer() {

    const headersList = headers()
    const uri = headersList.get('x-pathname');

    try {
        const runWithAmplifyServerContext = getAmplifyServerContext(uri!);
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => getCurrentUser(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}

export async function AuthfetchAuthSessionServer() {

    const headersList = headers()
    const uri = headersList.get('x-pathname');

    try {
        const runWithAmplifyServerContext = getAmplifyServerContext(uri!);
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => fetchAuthSession(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}


export async function AuthfetchUserAttributesServer() {

    const headersList = headers()
    const uri = headersList.get('x-pathname');

    try {
        const runWithAmplifyServerContext = getAmplifyServerContext(uri!);
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => fetchUserAttributes(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}

