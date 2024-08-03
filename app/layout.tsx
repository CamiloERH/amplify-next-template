

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import ConfigureAmplifyClientSide from "./components/ConfigureAmplifyClientSide";
import { SessionProvider } from "./components/SessionProvider";
import { getPoolId } from "./utils/getClientId";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const poolId = await getPoolId();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ConfigureAmplifyClientSide
            userPoolCLientId={poolId}
          />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
