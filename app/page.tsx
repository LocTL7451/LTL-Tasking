import React from "react";
import HeaderComponent from "@/components/Header/Header";
import Image from "next/image";
import BoardComponent from "@/components/Board/Board";

export default function Home() {
  return (
    <main>
      {/* Header Component  */}
      <HeaderComponent />
      {/* Board Component */}
      <BoardComponent />
    </main>
  );
}
