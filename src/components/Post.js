import React, { useEffect, useState } from 'react'
import {
    BookmarkIcon,
    ChatBubbleBottomCenterIcon,
    EllipsisHorizontalIcon,
    FaceSmileIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { Aldrich, Lexend } from 'next/font/google';
import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react';
import { addDoc, deleteDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Moment from 'react-moment';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400', });
const lexend = Lexend({ subsets: ['latin'], weight: ['400','700'], });

function Post({id, username, userImg, img, caption}) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(
        ()=> onSnapshot(
            query(
                collection(db, 'posts', id, 'comments'),
                orderBy('timestamp', 'desc')
            ),
            (snapshot) => setComments(snapshot.docs)
        ),
        [db, id]
    );

    useEffect(
        ()=> onSnapshot(
            query(
                collection(db, 'posts', id, 'likes')
            ),
            (snapshot) => setLikes(snapshot.docs)
        ),
        [db, id]
    );

    useEffect(()=>
        setHasLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1)
    ,[likes, session]);

    const likePost = async () => {
        if (hasLiked){
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        }else{
            await setDoc(doc(db, 'posts', id, 'likes', session?.user?.uid),{
                username: session?.user?.username,
            })
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment("");

        await addDoc(collection(db, 'posts', id, 'comments'),{
            comment: commentToSend,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp(),
        });
    }

    return (
    <div className='my-7 rounded-sm border-t-2'>
        {/* Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className="rounded-full h-12 w-12 object-contain p-1 mr-3" alt={`${username}'s avatar`}/>
            <p className={`flex-1 ${aldrich.className}`}>{username}</p>
            <EllipsisHorizontalIcon className='h-5'/>
        </div>
        {/* IMG */}
        <img src={img} className='object-cover w-full' alt={`${username}'s post number ${id}`}/>
        {/* BUTTONS */}
        {session && (
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    {hasLiked ? (
                            <HeartIconFilled className='btn text-sp-pink' onClick={likePost}/>
                        ):(
                            <HeartIcon className='btn' onClick={likePost}/>
                        )}
                    <ChatBubbleBottomCenterIcon className='btn'/>
                    <PaperAirplaneIcon className='btn'/>
                </div>
                <BookmarkIcon className='btn'/>
            </div>
        )}
        {/* CAPTION */}
        <p className={`p-5 truncate ${lexend.className}`}>
            {likes.length > 0 && (
                <p className='font-bold mr-1'>{likes.length} likes</p>
            )}
            <span className='font-bold mr-1'>{username} </span>
            {caption}
        </p>
        {/* COMMENTS */}
        {comments.length > 0 && (
            <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                {comments.map(comment=>(
                    <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                        <img src={comment.data().userImage} className='h-7 rounded-full'/>
                        <p className={`text-sm flex-1 ${lexend.className}`}>
                            <span className='font-bold'>{comment.data().username}</span>{" "}
                            {comment.data().comment}
                        </p>
                        <Moment fromNow className='text-xs pr-5'>
                            {comment.data().timestamp.toDate()}
                        </Moment>
                    </div>
                ))}
            </div>
        )}
        {/* INPUT */}
        {session && (
            <form className='flex items-center p-4'>
                <FaceSmileIcon className='h-7 w-7'/>
                <input
                    type='text'
                    className='border-none flex-1 mx-5 bg-sp-white-off focus:ring-0 outline-none'
                    placeholder='Add a comment...'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    />
                <button
                    type='submit'
                    disabled={!comment.trim()}
                    onClick={sendComment}
                    className='font-semibold text-sp-blue dark:text-sp-blue-lightMode'
                >
                    Post
                </button>
            </form>
        )}
    </div>
    )
}

export default Post