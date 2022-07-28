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
     * @param body (optional)
     * @return Success
     */
    threadCreate(body?: Body, cancelToken?: CancelToken | undefined): Promise<Anonymous>;
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
     * @param body (optional)
     * @return Success
     */
    commentCreate(id: number, body?: Body2, cancelToken?: CancelToken | undefined): Promise<Anonymous2>;
    protected processCommentCreate(response: AxiosResponse): Promise<Anonymous2>;
    /**
     * Vote on comment
     * @param body (optional)
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentVote(id: number, cid: number, body?: Body3, cancelToken?: CancelToken | undefined): Promise<OK>;
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
    meBlock(cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeBlock(response: AxiosResponse): Promise<OK>;
    /**
     * Unblock user
     * @return OK
     */
    meUnblock(cancelToken?: CancelToken | undefined): Promise<OK>;
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
     * @param body (optional)
     * @return Success
     */
    meRename(body?: Body4, cancelToken?: CancelToken | undefined): Promise<Anonymous5>;
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
     * @param body (optional)
     * @return Success
     */
    usersLogin(body?: Body5, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersLogin(response: AxiosResponse): Promise<Token>;
    /**
     * Register
     * @param body (optional)
     * @return Success, verification email sent.
     */
    usersRegister(body?: Body6, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersRegister(response: AxiosResponse): Promise<OK>;
    /**
     * Verify email
     * @param body (optional)
     * @return Success
     */
    usersVerify(body?: Body7, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersVerify(response: AxiosResponse): Promise<Token>;
    /**
     * Resend verification email
     * @param body (optional)
     * @return Success
     */
    usersResend(body?: Body8, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersResend(response: AxiosResponse): Promise<OK>;
    /**
     * Forgot password
     * @param body (optional)
     * @return Success
     */
    usersForgot(body?: Body9, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersForgot(response: AxiosResponse): Promise<OK>;
    /**
     * Reset password
     * @param body (optional)
     * @return Success
     */
    usersReset(body?: Body10, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersReset(response: AxiosResponse): Promise<Token>;
    /**
     * Get threads in a category
     * @param category category id
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuCategory(category: number, sort?: Sort2, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
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
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    menuHistory(id: number, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuHistory(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get threads
     * @param threads Thread ids
     * @return Success
     */
    menuThreads(threads: number[], cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processMenuThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
}
export declare class OK implements IOK {
    response: OKResponse;
    constructor(data?: IOK);
    init(_data?: any): void;
    static fromJS(data: any): OK;
    toJSON(data?: any): any;
}
export interface IOK {
    response: OKResponse;
}
export declare class Token implements IToken {
    token: string;
    constructor(data?: IToken);
    init(_data?: any): void;
    static fromJS(data: any): Token;
    toJSON(data?: any): any;
}
export interface IToken {
    token: string;
}
export declare class ErrorDto implements IErrorDto {
    /** error message */
    error: string;
    constructor(data?: IErrorDto);
    init(_data?: any): void;
    static fromJS(data: any): ErrorDto;
    toJSON(data?: any): any;
}
export interface IErrorDto {
    /** error message */
    error: string;
}
/** Vote. "U" means upvote. "D" means downvote. */
export declare enum Vote {
    U = "U",
    D = "D"
}
export declare class User implements IUser {
    /** user id */
    id: number;
    /** User name */
    name: string;
    sex: UserSex;
    /** date when user was created */
    createdAt: Date;
    constructor(data?: IUser);
    init(_data?: any): void;
    static fromJS(data: any): User;
    toJSON(data?: any): any;
}
export interface IUser {
    /** user id */
    id: number;
    /** User name */
    name: string;
    sex: UserSex;
    /** date when user was created */
    createdAt: Date;
}
export declare class Category implements ICategory {
    /** category id */
    id: number;
    /** category name */
    name: string;
    constructor(data?: ICategory);
    init(_data?: any): void;
    static fromJS(data: any): Category;
    toJSON(data?: any): any;
}
export interface ICategory {
    /** category id */
    id: number;
    /** category name */
    name: string;
}
export declare class Image implements IImage {
    cid: number;
    /** image source url */
    src: string;
    constructor(data?: IImage);
    init(_data?: any): void;
    static fromJS(data: any): Image;
    toJSON(data?: any): any;
}
export interface IImage {
    cid: number;
    /** image source url */
    src: string;
}
export declare class RemovedComment implements IRemovedComment {
    id: number;
    removed: boolean;
    constructor(data?: IRemovedComment);
    init(_data?: any): void;
    static fromJS(data: any): RemovedComment;
    toJSON(data?: any): any;
}
export interface IRemovedComment {
    id: number;
    removed: boolean;
}
/** Comment object with constants only (without upvotes, downvotes and replies) */
export declare class CommentC implements ICommentC {
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
    constructor(data?: ICommentC);
    init(_data?: any): void;
    static fromJS(data: any): CommentC;
    toJSON(data?: any): any;
}
/** Comment object with constants only (without upvotes, downvotes and replies) */
export interface ICommentC {
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
export declare class Comment extends CommentC implements IComment {
    /** number of downvotes */
    d?: number;
    /** number of upvotes */
    u?: number;
    /** list of comment ids that are replies to this comment */
    replies?: number[];
    constructor(data?: IComment);
    init(_data?: any): void;
    static fromJS(data: any): Comment;
    toJSON(data?: any): any;
}
/** Comment object */
export interface IComment extends ICommentC {
    /** number of downvotes */
    d?: number;
    /** number of upvotes */
    u?: number;
    /** list of comment ids that are replies to this comment */
    replies?: number[];
}
export declare class Thread implements IThread {
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
    constructor(data?: IThread);
    init(_data?: any): void;
    static fromJS(data: any): Thread;
    toJSON(data?: any): any;
}
export interface IThread {
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
export declare class ThreadMeta implements IThreadMeta {
    id: number;
    title: string;
    category: number;
    op: User;
    c: number;
    score: number;
    createdAt: Date;
    lastModified: Date;
    slink: string;
    constructor(data?: IThreadMeta);
    init(_data?: any): void;
    static fromJS(data: any): ThreadMeta;
    toJSON(data?: any): any;
}
/** Thread metadata (no comments, images and pinned comment) */
export interface IThreadMeta {
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
export declare class Body implements IBody {
    title: string;
    comment: string;
    rtoken: string;
    category: number;
    constructor(data?: IBody);
    init(_data?: any): void;
    static fromJS(data: any): Body;
    toJSON(data?: any): any;
}
export interface IBody {
    title: string;
    comment: string;
    rtoken: string;
    category: number;
}
export declare class Body2 implements IBody2 {
    comment: string;
    rtoken: string;
    quote?: number;
    constructor(data?: IBody2);
    init(_data?: any): void;
    static fromJS(data: any): Body2;
    toJSON(data?: any): any;
}
export interface IBody2 {
    comment: string;
    rtoken: string;
    quote?: number;
}
export declare class Body3 implements IBody3 {
    vote: Vote;
    constructor(data?: IBody3);
    init(_data?: any): void;
    static fromJS(data: any): Body3;
    toJSON(data?: any): any;
}
export interface IBody3 {
    vote: Vote;
}
export declare class Body4 implements IBody4 {
    name: string;
    constructor(data?: IBody4);
    init(_data?: any): void;
    static fromJS(data: any): Body4;
    toJSON(data?: any): any;
}
export interface IBody4 {
    name: string;
}
export declare class Id implements IId {
    constructor(data?: IId);
    init(_data?: any): void;
    static fromJS(data: any): Id;
    toJSON(data?: any): any;
}
export interface IId {
}
export declare class Body5 implements IBody5 {
    /** Username or email */
    name: Name;
    pwd: string;
    constructor(data?: IBody5);
    init(_data?: any): void;
    static fromJS(data: any): Body5;
    toJSON(data?: any): any;
}
export interface IBody5 {
    /** Username or email */
    name: Name;
    pwd: string;
}
export declare class Body6 implements IBody6 {
    name: string;
    email: string;
    pwd: string;
    sex: UserSex;
    rtoken: string;
    /** Invite code, required if admin set register=invite See [register mode](https://docs.metahkg.org/docs/customize/registermode) */
    inviteCode?: string;
    constructor(data?: IBody6);
    init(_data?: any): void;
    static fromJS(data: any): Body6;
    toJSON(data?: any): any;
}
export interface IBody6 {
    name: string;
    email: string;
    pwd: string;
    sex: UserSex;
    rtoken: string;
    /** Invite code, required if admin set register=invite See [register mode](https://docs.metahkg.org/docs/customize/registermode) */
    inviteCode?: string;
}
export declare class Body7 implements IBody7 {
    email: string;
    /** Verification code sent to email */
    code: string;
    constructor(data?: IBody7);
    init(_data?: any): void;
    static fromJS(data: any): Body7;
    toJSON(data?: any): any;
}
export interface IBody7 {
    email: string;
    /** Verification code sent to email */
    code: string;
}
export declare class Body8 implements IBody8 {
    email: string;
    rtoken: string;
    constructor(data?: IBody8);
    init(_data?: any): void;
    static fromJS(data: any): Body8;
    toJSON(data?: any): any;
}
export interface IBody8 {
    email: string;
    rtoken: string;
}
export declare class Body9 implements IBody9 {
    email: string;
    rtoken: string;
    constructor(data?: IBody9);
    init(_data?: any): void;
    static fromJS(data: any): Body9;
    toJSON(data?: any): any;
}
export interface IBody9 {
    email: string;
    rtoken: string;
}
export declare class Body10 implements IBody10 {
    email: string;
    /** Verification code sent to email */
    code: string;
    pwd: string;
    constructor(data?: IBody10);
    init(_data?: any): void;
    static fromJS(data: any): Body10;
    toJSON(data?: any): any;
}
export interface IBody10 {
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
export declare class Anonymous implements IAnonymous {
    id: number;
    constructor(data?: IAnonymous);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous;
    toJSON(data?: any): any;
}
export interface IAnonymous {
    id: number;
}
export declare class Anonymous2 implements IAnonymous2 {
    id: number;
    constructor(data?: IAnonymous2);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous2;
    toJSON(data?: any): any;
}
export interface IAnonymous2 {
    id: number;
}
export declare class Anonymous3 implements IAnonymous3 {
    /** Whether user is logged in */
    active: boolean;
    constructor(data?: IAnonymous3);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous3;
    toJSON(data?: any): any;
}
export interface IAnonymous3 {
    /** Whether user is logged in */
    active: boolean;
}
export declare class Anonymous4 implements IAnonymous4 {
    cid: number;
    vote: Vote;
    constructor(data?: IAnonymous4);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous4;
    toJSON(data?: any): any;
}
export interface IAnonymous4 {
    cid: number;
    vote: Vote;
}
export declare class Anonymous5 extends OK implements IAnonymous5 {
    token: string;
    constructor(data?: IAnonymous5);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous5;
    toJSON(data?: any): any;
}
export interface IAnonymous5 extends IOK {
    token: string;
}
export declare class Anonymous6 extends User implements IAnonymous6 {
    /** Number of threads created by user */
    count: number;
    constructor(data?: IAnonymous6);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous6;
    toJSON(data?: any): any;
}
export interface IAnonymous6 extends IUser {
    /** Number of threads created by user */
    count: number;
}
export declare class Anonymous7 implements IAnonymous7 {
    name: string;
    constructor(data?: IAnonymous7);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous7;
    toJSON(data?: any): any;
}
export interface IAnonymous7 {
    name: string;
}
export declare enum OKResponse {
    Ok = "ok"
}
export declare enum UserSex {
    M = "M",
    F = "F"
}
export declare class Quote extends CommentC implements IQuote {
    constructor(data?: IQuote);
    init(_data?: any): void;
    static fromJS(data: any): Quote;
    toJSON(data?: any): any;
}
export interface IQuote extends ICommentC {
}
/** Comment object with score */
export declare class Conversation extends Comment implements IConversation {
    /** score of the comment (`upvotes - downvotes`) */
    score?: number;
    constructor(data?: IConversation);
    init(_data?: any): void;
    static fromJS(data: any): Conversation;
    toJSON(data?: any): any;
}
/** Comment object with score */
export interface IConversation extends IComment {
    /** score of the comment (`upvotes - downvotes`) */
    score?: number;
}
export declare class Name implements IName {
    constructor(data?: IName);
    init(_data?: any): void;
    static fromJS(data: any): Name;
    toJSON(data?: any): any;
}
export interface IName {
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
