"use client"

import * as React from 'react';
import Link from 'next/link';
import PopUp from './popup';

export default function Nav() {
    return (
        <div className='flex fixed w-full items-center justify-between p-4 bg-blue-200'>
            <Link href={"/"}><div className='font-black text-blue-500 text-head-2'>LOGO</div></Link>
            <PopUp />
        </div>
    );
}