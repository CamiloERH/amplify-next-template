"use server";

import { signIn } from "aws-amplify/auth";

async function handleAuth(username: string, password: string) {
    const { nextStep } = await signIn({
        username,
        password
    });
}
