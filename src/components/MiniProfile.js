import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function MiniProfile() {
    const {data: session} = useSession();
    console.log(session);
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src={session?.user?.image} className='w-16 h-16 rounded-full border p-[2px]' alt='your profile picture'/>
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session?.user?.name}</h2>
                <h3 className='text-sm text-gray-400'>Welcome to ScorePost</h3>
            </div>
            <button className='text-blue-400 text-small font-semibold' onClick={()=>signOut()}>Sign Out</button>
        </div>
    )
}

export default MiniProfile
