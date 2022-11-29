"use client";

import Link from "next/link";
import React from "react";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/learnTyping">Learn typing</Link>
      </li>
      <li>
        <Link href="/learnReading">Learn reading</Link>
      </li>
      <li>
        <Link href="/learnWriting">Learn writing</Link>
      </li>
    </ul>
  );
}

export default Home;
