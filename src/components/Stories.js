import React, { useState,useEffect } from 'react'
import {faker} from "@faker-js/faker"
import { useSession } from 'next-auth/react'
import Story from './Story';


function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const {data: session} = useSession();
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthDate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        }));
        setSuggestions(suggestions);
    }, []);

    return (
        <div className='flex space-x-2 p-6 mt-8  rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            { session &&(
                <Story img={session?.user?.image} username={session?.user?.username}/>
            )
            }
            {suggestions.map(profile=>(
                <Story key={profile.userId} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories
