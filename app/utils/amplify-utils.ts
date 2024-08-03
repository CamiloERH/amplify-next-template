"use server";

import { cookies } from "next/headers";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { fetchAuthSession, getCurrentUser, fetchUserAttributes } from "aws-amplify/auth/server";
import { getPoolId } from "./getClientId";

export const getAmplifyServerContext = async () => {

    const cookieStore = cookies()

    const poolId = await getPoolId();

    console.log(poolId);

    const { runWithAmplifyServerContext } = createServerRunner({
        config: {
            Auth: {
                Cognito: {
                    userPoolClientId: poolId,
                    userPoolId: "us-east-2_EnrIBqkYL",
                    identityPoolId: "us-east-2:01b24d4f-bc96-4a86-8fe1-462cf4868eb0"
                }
            }
        }
    });

    return runWithAmplifyServerContext;

}



export async function AuthGetCurrentUserServer() {
    try {
        const runWithAmplifyServerContext = await getAmplifyServerContext();
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
    try {
        const runWithAmplifyServerContext = await getAmplifyServerContext();
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
    try {
        const runWithAmplifyServerContext = await getAmplifyServerContext();
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => fetchUserAttributes(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}

