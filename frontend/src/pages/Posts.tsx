import React from "react";
import Post from "../Components/Post";
import { type User } from "../types/users";

const user: User = {
    name: "Ahmed Hatem",
    picture: "/logo512.png",
};

const Posts: React.FC<{ type: "Feed" | "My Posts" | "Liked Posts" }> = ({
    type,
}) => {
    return (
        <div className="md:px-10 lg:w-4/5">
            <h1 className="text-3xl font-bold mb-6">{type}</h1>
            <div className="space-y-4">
                <Post
                    title="Post Title 1"
                    caption=" This is a sample post description."
                    date="10-5-2024"
                    owner={user}
                    picture="/logo512.png"
                />
                <Post
                    title="Post Title 2"
                    caption="This is another sample post description."
                    date="10-5-2024"
                    owner={user}
                    // picture="/logo512.png"
                />
                <Post
                    title="Post Title 3"
                    caption="This is another sample post description."
                    date="10-5-2024"
                    owner={user}
                    // picture="/logo512.png"
                />
                <Post
                    title="Post Title 4"
                    caption="This is another sample post description."
                    date="10-5-2024"
                    owner={user}
                    // picture="/logo512.png"
                />
                <Post
                    title="Post Title 5"
                    caption=" This is a sample post description."
                    date="10-5-2024"
                    owner={user}
                    picture="/logo512.png"
                />
                <Post
                    title="Post Title 6"
                    caption="This is another sample post description."
                    date="10-5-2024"
                    owner={user}
                    // picture="/logo512.png"
                />
            </div>
        </div>
    );
};

export default Posts;
