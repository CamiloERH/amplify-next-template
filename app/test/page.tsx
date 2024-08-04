"use server";

import { AuthGetCurrentUserServer, AuthfetchUserAttributesServer } from "../utils/amplify-utils";

export default async function TestPage() {

    const user = await AuthGetCurrentUserServer();

    const userAttributes = await AuthfetchUserAttributesServer();

    return (
        <main className="flex flex-col">
            <div>{user?.username}</div>
            <div>{userAttributes?.email}</div>
        </main>
    )

}