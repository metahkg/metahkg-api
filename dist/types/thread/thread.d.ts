import { User } from "../user";
import { Comment } from "./comment";
export interface Thread {
    id: number;
    pin?: Comment;
    op: User;
    c: number;
    vote: number;
    slink?: string;
    title: string;
    category: number;
    lastModified: string;
    createdAt: string;
    conversation: Comment[];
}
