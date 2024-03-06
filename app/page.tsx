'use client'
import Image from "next/image";
import ButtonGeneral from "./components/Button/ButtonGeneral";
import FieldUpload from "./components/Fields/FieldUpload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <ButtonGeneral onClick={()=>{}} text="324" />
        <FieldUpload />
    </main>
  );
}
