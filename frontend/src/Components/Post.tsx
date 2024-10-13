import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { VscCommentDiscussion } from "react-icons/vsc";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link, useMatch } from "react-router-dom";
import { type PostData } from "../types/posts";

const Post: React.FC<PostData> = ({ url, caption, date, owner, picture }) => {
    const isPostPage = useMatch("/post");
    return (
        <div className="border p-4 rounded-xl relative">
            {!isPostPage && (
                <Link
                    to={"/post"}
                    className="absolute right-4 w-14 h-10 rounded-md bg-transparent border-2 border-malibu-600
            flex items-center justify-center text-malibu-600 text-xl hover:bg-malibu-600 hover:text-white cursor-pointer"
                >
                    <RiExternalLinkLine />
                </Link>
            )}
            <h2 className="text-xl font-semibold flex gap-x-2 items-center">
                <img src={owner.picture} alt="" className="size-8" />
                <span>{owner.name}</span>
            </h2>
            <span className="inline-block text-sm ms-10 text-gray-400">
                {date}
            </span>
            <p className="text-gray-700 my-4">{caption}</p>
            {picture && (
                <div className="max-h-96 overflow-hidden">
                    <img src={picture} className="w-full object-contain" />
                </div>
            )}
            <div className="actions mt-4 text-2xl flex gap-x-4">
                <FaRegHeart className="hover:text-red-600 hover:fill-red-600 cursor-pointer" />
                <VscCommentDiscussion className="hover:text-malibu-600 cursor-pointer" />
            </div>
        </div>
    );
};

export default Post;
