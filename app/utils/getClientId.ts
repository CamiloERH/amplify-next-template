"use server"

export const getPoolId = (uri: string) => {
    switch (uri) {
        case "new-domain-test.vercel.app":
            return "25f5223fhkvjprn629msot83v9"
        case "amplify-next-template-sage.vercel.app":
            return "iu56o6uhj7q895k38542vqacf"
        default:
            return "25f5223fhkvjprn629msot83v9"
    }
}