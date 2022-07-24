import { Image } from "../image";
import { User } from "../user";
import { Comment } from "./comment";
export interface Summary {
    id: number;
    pin?: Comment;
    op: User;
    c: number;
    score: number;
    slink?: string;
    title: string;
    category: number;
    lastModified: string;
    createdAt: string;
    images: Image[];
}
export declare type Thread = Summary & {
    conversation: (Comment & {
        score: number;
    })[];
};
