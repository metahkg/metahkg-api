import type { AxiosInstance, AxiosResponse, CancelToken } from "axios";
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
     * @return Success
     */
    threadEdit(id: number, body: Body2, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadEdit(response: AxiosResponse): Promise<void>;
    /**
     * Delete thread
     * @param id thread id
     * @return Success
     */
    threadDelete(id: number, body: Body3, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadDelete(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    threadPin(id: number, body: Body4, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadPin(response: AxiosResponse): Promise<void>;
    /**
     * Unpin comment
     * @param id thread id
     * @return Success
     */
    threadUnpin(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadUnpin(response: AxiosResponse): Promise<void>;
    /**
     * Star thread
     * @param id thread id
     * @return Success
     */
    threadStar(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadStar(response: AxiosResponse): Promise<void>;
    /**
     * Unstar thread
     * @param id thread id
     * @return Success
     */
    threadUnstar(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processThreadUnstar(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    commentEdit(id: number, cid: number, body: Body6, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCommentEdit(response: AxiosResponse): Promise<void>;
    /**
     * Delete comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentDelete(id: number, cid: number, body: Body7, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCommentDelete(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    commentVote(body: Body8, id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCommentVote(response: AxiosResponse): Promise<void>;
    /**
     * Emotion on comment
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentEmotionSet(id: number, cid: number, body: Body9, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCommentEmotionSet(response: AxiosResponse): Promise<void>;
    /**
     * Delete emotion
     * @param id thread id
     * @param cid comment id
     * @return Success
     */
    commentEmotionDelete(id: number, cid: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCommentEmotionDelete(response: AxiosResponse): Promise<void>;
    /**
     * Get notifications
     * @return Success
     */
    meNotifications(cancelToken?: CancelToken | undefined): Promise<Notification[]>;
    protected processMeNotifications(response: AxiosResponse): Promise<Notification[]>;
    /**
     * Subscribe to notification
     * @return Success
     */
    meNotificationsSubscribe(body: Body10, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMeNotificationsSubscribe(response: AxiosResponse): Promise<void>;
    /**
     * Unsubscribe to notification
     * @return Success
     */
    meNotificationsUnsubscribe(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processMeNotificationsUnsubscribe(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    categoryCreate(body: Body11, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCategoryCreate(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    categoryEdit(id: number, body: Body12, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCategoryEdit(response: AxiosResponse): Promise<void>;
    /**
     * Delete a category
     * @param id category id
     * @return Success
     */
    categoryDelete(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processCategoryDelete(response: AxiosResponse): Promise<void>;
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
    userEdit(id: number, body: Body13, cancelToken?: CancelToken | undefined): Promise<Anonymous7>;
    protected processUserEdit(response: AxiosResponse): Promise<Anonymous7>;
    /**
     * Get user name
     * @param id user id
     * @return Success
     */
    userName(id: number, cancelToken?: CancelToken | undefined): Promise<Anonymous8>;
    protected processUserName(response: AxiosResponse): Promise<Anonymous8>;
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
     * @return Success
     */
    userAvatarUpload(id: number, avatar?: FileParameter, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserAvatarUpload(response: AxiosResponse): Promise<void>;
    /**
     * Delete avatar
     * @param id user id
     * @return Success
     */
    userAvatarDelete(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserAvatarDelete(response: AxiosResponse): Promise<void>;
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
     * @return Success
     */
    userFollow(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserFollow(response: AxiosResponse): Promise<void>;
    /**
     * Unfollow user
     * @param id user id
     * @return Success
     */
    userUnfollow(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserUnfollow(response: AxiosResponse): Promise<void>;
    /**
     * Block user
     * @param id user id
     * @return Success
     */
    userBlock(id: number, body: Body14, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserBlock(response: AxiosResponse): Promise<void>;
    /**
     * Unblock user
     * @param id user id
     * @return Success
     */
    userUnblock(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserUnblock(response: AxiosResponse): Promise<void>;
    /**
     * Mute user
     * @param id user id
     * @return Success
     */
    userMute(id: number, body: Body15, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserMute(response: AxiosResponse): Promise<void>;
    /**
     * Unmute user
     * @param id user id
     * @return Success
     */
    userUnmute(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserUnmute(response: AxiosResponse): Promise<void>;
    /**
     * Ban user
     * @param id user id
     * @return Success
     */
    userBan(id: number, body: Body16, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserBan(response: AxiosResponse): Promise<void>;
    /**
     * Unban user
     * @param id user id
     * @return Success
     */
    userUnban(id: number, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processUserUnban(response: AxiosResponse): Promise<void>;
    /**
     * Login
     * @return Success
     */
    authLogin(body: Body17, cancelToken?: CancelToken | undefined): Promise<LoginSuccess>;
    protected processAuthLogin(response: AxiosResponse): Promise<LoginSuccess>;
    /**
     * Logout
     * @return Success
     */
    authLogout(cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAuthLogout(response: AxiosResponse): Promise<void>;
    /**
     * Register
     * @return Success, verification email sent.
     */
    authRegister(body: Body18, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAuthRegister(response: AxiosResponse): Promise<void>;
    /**
     * Verify email
     * @return Success
     */
    authVerify(body: Body19, cancelToken?: CancelToken | undefined): Promise<LoginSuccess>;
    protected processAuthVerify(response: AxiosResponse): Promise<LoginSuccess>;
    /**
     * Resend verification email
     * @return Success
     */
    authResend(body: Body20, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAuthResend(response: AxiosResponse): Promise<void>;
    /**
     * Forgot password
     * @return Success
     */
    authForgot(body: Body21, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAuthForgot(response: AxiosResponse): Promise<void>;
    /**
     * Reset password
     * @return Success
     */
    authReset(body: Body22, cancelToken?: CancelToken | undefined): Promise<LoginSuccess>;
    protected processAuthReset(response: AxiosResponse): Promise<LoginSuccess>;
    /**
     * Get current session
     * @return Success
     */
    authSessionCurrent(cancelToken?: CancelToken | undefined): Promise<Session>;
    protected processAuthSessionCurrent(response: AxiosResponse): Promise<Session>;
    /**
     * Get active sessions
     * @return Success
     */
    authSessions(cancelToken?: CancelToken | undefined): Promise<Session[]>;
    protected processAuthSessions(response: AxiosResponse): Promise<Session[]>;
    /**
     * Get session by id
     * @param id session id
     * @return Success
     */
    authSession(id: string, cancelToken?: CancelToken | undefined): Promise<Session>;
    protected processAuthSession(response: AxiosResponse): Promise<Session>;
    /**
     * Revoke session by id
     * @param id session id
     * @return Success
     */
    authSessionRevoke(id: string, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processAuthSessionRevoke(response: AxiosResponse): Promise<void>;
    /**
     * Refresh session
     * @param id session id
     * @return Success
     */
    authSessionRefresh(id: string, body: Body23, cancelToken?: CancelToken | undefined): Promise<Anonymous9>;
    protected processAuthSessionRefresh(response: AxiosResponse): Promise<Anonymous9>;
    /**
     * Get server config
     * @return Success
     */
    serverConfig(cancelToken?: CancelToken | undefined): Promise<ServerConfig>;
    protected processServerConfig(response: AxiosResponse): Promise<ServerConfig>;
    /**
     * Get server public key
     * @return Success
     */
    serverPublicKey(cancelToken?: CancelToken | undefined): Promise<string>;
    protected processServerPublicKey(response: AxiosResponse): Promise<string>;
    /**
     * Get invite codes
     * @return Success
     */
    serverInviteCodes(cancelToken?: CancelToken | undefined): Promise<Invite[]>;
    protected processServerInviteCodes(response: AxiosResponse): Promise<Invite[]>;
    /**
     * Create invite code
     * @return Success
     */
    serverInviteCodesCreate(body: Body24, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processServerInviteCodesCreate(response: AxiosResponse): Promise<void>;
    /**
     * Generate invite code
     * @param body (optional)
     * @return Success
     */
    serverInviteCodesGenerate(body?: Body25, cancelToken?: CancelToken | undefined): Promise<Anonymous10>;
    protected processServerInviteCodesGenerate(response: AxiosResponse): Promise<Anonymous10>;
    /**
     * Get invite code info
     * @param code invite code
     * @return Success
     */
    serverInviteCodesInfo(code: string, cancelToken?: CancelToken | undefined): Promise<Invite>;
    protected processServerInviteCodesInfo(response: AxiosResponse): Promise<Invite>;
    /**
     * Delete an invite code
     * @param code invite code
     * @return Success
     */
    serverInviteCodesDelete(code: string, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processServerInviteCodesDelete(response: AxiosResponse): Promise<void>;
    /**
     * Get game info
     * @param id game id
     * @return Success
     */
    games(id: string, cancelToken?: CancelToken | undefined): Promise<GuessGame>;
    protected processGames(response: AxiosResponse): Promise<GuessGame>;
    /**
     * Create a guess game
     * @return Success
     */
    gamesGuessCreate(body: Body26, cancelToken?: CancelToken | undefined): Promise<Anonymous11>;
    protected processGamesGuessCreate(response: AxiosResponse): Promise<Anonymous11>;
    /**
     * Make a guess (bet)
     * @param id game id
     * @return Success
     */
    gamesGuessGuess(id: string, body: Body27, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processGamesGuessGuess(response: AxiosResponse): Promise<void>;
    /**
     * Release answer
     * @param id game id
     * @return Success
     */
    gamesGuessAnswer(id: string, body: Body28, cancelToken?: CancelToken | undefined): Promise<void>;
    protected processGamesGuessAnswer(response: AxiosResponse): Promise<void>;
}
export interface Session {
    /** 60-digit random session id */
    id: string;
    /** session created date */
    createdAt: Date;
    /** session expire date */
    exp: Date;
    /** user agent used to create the session */
    userAgent: string;
    sameIp?: boolean;
}
export interface LoginSuccess extends Session {
    token: string;
    refreshToken: string;
    /** sha256 hash of client's ip */
    ip: string;
}
export declare function isLoginSuccess(object: any): object is LoginSuccess;
export interface ErrorDto {
    /** status code */
    statusCode: number;
    /** error message */
    error: string;
    /** detailed error message */
    message?: string;
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
export interface Invite {
    code: string;
    /** description as set by creator */
    description?: string;
    createdAt: Date;
    [key: string]: any;
}
export declare type Visibility = "public" | "internal";
export interface Category {
    /** category id */
    id: number;
    /** category name */
    name: string;
    /** category tags */
    tags?: string[];
    /** whether category is pinned */
    pinned?: boolean;
    /** whether the category is hidden */
    hidden?: boolean;
    /** whether the category is nsfw */
    nsfw?: boolean;
}
export interface Image {
    cid: number;
    /** image source url */
    src: string;
    /** hmac-signed image source url */
    signature: string;
}
export interface Link {
    /** link url */
    url: string;
    /** hmac-signed link url */
    signature: string;
}
export interface RemovedComment {
    id: number;
    removed: boolean;
}
/** comment content */
export interface HTMLComment {
    type: HTMLCommentType;
    html: string;
}
export interface GameComment {
    type: GameCommentType;
    gameId: string;
}
/** Comment object */
export interface Comment {
    /** comment id */
    id: number;
    /** user created the comment */
    user: User;
    comment: CommentContent;
    /** comment converted to plain text */
    text: string;
    links: Link[];
    images: Images[];
    createdAt: Date;
    /** shortened link to the comment */
    slink: string;
    visibility?: Visibility;
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
    comment: CommentContent;
    text: string;
    links: Link[];
    images: Images[];
    createdAt: Date;
    slink: string;
    visibility?: Visibility;
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
    visibility?: Visibility;
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
export declare type RegisterMode = "normal" | "none" | "invite";
export interface ServerConfig {
    visibility: Visibility;
    register: Register;
    domains: Domains;
    /** the domain this instance of metahkg is on */
    domain: string;
    /** the domain for metahkg links */
    linksDomain: string;
    /** vapid public key (for notifications) */
    vapidPublicKey: string;
    /** whether cors is enabled */
    cors: boolean;
    captcha: Captcha;
    /** the branding to replace Metahkg */
    branding?: string;
}
export interface GuessGame {
    id: string;
    host: User;
    createdAt: string;
    endedAt?: string;
    type: GuessGameType;
    title: string;
    options: GuessGameOption[];
    /** total number of tokens (pool) */
    tokens?: number;
    answer?: number[];
}
export interface GuessGameOption {
    text: string;
    /** odds of the option */
    odds?: number;
    /** number of tokens betting the option */
    tokens?: number;
}
export interface Body {
    title: string;
    comment: CommentContent;
    captchaToken: string;
    category: number;
    visibility?: Visibility;
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
    comment: CommentContent;
    captchaToken: string;
    quote?: number;
    visibility?: Visibility;
}
export interface Body6 {
    html: string;
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
    tags?: string[];
    pinned?: boolean;
    hidden?: boolean;
    nsfw?: boolean;
}
export interface Body12 {
    name?: string;
    tags?: string[];
    pinned?: boolean;
    hidden?: boolean;
    nsfw?: boolean;
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
    captchaToken: string;
    sameIp?: boolean;
}
export interface Body18 {
    name: string;
    email: string;
    password: string;
    sex: UserSex;
    captchaToken: string;
    inviteCode?: string;
}
export interface Body19 {
    email: string;
    code: string;
    captchaToken: string;
    sameIp?: boolean;
}
export interface Body20 {
    email: string;
    captchaToken: string;
}
export interface Body21 {
    email: string;
    captchaToken: string;
}
export interface Body22 {
    email: string;
    code: string;
    password: string;
    captchaToken: string;
    sameIp?: boolean;
}
export interface Body23 {
    refreshToken: string;
}
export interface Body24 {
    code: string;
    description?: string;
}
export interface Body25 {
    description?: string;
}
export interface Body26 {
    title: string;
    options: string[];
}
export interface Body27 {
    /** index of option */
    option: number;
    /** number of tokens to bet */
    tokens: number;
}
export interface Body28 {
    answer: number;
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
    createdAt: Date;
    games?: Games;
}
export declare function isAnonymous6(object: any): object is Anonymous6;
export interface Anonymous7 {
    token: string;
}
export interface Anonymous8 {
    name: string;
}
export interface Anonymous9 {
    token: string;
    refreshToken: string;
}
export interface Anonymous10 {
    code: string;
}
export interface Anonymous11 {
    id: string;
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
export declare type HTMLCommentType = "html";
export declare type GameCommentType = "game";
export interface Images {
    src: string;
    signature: string;
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
export interface Register {
    mode: RegisterMode;
    /** allowed domains */
    domains?: string[];
}
export interface Domains {
    main?: string;
    /** the domain for [metahkg links](https://gitlab.com/metahkg/metahkg-links) */
    links?: string;
    /** the domain for images ([imageproxy](https://gitlab.com/metahkg/forks/imageproxy) and [imgpush](https://gitlab.com/metahkg/forks/imgpush)) */
    images?: string;
    /** the domain for [rlp proxy](https://gitlab.com/metahkg/rlp-proxy-rewrite) */
    rlpProxy?: string;
    /** the domain for [metahkg redirect](https://gitlab.com/metahkg/metahkg-redirect) */
    redirect?: string;
}
export interface Captcha {
    /** captcha provider */
    type: CaptchaType;
    /** the corresponding site key */
    siteKey: string;
}
export declare type GuessGameType = "guess";
export interface Keys {
    /** auth key */
    auth: string;
    /** p256dh key */
    p256dh: string;
}
export interface Games {
    guess?: Guess;
}
export interface Data {
    /** type of the notification */
    type: DataType;
    /** the link that should be opened on click */
    url: string;
    threadId: number;
    commentId?: number;
}
export declare type CaptchaType = "recaptcha" | "turnstile";
export interface Guess {
    tokens: number;
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
export declare type CommentContent = HTMLComment | GameComment;
