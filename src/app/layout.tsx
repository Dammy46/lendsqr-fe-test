import "../styles/globals.scss"
import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";

import type { Metadata } from "next";
import {  Work_Sans } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";


const workSans = Work_Sans({subsets: ["latin"]})
export const metadata: Metadata = {
  title: "Lendsqr",
  description: "User Management Application",
};

export default function RootLayout( { children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={workSans.className} suppressHydrationWarning={true}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
