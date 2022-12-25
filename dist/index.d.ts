import { AxiosInstance, AxiosResponse, CancelToken } from "axios";
export declare class Client {
    private instance;
    private baseUrl;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
    constructor(baseUrl?: string, instance?: AxiosInstance);
    /**
     * Get threads
     * @param id array of thread ids
     * @return Success
     */
    threads(id: number[], cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Create thread
     * @return Success
     */
    threadCreate(body: Body, cancelToken?: CancelToken | undefined): Promise<Anonymous>;
    protected processThreadCreate(response: AxiosResponse): Promise<Anonymous>;
    /**
     * Search threads
     * @param q Search query
     * @param mode (optional) Search mode. title or op
     * @param sort (optional) Sort threads by relevance, created or lastcomment
     * @param page (optional) page number
     * @param limit (optional) number of threads per page
     * @return Success
     */
    threadsSearch(q: string, mode?: Mode, sort?: Sort, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processThreadsSearch(response: AxiosResponse): Promise<ThreadMeta[]>;
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
    thread(id: number, page?: number, limit?: number, sort?: Sort2, start?: number, end?: number, cancelToken?: CancelToken | undefined): Promise<Thread>;
    protected processThread(response: AxiosResponse): Promise<Thread>;
    /**
     * Edit thread
     * @param id thread id
     * @return OK
     */
    threadEdit(id: number, body: Body2, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadEdit(response: AxiosResponse): Promise<OK>;
    /**
     * Delete thread
     * @param id thread id
     * @return OK
     */
    threadDelete(id: number, body: Body3, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadDelete(response: AxiosResponse): Promise<OK>;
    /**
     * Get thread images
     * @param id thread id
     * @return Success
     */
    threadImages(id: number, cancelToken?: CancelToken | undefined): Promise<Image[]>;
    protected processThreadImages(response: AxiosResponse): Promise<Image[]>;
    /**
     * Get thread category
     * @param id thread id
     * @return Success
     */
    threadCategory(id: number, cancelToken?: CancelToken | undefined): Promise<Category>;
    protected processThreadCategory(response: AxiosResponse): Promise<Category>;
    /**
     * Pin comment
     * @param id thread id
     * @return OK
     */
    threadPin(id: number, body: Body4, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadPin(response: AxiosResponse): Promise<OK>;
    /**
     * Unpin comment
     * @param id thread id
     * @return OK
     */
    threadUnpin(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadUnpin(response: AxiosResponse): Promise<OK>;
    /**
     * Star thread
     * @param id thread id
     * @return OK
     */
    threadStar(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadStar(response: AxiosResponse): Promise<OK>;
    /**
     * Unstar thread
     * @param id thread id
     * @return OK
     */
    threadUnstar(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processThreadUnstar(response: AxiosResponse): Promise<OK>;
    /**
     * Create comment
     * @param id thread id
     * @return Success
     */
    commentCreate(id: number, body: Body5, cancelToken?: CancelToken | undefined): Promise<Anonymous2>;
    protected processCommentCreate(response: AxiosResponse): Promise<Anonymous2>;
    /**
     * Get comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    comment(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Comment>;
    protected processComment(response: AxiosResponse): Promise<Comment>;
    /**
     * Edit comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentEdit(id: number, cid: number, body: Body6, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentEdit(response: AxiosResponse): Promise<OK>;
    /**
     * Delete comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentDelete(id: number, cid: number, body: Body7, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentDelete(response: AxiosResponse): Promise<OK>;
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
     * Get votes
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentVotes(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Anonymous3>;
    protected processCommentVotes(response: AxiosResponse): Promise<Anonymous3>;
    /**
     * Get emotions
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentEmotions(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<Anonymous4[]>;
    protected processCommentEmotions(response: AxiosResponse): Promise<Anonymous4[]>;
    /**
     * Get users who expressed the emotion
     * @param id thread id
     * @param cid comment id
     * @param emotion emotion to search for users
     * @return Success
     */
    commentEmotionUsers(id: number, cid: number, emotion: string, cancelToken?: CancelToken | undefined): Promise<User[]>;
    protected processCommentEmotionUsers(response: AxiosResponse): Promise<User[]>;
    /**
     * Vote on comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentVote(body: Body8, id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentVote(response: AxiosResponse): Promise<OK>;
    /**
     * Emotion on comment
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentEmotionSet(id: number, cid: number, body: Body9, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentEmotionSet(response: AxiosResponse): Promise<OK>;
    /**
     * Delete emotion
     * @param id thread id
     * @param cid comment id
     * @return OK
     */
    commentEmotionDelete(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCommentEmotionDelete(response: AxiosResponse): Promise<OK>;
    /**
     * Logout
     * @return OK
     */
    meLogout(cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeLogout(response: AxiosResponse): Promise<OK>;
    /**
     * Get current logged in session
     * @return Success
     */
    meSessionCurrent(cancelToken?: CancelToken | undefined): Promise<Session>;
    protected processMeSessionCurrent(response: AxiosResponse): Promise<Session>;
    /**
     * Get active sessions
     * @return Success
     */
    meSessions(cancelToken?: CancelToken | undefined): Promise<Session[]>;
    protected processMeSessions(response: AxiosResponse): Promise<Session[]>;
    /**
     * Get session by id
     * @param id session id
     * @return Success
     */
    meSession(id: string, cancelToken?: CancelToken | undefined): Promise<Session>;
    protected processMeSession(response: AxiosResponse): Promise<Session>;
    /**
     * Revoke session by id
     * @param id session id
     * @return OK
     */
    meSessionRevoke(id: string, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeSessionRevoke(response: AxiosResponse): Promise<OK>;
    /**
     * Get notifications
     * @return Success
     */
    meNotifications(cancelToken?: CancelToken | undefined): Promise<Notification[]>;
    protected processMeNotifications(response: AxiosResponse): Promise<Notification[]>;
    /**
     * Subscribe to notification
     * @return OK
     */
    meNotificationsSubscribe(body: Body10, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeNotificationsSubscribe(response: AxiosResponse): Promise<OK>;
    /**
     * Unsubscribe to notification
     * @return OK
     */
    meNotificationsUnsubscribe(cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processMeNotificationsUnsubscribe(response: AxiosResponse): Promise<OK>;
    /**
     * Get followed users
     * @return Success
     */
    meFollowing(cancelToken?: CancelToken | undefined): Promise<FollowedUser[]>;
    protected processMeFollowing(response: AxiosResponse): Promise<FollowedUser[]>;
    /**
     * Get blocked users
     * @return Success
     */
    meBlocked(cancelToken?: CancelToken | undefined): Promise<BlockedUser[]>;
    protected processMeBlocked(response: AxiosResponse): Promise<BlockedUser[]>;
    /**
     * Get starred threads
     * @return Success
     */
    meStarred(cancelToken?: CancelToken | undefined): Promise<Star[]>;
    protected processMeStarred(response: AxiosResponse): Promise<Star[]>;
    /**
     * Get votes in thread
     * @param id thread id
     * @return Success
     */
    meVotesThread(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous5[]>;
    protected processMeVotesThread(response: AxiosResponse): Promise<Anonymous5[]>;
    /**
     * Get categories
     * @return Success
     */
    categories(cancelToken?: CancelToken | undefined): Promise<Category[]>;
    protected processCategories(response: AxiosResponse): Promise<Category[]>;
    /**
     * Create category
     * @return OK
     */
    categoryCreate(body: Body11, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCategoryCreate(response: AxiosResponse): Promise<OK>;
    /**
     * Get category
     * @param id category id
     * @return Success
     */
    category(id: number, cancelToken?: CancelToken | undefined): Promise<Category>;
    protected processCategory(response: AxiosResponse): Promise<Category>;
    /**
     * Edit a category
     * @param id category id
     * @return OK
     */
    categoryEdit(id: number, body: Body12, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCategoryEdit(response: AxiosResponse): Promise<OK>;
    /**
     * Delete a category
     * @param id category id
     * @return OK
     */
    categoryDelete(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processCategoryDelete(response: AxiosResponse): Promise<OK>;
    /**
     * Get threads in a category
     * @param id category id
     * @param sort (optional) Sort threads by latest or viral
     * @param page (optional) page number
     * @param limit (optional) number of threads per page
     * @return Success
     */
    categoryThreads(id: number, sort?: Sort3, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processCategoryThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Get user profile
     * @param id user id
     * @return Success
     */
    userProfile(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous6>;
    protected processUserProfile(response: AxiosResponse): Promise<Anonymous6>;
    /**
     * Edit user info
     * @param id user id
     * @return Success
     */
    userEdit(id: number, body: Body13, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUserEdit(response: AxiosResponse): Promise<Token>;
    /**
     * Get user name
     * @param id user id
     * @return Success
     */
    userName(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous7>;
    protected processUserName(response: AxiosResponse): Promise<Anonymous7>;
    /**
     * Get user avatar
     * @param id user id
     * @return Success
     */
    userAvatar(id: number, cancelToken?: CancelToken | undefined): Promise<FileResponse>;
    protected processUserAvatar(response: AxiosResponse): Promise<FileResponse>;
    /**
     * Upload avatar
     * @param id user id
     * @param avatar (optional) Avatar image. Must be smaller than 2MB. Png, jpg, jpeg, jfif, svg, gif, webp are supported.
     * @return OK
     */
    userAvatarUpload(id: number, avatar?: FileParameter, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserAvatarUpload(response: AxiosResponse): Promise<OK>;
    /**
     * Delete avatar
     * @param id user id
     * @return OK
     */
    userAvatarDelete(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserAvatarDelete(response: AxiosResponse): Promise<OK>;
    /**
     * Get threads created by a user
     * @param id user id
     * @param sort (optional) Sort threads by created or lastcomment
     * @param page (optional) page number
     * @param limit (optional) number of threads per page
     * @return Success
     */
    userThreads(id: number, sort?: Sort4, page?: number, limit?: number, cancelToken?: CancelToken | undefined): Promise<ThreadMeta[]>;
    protected processUserThreads(response: AxiosResponse): Promise<ThreadMeta[]>;
    /**
     * Follow user
     * @param id user id
     * @return OK
     */
    userFollow(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserFollow(response: AxiosResponse): Promise<OK>;
    /**
     * Unfollow user
     * @param id user id
     * @return OK
     */
    userUnfollow(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserUnfollow(response: AxiosResponse): Promise<OK>;
    /**
     * Block user
     * @param id user id
     * @return OK
     */
    userBlock(id: number, body: Body14, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserBlock(response: AxiosResponse): Promise<OK>;
    /**
     * Unblock user
     * @param id user id
     * @return OK
     */
    userUnblock(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserUnblock(response: AxiosResponse): Promise<OK>;
    /**
     * Mute user
     * @param id user id
     * @return OK
     */
    userMute(id: number, body: Body15, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserMute(response: AxiosResponse): Promise<OK>;
    /**
     * Unmute user
     * @param id user id
     * @return OK
     */
    userUnmute(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserUnmute(response: AxiosResponse): Promise<OK>;
    /**
     * Ban user
     * @param id user id
     * @return OK
     */
    userBan(id: number, body: Body16, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserBan(response: AxiosResponse): Promise<OK>;
    /**
     * Unban user
     * @param id user id
     * @return OK
     */
    userUnban(id: number, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUserUnban(response: AxiosResponse): Promise<OK>;
    /**
     * Login
     * @return Success
     */
    usersLogin(body: Body17, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersLogin(response: AxiosResponse): Promise<Token>;
    /**
     * Register
     * @return Success, verification email sent.
     */
    usersRegister(body: Body18, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersRegister(response: AxiosResponse): Promise<OK>;
    /**
     * Verify email
     * @return Success
     */
    usersVerify(body: Body19, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersVerify(response: AxiosResponse): Promise<Token>;
    /**
     * Resend verification email
     * @return Success
     */
    usersResend(body: Body20, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersResend(response: AxiosResponse): Promise<OK>;
    /**
     * Forgot password
     * @return Success
     */
    usersForgot(body: Body21, cancelToken?: CancelToken | undefined): Promise<OK>;
    protected processUsersForgot(response: AxiosResponse): Promise<OK>;
    /**
     * Reset password
     * @return Success
     */
    usersReset(body: Body22, cancelToken?: CancelToken | undefined): Promise<Token>;
    protected processUsersReset(response: AxiosResponse): Promise<Token>;
}
export interface OK {
    success: boolean;
}
export interface Token {
    /** jwt token */
    token: string;
}
export interface ErrorDto {
    /** status code */
    statusCode: number;
    /** error message */
    error: string;
}
export interface Notification {
    /** title of the notification */
    title: string;
    /** when the notification was created */
    createdAt: Date;
    options: Options;
}
/** Vote. "U" means upvote. "D" means downvote. */
export declare type Vote = "U" | "D";
export interface User {
    /** user id */
    id: number;
    /** User name */
    name: string;
    sex: UserSex;
    role: UserRole;
}
export interface Session {
    /** 30-digit random id */
    id: string;
    /** session created date */
    createdAt: Date;
    /** session expire date */
    exp: Date;
    /** user agent used to create the session */
    userAgent: string;
    /** whether the session is restricted to a same ip */
    sameIp?: boolean;
}
/** Admin actions / responses */
export interface Admin {
    edits?: Edits[];
    /** admin replies */
    replies?: Replies[];
}
/** Followed user (user object with follow date) */
export interface FollowedUser extends User {
    /** follow date */
    date: Date;
}
export declare function isFollowedUser(object: any): object is FollowedUser;
/** Blocked user (user object with block date and reason) */
export interface BlockedUser extends User {
    /** block date */
    date: Date;
    /** block reason */
    reason: string;
}
export declare function isBlockedUser(object: any): object is BlockedUser;
export interface Category {
    /** category id */
    id: number;
    /** category name */
    name: string;
    /** category tags */
    tags?: string[];
    /** category is hidden */
    hidden?: boolean;
    /** category is pinned */
    pinned?: boolean;
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
/** Comment object */
export interface Comment {
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
    /** number of downvotes */
    D?: number;
    /** number of upvotes */
    U?: number;
    /** list of comment ids that are replies to this comment */
    replies?: number[];
    /** list of emotions users have expressed */
    emotions?: Anonymous4[];
    admin?: Admin;
}
/** Comment object with constants only (without upvotes, downvotes, replies and emotions) */
export interface CommentC {
    id: number;
    user: User;
    comment: string;
    text: string;
    images: string[];
    createdAt: Date;
    slink: string;
    quote?: Quote;
}
export interface Thread {
    /** thread id */
    id: number;
    /** thread title */
    title: string;
    category: number;
    op: User;
    /** number of comments in the thread (i.e. `conversation.length`) */
    count: number;
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
    admin?: Admin;
}
/** Thread metadata (no comments, images and pinned comment) */
export interface ThreadMeta {
    id: number;
    title: string;
    category: number;
    op: User;
    count: number;
    score: number;
    createdAt: Date;
    lastModified: Date;
    slink: string;
}
/** star thread record */
export interface Star {
    id: number;
    /** date when star was created */
    date: Date;
}
export interface Body {
    title: string;
    comment: string;
    rtoken: string;
    category: number;
}
export declare type Mode = "title" | "op";
export declare type Sort = "relevance" | "created" | "lastcomment";
export declare type Sort2 = "score" | "time" | "latest";
export interface Body2 {
    title?: string;
    category?: number;
    reason: string;
}
export interface Body3 {
    /** Reason for removing comment */
    reason: string;
}
export interface Body4 {
    cid: number;
}
export interface Body5 {
    comment: string;
    rtoken: string;
    quote?: number;
}
export interface Body6 {
    comment: string;
    /** Reason for editing comment */
    reason: string;
}
export interface Body7 {
    /** Reason for removing comment */
    reason: string;
}
export interface Body8 {
    vote: Vote;
}
export interface Body9 {
    emotion: string;
}
/** Endpoint and keys for push notifications. */
export interface Body10 {
    /** Push notification endpoint */
    endpoint: string;
    keys: Keys;
}
export interface Body11 {
    name: string;
    hidden?: boolean;
    tags?: string[];
    pinned?: boolean;
}
export interface Body12 {
    name?: string;
    tags?: string[];
    pinned?: boolean;
}
export declare type Sort3 = "latest" | "viral";
export interface Body13 {
    name?: string;
    sex?: UserSex;
}
export declare type Sort4 = "created" | "lastcomment";
export interface Body14 {
    /** Reason for blocking user */
    reason?: string;
}
export interface Body15 {
    /** Reason for muting the user */
    reason: string;
    /** expiration (optional) */
    exp?: Date;
}
export interface Body16 {
    /** Reason for banning the user */
    reason: string;
    /** expiration (optional) */
    exp?: Date;
}
export interface Body17 {
    /** Username or email */
    name: string;
    password: string;
    rtoken: string;
    sameIp?: boolean;
}
export interface Body18 {
    name: string;
    email: string;
    password: string;
    sex: UserSex;
    rtoken: string;
    /** Invite code, required if admin set register=invite See [register mode](https://docs.metahkg.org/docs/customize/registermode) */
    inviteCode?: string;
}
export interface Body19 {
    email: string;
    /** Verification code sent to email */
    code: string;
    rtoken: string;
    sameIp?: boolean;
}
export interface Body20 {
    email: string;
    rtoken: string;
}
export interface Body21 {
    email: string;
    rtoken: string;
}
export interface Body22 {
    email: string;
    /** Verification code sent to email */
    code: string;
    password: string;
    rtoken: string;
    /** whether the session is restricted to a same ip */
    sameIp?: boolean;
}
export interface Anonymous {
    id: number;
}
export interface Anonymous2 {
    id: number;
}
export interface Anonymous3 {
    U?: number;
    D?: number;
}
export interface Anonymous4 {
    user: number;
    emotion: string;
}
export interface Anonymous5 {
    cid: number;
    vote: Vote;
}
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
export interface Options {
    /** body of the notification */
    body: string;
    data: Data;
}
export declare type UserSex = "M" | "F";
export declare type UserRole = "admin" | "user";
export interface Edits {
    admin: User;
    /** reason for editing */
    reason: string;
    date: Date;
}
export interface Replies {
    admin: User;
    /** admin's reply */
    reply: string;
    date: Date;
}
export interface Quote extends CommentC {
    [key: string]: any;
}
export declare function isQuote(object: any): object is Quote;
/** Comment object with score */
export interface Conversation extends Comment {
    /** score of the comment (`upvotes - downvotes`) */
    score?: number;
}
export declare function isConversation(object: any): object is Conversation;
export interface Keys {
    /** auth key */
    auth: string;
    /** p256dh key */
    p256dh: string;
}
export interface Data {
    /** type of the notification */
    type: DataType;
    /** the link that should be opened on click */
    url: string;
    threadId: number;
    commentId?: number;
}
export declare type DataType = "thread" | "comment" | "reply" | "emotion" | "votes";
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
