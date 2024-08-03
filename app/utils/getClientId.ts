"use server"

import { headers } from "next/headers";

export const getPoolId = async () => {

    const headersList = headers()
    const uri = headersList.get('x-pathname');

    switch (uri) {
        case "localhost":
            return "25f5223fhkvjprn629msot83v9"
        case "otro":
            return "iu56o6uhj7q895k38542vqacf"
        default:
            return "25f5223fhkvjprn629msot83v9"
    }
}