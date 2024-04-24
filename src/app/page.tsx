// page.tsx

import React from "react";
import RootLayout from "@/app/layout";
import Home from "@/app/home";

export default function Page() {
  return (
    <RootLayout>
      <Home />
    </RootLayout>
  );
}
