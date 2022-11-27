"use client";

import Link from "next/link";
import React from "react";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/learntyping">Learn typing</Link>
      </li>
      <li>
        <Link href="/learnreading">Learn reading</Link>
      </li>
    </ul>
  );
}

export default Home;
