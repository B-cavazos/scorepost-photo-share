import React from 'react'
import Post from './Post'

function Posts() {
    const posts = [
        {
            id:'123',
            username:'binnyB',
            userImg:'https://links.papareact.com/3ke',
            img:'https://links.papareact.com/3ke',
            caption: 'this is dope.'
        },
        {
            id:'123',
            username:'binnyB',
            userImg:'https://links.papareact.com/3ke',
            img:'https://links.papareact.com/3ke',
            caption: 'this is dope.'
        },
        {
            id:'123',
            username:'binnyB',
            userImg:'https://links.papareact.com/3ke',
            img:'https://links.papareact.com/3ke',
            caption: 'this is dope.'
        },
    ];
    return (
    <div>
        { posts.map(post=>
            (<Post
            key={post.id}
            id={post.id}
            img={post.img}
            username={post.username}
            userImg={post.userImg}
            caption={post.caption}
        />)
        )}
    </div>
    )
}

export default Posts
