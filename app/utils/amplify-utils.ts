// utils/amplify-utils.ts
import { cookies } from "next/headers";

import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { fetchAuthSession, getCurrentUser, fetchUserAttributes } from "aws-amplify/auth/server";

import { type Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
    config: outputs,
    cookies,
});

export async function AuthGetCurrentUserServer() {
    try {
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
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => fetchUserAttributes(contextSpec),
        });
        return currentUser;
    } catch (error) {
        console.error(error);
    }
}