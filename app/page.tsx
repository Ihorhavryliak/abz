"use client";

import Header from "./components/Header/Header";
import InformSection from "./components/InformSection/InformSection";

export default function Home() {
  return (
    <main className="max-w-mx m-auto w-full px-4">
      <Header />
      <InformSection />
    </main>
  );
}
