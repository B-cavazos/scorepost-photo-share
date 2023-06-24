import React, { useState,useEffect } from 'react'
import {faker} from "@faker-js/faker"
import Story from './Story';

function Stories() {
    const [suggestions, setSuggestions] = useState([]);

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
        <div>
            {suggestions.map(profile=>(
                <Story key={profile.userId} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories
