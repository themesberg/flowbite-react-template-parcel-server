"use server-entry";

import { ThemeModeScript } from "flowbite-react";
import { ThemeInit } from "../.flowbite-react/init";
import { Welcome } from "./welcome";

import "./client";
import "./page.css";

export async function Page() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Flowbite React Template Parce - Server mode</title>
        <ThemeModeScript />
      </head>
      <body>
        <ThemeInit />
        <Welcome />
      </body>
    </html>
  );
}
