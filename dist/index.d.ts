import { AxiosInstance, AxiosResponse, CancelToken } from "axios";
export declare class Client {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
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
    thread(id: number, page?: number, limit?: number, sort?: Sort, start?: number, end?: number, cancelToken?: CancelToken | undefined): Promise<Thread>;
    protected processThread(response: AxiosResponse): Promise<Thread>;
    /**
     * Check if a thread exists
     * @param id thread id
     * @return OK
     */
    threadCheck(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadCheck(response: AxiosResponse): Promise<OK>;
    /**
     * Get thread images
     * @param id thread id
     * @return Success
     */
    threadImages(id: number, cancelToken?: CancelToken | undefined): Promise<Image[]>;
    protected processThreadImages(response: AxiosResponse): Promise<Image[]>;
    /**
     * Create thread
     * @return Success
     */
    threadCreate(body: Body, cancelToken?: CancelToken | undefined): Promise<Anonymous>;
    protected processThreadCreate(response: AxiosResponse): Promise<Anonymous>;
    /**
     * Get comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    comment(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Comment>;
    protected processComment(response: AxiosResponse): Promise<Comment>;
    /**
     * Get replies
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentReplies(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Comment[]>;
    protected processCommentReplies(response: AxiosResponse): Promise<Comment[]>;
    /**
     * Get comment images.
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentImages(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Image[]>;
    protected processCommentImages(response: AxiosResponse): Promise<Image[]>;
    /**
     * Create comment
     * @param id thread id
     * @return Success
     */
    commentCreate(id: number, body: Body2, cancelToken?: CancelToken | undefined): Promise<Anonymous2>;
    protected processCommentCreate(response: AxiosResponse): Promise<Anonymous2>;
    /**
     * Vote on comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentVote(body: Body3, id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentVote(response: AxiosResponse): Promise<OK>;
    /**
     * Pin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentPin(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentPin(response: AxiosResponse): Promise<OK>;
    /**
     * Unpin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentUnpin(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentUnpin(response: AxiosResponse): Promise<OK>;
    /**
     * Get status
     * @return Success
     */
    meStatus(cancelToken?: CancelToken | undefined): Promise<Anonymous3>;
    protected processMeStatus(response: AxiosResponse): Promise<Anonymous3>;
    /**
     * Get blocked users
     * @return Success
     */
    meBlocked(cancelToken?: CancelToken | undefined): Promise<User[]>;
    protected processMeBlocked(response: AxiosResponse): Promise<User[]>;
    /**
     * Get votes
     * @param id thread id
     * @return Success
     */
    meVotes(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous4[]>;
    protected processMeVotes(response: AxiosResponse): Promise<Anonymous4[]>;
    /**
     * Block user
     * @return OK
     */
    meBlock(body: Body4, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeBlock(response: AxiosResponse): Promise<OK>;
    /**
     * Unblock user
     * @return OK
     */
    meUnblock(body: Body5, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeUnblock(response: AxiosResponse): Promise<OK>;
    /**
     * Set avatar
     * @param avatar (optional) Avatar image. Must be smaller than 2MB. Png, jpg, jpeg, jfif, svg, gif, webp are supported.
     * @return OK
     */
    meAvatar(avatar?: FileParameter, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeAvatar(response: AxiosResponse): Promise<OK>;
    /**
     * Rename
     * @return Success
     */
    meRename(body: Body6, cancelToken?: CancelToken | undefined): Promise<Anonymous5>;
    protected processMeRename(response: AxiosResponse): Promise<Anonymous5>;
    /**
     * Get categories
     * @return Success
     */
    categories(cancelToken?: CancelToken | undefined): Promise<Category[]>;
    protected processCategories(response: AxiosResponse): Promise<Category[]>;
    /**
     * Get category
     * @param id category id, or `bytid<thread id>`
     * @return Success
     */
    category(id: Id, cancelToken?: CancelToken | undefined): Promise<Category>;
    protected processCategory(response: AxiosResponse): Promise<Category>;
    /**
     * Get user profile
     * @param id user id
     * @return Success
     */
    usersProfile(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous6>;
    protected processUsersProfile(response: AxiosResponse): Promise<Anonymous6>;
    /**
     * Get user name
     * @param id user id
     * @return Success
     */
    usersProfileName(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous7>;
    protected processUsersProfileName(response: AxiosResponse): Promise<Anonymous7>;
    /**
     * Get user avatar
     * @param id user id
     * @return Success
     */
    usersProfileAvatar(id: number, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processUsersProfileAvatar(response: AxiosResponse): Promise<FileResponse>;
    /**
     * Login
     * @return Success
     */
    usersLogin(body: Body7, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersLogin(response: AxiosResponse): Promise<Token>;
    /**
     * Register
     * @return Success, verification email sent.
     */
    usersRegister(body: Body8, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersRegister(response: AxiosResponse): Promise<OK>;
    /**
     * Verify email
     * @return Success
     */
    usersVerify(body: Body9, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersVerify(response: AxiosResponse): Promise<Token>;
    /**
     * Resend verification email
     * @return Success
     */
    usersResend(body: Body10, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersResend(response: AxiosResponse): Promise<OK>;
    /**
     * Forgot password
     * @return Success
     */
    usersForgot(body: Body11, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersForgot(response: AxiosResponse): Promise<OK>;
    /**
     * Reset password
     * @return Success
     */
    usersReset(body: Body12, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersReset(response: AxiosResponse): Promise<Token>;
    /**
     * Get threads in a category
     * @param category category id, or bytid<thread id>
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuCategory(category: Category2, sort?: Sort2, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuCategory(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Search threads
     * @param q Search query
     * @param mode (optional) Search mode. `0: title` or `1: op`
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuSearch(q: string, mode?: Mode, sort?: Sort3, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuSearch(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get threads created by a user
     * @param id user id
     * @param sort (optional) Sort threads by `0: Created time` or `1: Last comment time`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuHistory(id: number, sort?: Sort4, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuHistory(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get threads
     * @param threads array of thread ids
     * @return Success
     */
    menuThreads(threads: number[], cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
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
    role: UserRole;
}
export interface Category {
    /** category id */
    id: number;
    /** category name */
    name: string;
    /** category is hidden */
    hidden?: boolean;
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
export declare function isComment(object: any): object is Comment;
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
    id?: number;
}
export interface Body5 {
    id?: number;
}
export interface Body6 {
    name: string;
}
export interface Id {
}
export interface Body7 {
    /** Username or email */
    name: Name;
    pwd: string;
}
export interface Body8 {
    name: string;
    email: string;
    pwd: string;
    sex: UserSex;
    rtoken: string;
    /** Invite code, required if admin set register=invite See [register mode](https://docs.metahkg.org/docs/customize/registermode) */
    inviteCode?: string;
}
export interface Body9 {
    email: string;
    /** Verification code sent to email */
    code: string;
}
export interface Body10 {
    email: string;
    rtoken: string;
}
export interface Body11 {
    email: string;
    rtoken: string;
}
export interface Body12 {
    email: string;
    /** Verification code sent to email */
    code: string;
    pwd: string;
}
export interface Category2 {
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
export declare enum Sort4 {
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
export declare function isAnonymous5(object: any): object is Anonymous5;
export interface Anonymous6 extends User {
    /** Number of threads created by user */
    count: number;
    /** Date and time when user was created */
    createdAt?: Date;
}
export declare function isAnonymous6(object: any): object is Anonymous6;
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
export declare enum UserRole {
    Admin = "admin",
    User = "user"
}
export interface Quote extends CommentC {
}
export declare function isQuote(object: any): object is Quote;
/** Comment object with score */
export interface Conversation extends Comment {
    /** score of the comment (`upvotes - downvotes`) */
    score?: number;
}
export declare function isConversation(object: any): object is Conversation;
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
