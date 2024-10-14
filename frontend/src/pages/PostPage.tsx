import React from "react";
import Post from "../Components/Post";
import { type User } from "../types/users";
import Comment from "../Components/Comment";
import AddComment from "../Components/AddComment";

const user: User = {
    url: "http://127.0.0.1:8000/api/users/users/1/",
    first_name: "Ahmed",
    last_name: "Hatem",
    email: "ahmed@a.com",
    phone: "",
    is_active: true,
    picture: "http://127.0.0.1:8000/media/users/pictures/logo512.png",
    full_name: "Ahmed Hatem",
};

const PostPage = () => {
    return (
        <div className="md:px-8 lg:px-10 lg:w-4/5">
            <Post
                title="Post Title 1"
                caption=" This is a sample post description."
                date="10-5-2024"
                owner={user}
                picture="/logo512.png"
            />
            <h1 className="text-2xl font-bold mt-10">Recent Comments: </h1>
            <div className="comments mt-8 flex flex-col gap-y-10">
                <Comment
                    content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure magnam, dolorum officia quia saepe quos! Neque, officiis, ipsa omnis non exercitationem voluptates est nesciunt cumque aut ex, repellat suscipit!"
                    date="5-10-2024"
                    owner={user}
                />
                <Comment
                    content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure magnam, dolorum officia quia saepe quos! Neque, officiis, ipsa omnis non exercitationem voluptates est nesciunt cumque aut ex, repellat suscipit!"
                    date="5-10-2024"
                    owner={user}
                />
                <Comment
                    content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure magnam, dolorum officia quia saepe quos! Neque, officiis, ipsa omnis non exercitationem voluptates est nesciunt cumque aut ex, repellat suscipit!"
                    date="5-10-2024"
                    owner={user}
                />
            </div>
            <h1 className="text-2xl font-bold mt-10 mb-8">Add Comment: </h1>
            <AddComment />
        </div>
    );
};

export default PostPage;
