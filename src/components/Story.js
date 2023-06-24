import React from 'react'

function Story({img, username}) {
    return (
        <div>
            <img src={img} alt={`${username}'s avatar`}/>
            <p>{username}</p>
        </div>
    )
}

export default Story
