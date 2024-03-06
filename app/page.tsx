"use client";

import Header from "./components/Header/Header";
import SectionForm from "./components/Section/SectionForm/SectionForm";
import SectionInform from "./components/Section/SectionInform/SectionInform";
import SectionUser from "./components/Section/SectionUser/SectionUser";

export default function Home() {
  return (
    <main className="max-w-mx m-auto w-full px-4 mb-[100px]">
      <Header />
      <SectionInform />
      <SectionUser />
      <SectionForm />
    </main>
  );
}
