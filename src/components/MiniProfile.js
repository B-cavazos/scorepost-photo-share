import React from 'react'
import { Aldrich, Lexend } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react'

const aldrich = Aldrich({ subsets: ['latin'], weight: '400', });
const lexend = Lexend({ subsets: ['latin'], weight: ['400','700'], });

function MiniProfile() {
    const {data: session} = useSession();
    return (
        <div className={`flex items-center justify-between mt-14 ml-10 ${lexend.className}`}>
            <img src={session?.user?.image} className='w-16 h-16 rounded-full border p-[2px]' alt='your profile picture'/>
            <div className='flex-1 mx-4'>
                <h2 className={`${aldrich.className}`}>{session?.user?.name}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to ScorePost</h3>
            </div>
            <button className='text-sp-blue text-small font-semibold dark:text-sp-blue-lightMode' onClick={()=>signOut()}>Sign Out</button>
        </div>
    )
}

export default MiniProfile
