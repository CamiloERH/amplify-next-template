"use server";

import { cookies } from "next/headers";

export const saveSessionMetadata = async () => {
    cookies().set('userId', '24', { httpOnly: true });
}