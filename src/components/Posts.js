import React, { useEffect, useState } from 'react'
import Post from './Post'
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Posts() {
        const [posts, setPosts] = useState([]);
        useEffect( ()=>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                setPosts(snapshot.docs);
                }
            ),
        [db]); //image links are currently broken

    return (
    <div>
        { posts.map(post=>
            (<Post
            key={post.id}
            id={post.id}
            img={post.data().image}
            username={post.data().username}
            userImg={post.data().profileImg}
            caption={post.data().caption}
        />)
        )}
    </div>
    )
}

export default Posts
