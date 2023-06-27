import React from 'react'
import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline'
import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react';

function Post({id, username, userImg, img, caption}) {
    const {data: session} = useSession();
    return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className="rounded-full  h-12 w-12 object-contain border p-1 mr-3" alt={`${username}'s avatar`}/>
            <p className='flex-1 font-bold'>{username}</p>
            <EllipsisHorizontalIcon className='h-5'/>
        </div>
        {/* IMG */}
        <img src={img} className='object-cover w-full' alt={`${username}'s post number ${id}`}/>
        {/* BUTTONS */}
        {session && (
            <div className='flex justify-between px=4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn'/>
                    <ChatBubbleBottomCenterIcon className='btn'/>
                    <PaperAirplaneIcon className='btn'/>
                </div>
                <BookmarkIcon className='btn'/>
            </div>
        )}
        {/* CAPTION */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-1'>{username} </span>
            {caption}
        </p>
        {/* COMMENTS */}
        {/* INPUT */}
        {session && (
            <form className='flex items-center p-4'>
                <FaceSmileIcon className='h-7 w-7'/>
                <input type='text' className='border-none flex-1 focus:ring-0 outline-none'placeholder='Add a comment...'/>
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
        )}
    </div>
    )
}

export default Post