import React from "react";
import { type User } from "../types/users";

const people: User[] = [
    { name: "Person 1", picture: "logo512.png" },
    { name: "Person 2", picture: "logo512.png" },
    { name: "Person 3", picture: "logo512.png" },
    { name: "Person 4", picture: "logo512.png" },
];

const People = () => {
    return (
        <div className="sticky top-10 w-64 bg-malibu-50 px-3 py-6 shadow-md">
            <h1 className="font-bold">People you may know:</h1>
            <div className="suggestions flex flex-col gap-y-6 pt-5">
                {people.map((person, index) => (
                    <div key={index} className="flex gap-x-2 items-center">
                        <div className="img">
                            <img src={person.picture} alt={person.name} className="size-10 rounded-full" />
                        </div>
                        <div className="name">
                            <span className="font-bold">{person.name}</span>
                            <br />
                            <span className="text-sm text-gray-400">1 mutual friend</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;
