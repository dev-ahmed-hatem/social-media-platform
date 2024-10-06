import type { User } from "./users";

export type PostData = {
    url?: string;
    title: string;
    caption: string;
    date: string;
    owner: User;
    picture?: string;
};

export type CommentData = {
    content: string;
    date: string;
    owner: User;
};
