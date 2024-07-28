"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { updateUserAttributes } from "aws-amplify/auth";
import { getCurrentUser } from 'aws-amplify/auth';

export default function ProfilePage() {

    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const { route } = useAuthenticator(context => [context.route]);
    const { authStatus } = useAuthenticator(context => [context.authStatus]);

    console.log(authStatus);
    
    const handleUpdateProfile = async () => {
        await updateUserAttributes({
            userAttributes: {
                name: "CAMILOOOOOO"
            }
        })
    }

    return (
        <button onClick={handleUpdateProfile}>editar</button>
    )
}