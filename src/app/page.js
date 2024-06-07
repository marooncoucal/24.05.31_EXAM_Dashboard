"use client"

import Image from "next/image";
import Link from "next/link";

import * as React from 'react';
import Button from '@mui/material/Button';
import PopUp from "./popup";

export default function Home() {
  return (
    <main>
      <div className='flex flex-col gap-[24px] justify-center items-center h-[500px] bg-blue-100 rounded-[32px] m-8'>
        <h1 className="font-bold text-[48px]">Welcome to Website</h1>
        <PopUp />
      </div>
    </main>
  );
}


