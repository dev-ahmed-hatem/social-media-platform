import React from "react";
import type { CommentData } from "../types/posts";

const Comment: React.FC<CommentData> = ({ content, date, owner }) => {
    return (
        <div>
            {/* Comment Owner */}
            <div className="flex gap-x-2 items-center">
                <div className="img">
                    <img
                        src={owner.picture}
                        alt={owner.full_name}
                        className="size-10 rounded-full"
                    />
                </div>
                <div className="name">
                    <span className="font-bold">{owner.full_name}</span>
                    <br />
                    <span className="text-sm text-gray-400">{date}</span>
                </div>
            </div>

            {/* Content */}
            <p className="text-gray-700 ps-2 mt-1">{content}</p>
            <div className="sep h-[1px] bg-black m-auto w-3/4 my-2"></div>
        </div>
    );
};

export default Comment;
