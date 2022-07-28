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
    getThread(id: number, page?: number, limit?: number, sort?: Sort, start?: number, end?: number, cancelToken?: CancelToken | undefined): Promise<Thread>;
    protected processGetThread(response: AxiosResponse): Promise<Thread>;
    /**
     * Check if a thread exists
     * @param id thread id
     * @return OK
     */
    checkThread(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCheckThread(response: AxiosResponse): Promise<OK>;
    /**
     * Get thread images
     * @param id thread id
     * @return Success
     */
    getThreadImages(id: number, cancelToken?: CancelToken | undefined): Promise<Image[]>;
    protected processGetThreadImages(response: AxiosResponse): Promise<Image[]>;
    /**
     * Create thread
     * @param body (optional)
     * @return Success
     */
    createThread(body?: Body, cancelToken?: CancelToken | undefined): Promise<Anonymous>;
    protected processCreateThread(response: AxiosResponse): Promise<Anonymous>;
    /**
     * Get comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    getComment(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Comment>;
    protected processGetComment(response: AxiosResponse): Promise<Comment>;
    /**
     * Get replies
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    getCommentReplies(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Comment[]>;
    protected processGetCommentReplies(response: AxiosResponse): Promise<Comment[]>;
    /**
     * Get comment images.
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    getCommentImages(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Image[]>;
    protected processGetCommentImages(response: AxiosResponse): Promise<Image[]>;
    /**
     * Create comment
     * @param id thread id
     * @param body (optional)
     * @return Success
     */
    createComment(id: number, body?: Body2, cancelToken?: CancelToken | undefined): Promise<Anonymous2>;
    protected processCreateComment(response: AxiosResponse): Promise<Anonymous2>;
    /**
     * Vote on comment
     * @param body (optional)
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    vote(id: number, cid: number, body?: Body3, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processVote(response: AxiosResponse): Promise<OK>;
    /**
     * Pin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    pinComment(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processPinComment(response: AxiosResponse): Promise<OK>;
    /**
     * Unpin comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    unpinComment(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUnpinComment(response: AxiosResponse): Promise<OK>;
    /**
     * Get status
     * @return Success
     */
    getStatus(cancelToken?: CancelToken | undefined): Promise<Anonymous3>;
    protected processGetStatus(response: AxiosResponse): Promise<Anonymous3>;
    /**
     * Get blocked users
     * @return Success
     */
    getBlockedUsers(cancelToken?: CancelToken | undefined): Promise<User[]>;
    protected processGetBlockedUsers(response: AxiosResponse): Promise<User[]>;
    /**
     * Get votes
     * @param id thread id
     * @return Success
     */
    getVotes(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous4[]>;
    protected processGetVotes(response: AxiosResponse): Promise<Anonymous4[]>;
    /**
     * Block user
     * @return OK
     */
    blockUser(cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processBlockUser(response: AxiosResponse): Promise<OK>;
    /**
     * Unblock user
     * @return OK
     */
    unblockUser(cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUnblockUser(response: AxiosResponse): Promise<OK>;
    /**
     * Set avatar
     * @param avatar (optional) Avatar image. Must be smaller than 2MB. Png, jpg, jpeg, jfif, svg, gif, webp are supported.
     * @return OK
     */
    setAvatar(avatar?: FileParameter, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processSetAvatar(response: AxiosResponse): Promise<OK>;
    /**
     * Rename
     * @param body (optional)
     * @return Success
     */
    renameUser(body?: Body4, cancelToken?: CancelToken | undefined): Promise<Anonymous5>;
    protected processRenameUser(response: AxiosResponse): Promise<Anonymous5>;
    /**
     * Get categories
     * @return Success
     */
    getCategories(cancelToken?: CancelToken | undefined): Promise<Category[]>;
    protected processGetCategories(response: AxiosResponse): Promise<Category[]>;
    /**
     * Get category
     * @param id category id, or `bytid<thread id>`
     * @return Success
     */
    getCategory(id: Id, cancelToken?: CancelToken | undefined): Promise<Category>;
    protected processGetCategory(response: AxiosResponse): Promise<Category>;
    /**
     * Get user profile
     * @param id user id
     * @param nameonly (optional) return user name only
     * @return Success
     */
    userProfile(id: number, nameonly?: Nameonly, cancelToken?: CancelToken | undefined): Promise<Anonymous6>;
    protected processUserProfile(response: AxiosResponse): Promise<Anonymous6>;
    /**
     * Get user avatar
     * @param id user id
     * @return Success
     */
    userAvatar(id: number, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processUserAvatar(response: AxiosResponse): Promise<FileResponse>;
    /**
     * Login
     * @param body (optional)
     * @return Success
     */
    login(body?: Body5, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processLogin(response: AxiosResponse): Promise<Token>;
    /**
     * Register
     * @param body (optional)
     * @return Success, verification email sent.
     */
    register(body?: Body6, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processRegister(response: AxiosResponse): Promise<OK>;
    /**
     * Verify email
     * @param body (optional)
     * @return Success
     */
    verify(body?: Body7, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processVerify(response: AxiosResponse): Promise<Token>;
    /**
     * Resend verification email
     * @param body (optional)
     * @return Success
     */
    resend(body?: Body8, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processResend(response: AxiosResponse): Promise<OK>;
    /**
     * Forgot password
     * @param body (optional)
     * @return Success
     */
    forgot(body?: Body9, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processForgot(response: AxiosResponse): Promise<OK>;
    /**
     * Reset password
     * @param body (optional)
     * @return Success
     */
    reset(body?: Body10, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processReset(response: AxiosResponse): Promise<Token>;
    /**
     * Get threads in a category
     * @param category category id
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    getMenu(category: number, sort?: Sort2, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processGetMenu(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Search threads
     * @param q Search query
     * @param mode (optional) Search mode. `0: title` or `1: op`
     * @param sort (optional) Sort threads by `0: latest` or `1: viral`
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    searchMenu(q: string, mode?: Mode, sort?: Sort3, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processSearchMenu(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get threads from a user
     * @param id user id
     * @param page (optional) page number
     * @param limit (optional) limit per page
     * @return Success
     */
    getHistory(id: number, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processGetHistory(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get threads
     * @param threads Thread ids
     * @return Success
     */
    getThreads(threads: number[], cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processGetThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
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
    /** The whole comment object of the quoted comment. */
    quote?: CommentC;
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
    /** The whole comment object of the quoted comment. */
    quote?: CommentC;
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
    conversation: Conversation[];
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
    conversation: Conversation[];
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
export declare enum Nameonly {
    _0 = 0,
    _1 = 1
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
    constructor(data?: IAnonymous3);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous3;
    toJSON(data?: any): any;
}
export interface IAnonymous3 {
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
export declare class Anonymous6 implements IAnonymous6 {
    constructor(data?: IAnonymous6);
    init(_data?: any): void;
    static fromJS(data: any): Anonymous6;
    toJSON(data?: any): any;
}
export interface IAnonymous6 {
}
export declare enum OKResponse {
    Ok = "ok"
}
export declare enum UserSex {
    M = "M",
    F = "F"
}
export declare class Conversation implements IConversation {
    constructor(data?: IConversation);
    init(_data?: any): void;
    static fromJS(data: any): Conversation;
    toJSON(data?: any): any;
}
export interface IConversation {
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
