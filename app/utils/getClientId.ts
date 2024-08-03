"use server"

import { headers } from "next/headers";

export const getPoolId = async () => {

    const headersList = headers()
    const uri = headersList.get('x-pathname');

    switch (uri) {
        case "new-domain-test.vercel.app":
            return "25f5223fhkvjprn629msot83v9"
        case "amplify-next-template-sage":
            return "iu56o6uhj7q895k38542vqacf"
        default:
            return "25f5223fhkvjprn629msot83v9"
    }
}