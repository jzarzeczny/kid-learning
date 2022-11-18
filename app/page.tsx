"use client";

import Link from "next/link";
import React, { useEffect, useReducer } from "react";
import RootLayout from "./layout";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/learntyping">Learn typing</Link>
      </li>
    </ul>
  );
}

export default Home;
