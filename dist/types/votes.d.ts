interface votes {
    _id: string;
    id: number;
    [threadId: number]: {
        [commentId: number]: "U" | "D";
    };
}
