import React from 'react'
import { useEffect, useState } from 'react';
import {faker} from "@faker-js/faker"
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'], weight: ['400','700'], });

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
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
        <div className={`mt-4 ml-10 ${lexend.className}`}>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold text-sp-gray'>Suggestions for you</h3>
                <button className='class-gray-600 font-semibold'>See All</button>
            </div>
            {
                suggestions.map(profile=>(
                    <div key={profile.userId} className='flex items-center justify-between mt-3'>
                        <img className='w-10 h-10 rounded-full border border-gray-300 p-[2px]' src={profile.avatar} alt={`Suggested user, ${profile.username}'s avatar`}/>
                        <div className='flex-1 px-5'>
                            <h2 className='font-semibold text-small'>{profile.username}</h2>
                            <h3 className='text-xs text-gray-400'>contact: {profile.email}</h3>
                        </div>
                        <button className='text-sp-blue text-sm font-bold'>Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
