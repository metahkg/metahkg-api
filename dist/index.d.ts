export declare class Client {
    private http;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, http?: {
        fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
    });
    /**
     * Get thread
     * @param id thread id
     * @param page (optional) Page number. Ignored if start and end both specified.
     * @param limit (optional) Limit of comments per page.
     * @param sort (optional) Sort comments by score / time / latest. "time" means sorting acsendingly by created time, "latest" means desceningly, "score" means sorting descendingly by `upvotes - downvotes`
     * @param start (optional) Starting from comment id. If end is specified but start is not, start default to `(page - 1) * limit + 1`
     * @param end (optional) Ending at comment id. Must be greater or equal to start. If start is specified but end is not, end defaults to `page * limit`
     * @return Success
     */
    thread(id: number, page?: number, limit?: number, sort?: Sort, start?: number, end?: number): Promise<Thread>;
    protected processThread(response: Response): Promise<Thread>;
    /**
     * Check if a thread exists
     * @param id thread id
     * @return OK
     */
    threadCheck(id: number): Promise<OK>;
    protected processThreadCheck(response: Response): Promise<OK>;
    /**
     * Get thread images
     * @param id thread id
     * @return Success
     */
    threadImages(id: number): Promise<Image[]>;
    protected processThreadImages(response: Response): Promise<Image[]>;
    /**
     * Create thread
     * @param body (optional)
     * @return Success
     */
    threadCreate(body?: Body): Promise<Anonymous>;
    protected processThreadCreate(response: Response): Promise<Anonymous>;
    /**
     * Get comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    comment(id: number, cid: number): Promise<Comment>;
    protected processComment(response: Response): Promise<Comment>;
    /**
     * Get replies
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentReplies(id: number, cid: number): Promise<Comment[]>;
    protected processCommentReplies(response: Response): Promise<Comment[]>;
    /**
     * Get comment images.
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentImages(id: number, cid: number): Promise<Image[]>;
    protected processCommentImages(response: Response): Promise<Image[]>;
    /**
     * Create comment
     * @param id thread id
     * @param body (optional)
     * @return Success
     */
    commentCreate(id: number, body?: Body2): Promise<Anonymous2>;
    protected processCommentCreate(response: Response): Promise<Anonymous2>;
    /**
     * Vote on comment
     * @param body (optional)
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentVote(id: number, cid: number, body?: Body3): Promise<OK>;
    protected processCommentVote(response: Response): Promise<OK>;
    /**
     * Pin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentPin(id: number, cid: number): Promise<OK>;
    protected processCommentPin(response: Response): Promise<OK>;
    /**
     * Unpin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentUnpin(id: number, cid: number): Promise<OK>;
    protected processCommentUnpin(response: Response): Promise<OK>;
    /**
     * Get status
     * @return Success
     */
    meStatus(): Promise<Anonymous3>;
    protected processMeStatus(response: Response): Promise<Anonymous3>;
    /**
     * Get blocked users
     * @return Success
     */
    meBlocked(): Promise<User[]>;
    protected processMeBlocked(response: Response): Promise<User[]>;
    /**
     * Get votes
     * @param id thread id
     * @return Success
     */
    meVotes(id: number): Promise<Anonymous4[]>;
    protected processMeVotes(response: Response): Promise<Anonymous4[]>;
    /**
     * Block user
     * @return OK
     */
    meBlock(): Promise<OK>;
    protected processMeBlock(response: Response): Promise<OK>;
    /**
     * Unblock user
     * @return OK
     */
    meUnblock(): Promise<OK>;
    protected processMeUnblock(response: Response): Promise<OK>;
    /**
     * Set avatar
     * @param avatar (optional) Avatar image. Must be smaller than 2MB. Png, jpg, jpeg, jfif, svg, gif, webp are supported.
     * @return OK
     */
    meAvatar(avatar?: FileParameter): Promise<OK>;
    protected processMeAvatar(response: Response): Promise<OK>;
    /**
     * Rename
     * @param body (optional)
     * @return Success
     */
    meRename(body?: Body4): Promise<Anonymous5>;
    protected processMeRename(response: Response): Promise<Anonymous5>;
    /**
     * Get categories
     * @return Success
     */
    categories(): Promise<Category[]>;
    protected processCategories(response: Response): Promise<Category[]>;
    /**
     * Get category
     * @param id category id, or `bytid<thread id>`
     * @return Success
     */
    category(id: Id): Promise<Category>;
    protected processCategory(response: Response): Promise<Category>;
    /**
     * Get user profile
     * @param id user id
     * @return Success
     */
    usersProfile(id: number): Promise<Anonymous6>;
    protected processUsersProfile(response: Response): Promise<Anonymous6>;
    /**
     * Get user name
     * @param id user id
     * @return Success
     */
    usersProfileName(id: number): Promise<Anonymous7>;
    protected processUsersProfileName(response: Response): Promise<Anonymous7>;
    /**
     * Get user avatar
     * @param id user id
     * @return Success
     */
    usersProfileAvatar(id: number): Promise<FileResponse>;
    protected processUsersProfileAvatar(response: Response): Promise<FileResponse>;
    /**
     * Login
     * @param body (optional)
     * @return Success
     */
    usersLogin(body?: Body5): Promise<Token>;
    protected processUsersLogin(response: Response): Promise<Token>;
    /**
     * Register
     * @param body (optional)
     * @return Success, verification email sent.
     */
    usersRegister(body?: Body6): Promise<OK>;
    protected processUsersRegister(response: Response): Promise<OK>;
    /**
     * Verify email
     * @param body (optional)
     * @return Success
     */
    usersVerify(body?: Body7): Promise<Token>;
    protected processUsersVerify(response: Response): Promise<Token>;
    /**
     * Resend verification email
     * @param body (optional)
     * @return Success
     */
    usersResend(body?: Body8): Promise<OK>;
    protected processUsersResend(response: Response): Promise<OK>;
    /**
     * Forgot password
     * @param body (optional)
     * @return Success
     */
    usersForgot(body?: Body9): Promise<OK>;
    protected processUsersForgot(response: Response): Promise<OK>;
    /**
     * Reset password
     * @param body (optional)
     * @return Success
     */
    usersReset(body?: Body10): Promise<Token>;
    protected processUsersReset(response: Response): Promise<Token>;
    /**
     * Get threads in a category
     * @param category category id
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuCategory(category: number, sort?: Sort2, page?: number, limit?: number): Promise<ThreadMeta[]>;
    protected processMenuCategory(response: Response): Promise<ThreadMeta[]>;
    /**
     * Search threads
     * @param q Search query
     * @param mode (optional) Search mode. `0: title` or `1: op`
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuSearch(q: string, mode?: Mode, sort?: Sort3, page?: number, limit?: number): Promise<ThreadMeta[]>;
    protected processMenuSearch(response: Response): Promise<ThreadMeta[]>;
    /**
     * Get threads created by a user
     * @param id user id
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuHistory(id: number, page?: number, limit?: number): Promise<ThreadMeta[]>;
    protected processMenuHistory(response: Response): Promise<ThreadMeta[]>;
    /**
     * Get threads
     * @param threads Thread ids
     * @return Success
     */
    menuThreads(threads: number[]): Promise<ThreadMeta[]>;
    protected processMenuThreads(response: Response): Promise<ThreadMeta[]>;
}
export interface OK {
    response: OKResponse;
}
export interface Token {
    token: string;
}
export interface ErrorDto {
    /** error message */
    error: string;
}
/** Vote. "U" means upvote. "D" means downvote. */
export declare enum Vote {
    U = "U",
    D = "D"
}
export interface User {
    /** user id */
    id: number;
    /** User name */
    name: string;
    sex: UserSex;
    /** date when user was created */
    createdAt: Date;
}
export interface Category {
    /** category id */
    id: number;
    /** category name */
    name: string;
}
export interface Image {
    cid: number;
    /** image source url */
    src: string;
}
export interface RemovedComment {
    id: number;
    removed: boolean;
}
/** Comment object with constants only (without upvotes, downvotes and replies) */
export interface CommentC {
    /** comment id */
    id: number;
    /** user created the comment */
    user: User;
    /** comment in stringified html */
    comment: string;
    /** comment converted to plain text */
    text: string;
    images: string[];
    createdAt: Date;
    /** shortened link to the comment */
    slink: string;
    quote?: Quote;
}
/** Comment object */
export interface Comment extends CommentC {
    /** number of downvotes */
    D?: number;
    /** number of upvotes */
    U?: number;
    /** list of comment ids that are replies to this comment */
    replies?: number[];
}
export interface Thread {
    /** thread id */
    id: number;
    /** thread title */
    title: string;
    category: number;
    op: User;
    /** number of comments in the thread (i.e. `conversation.length`) */
    c: number;
    /** An array of comments. Comment ids must not be duplicated. */
    conversation: (Conversation | RemovedComment)[];
    /** score of the thread (first comment) (`upvotes - downvotes`) */
    score: number;
    images: Image[];
    /** date when thread was created */
    createdAt: Date;
    /** date when thread was last modified */
    lastModified: Date;
    /** shortened link to the thread */
    slink: string;
    /** pinned comment */
    pin?: CommentC;
}
/** Thread metadata (no comments, images and pinned comment) */
export interface ThreadMeta {
    id: number;
    title: string;
    category: number;
    op: User;
    c: number;
    score: number;
    createdAt: Date;
    lastModified: Date;
    slink: string;
}
export declare enum Sort {
    Score = "score",
    Time = "time",
    Latest = "latest"
}
export interface Body {
    title: string;
    comment: string;
    rtoken: string;
    category: number;
}
export interface Body2 {
    comment: string;
    rtoken: string;
    quote?: number;
}
export interface Body3 {
    vote: Vote;
}
export interface Body4 {
    name: string;
}
export interface Id {
}
export interface Body5 {
    /** Username or email */
    name: Name;
    pwd: string;
}
export interface Body6 {
    name: string;
    email: string;
    pwd: string;
    sex: UserSex;
    rtoken: string;
    /** Invite code, required if admin set register=invite See [register mode](https://docs.metahkg.org/docs/customize/registermode) */
    inviteCode?: string;
}
export interface Body7 {
    email: string;
    /** Verification code sent to email */
    code: string;
}
export interface Body8 {
    email: string;
    rtoken: string;
}
export interface Body9 {
    email: string;
    rtoken: string;
}
export interface Body10 {
    email: string;
    /** Verification code sent to email */
    code: string;
    pwd: string;
}
export declare enum Sort2 {
    _0 = 0,
    _1 = 1
}
export declare enum Mode {
    _0 = 0,
    _1 = 1
}
export declare enum Sort3 {
    _0 = 0,
    _1 = 1
}
export interface Anonymous {
    id: number;
}
export interface Anonymous2 {
    id: number;
}
export interface Anonymous3 {
    /** Whether user is logged in */
    active: boolean;
}
export interface Anonymous4 {
    cid: number;
    vote: Vote;
}
export interface Anonymous5 extends OK {
    token: string;
}
export interface Anonymous6 extends User {
    /** Number of threads created by user */
    count: number;
}
export interface Anonymous7 {
    name: string;
}
export declare enum OKResponse {
    Ok = "ok"
}
export declare enum UserSex {
    M = "M",
    F = "F"
}
export interface Quote extends CommentC {
}
/** Comment object with score */
export interface Conversation extends Comment {
    /** score of the comment (`upvotes - downvotes`) */
    score?: number;
}
export interface Name {
}
export interface FileParameter {
    data: any;
    fileName: string;
}
export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: {
        [name: string]: any;
    };
}
export declare class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: {
        [key: string]: any;
    };
    result: any;
    constructor(message: string, status: number, response: string, headers: {
        [key: string]: any;
    }, result: any);
    protected isApiException: boolean;
    static isApiException(obj: any): obj is ApiException;
}
