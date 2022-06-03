export default function Api(options: {
    baseUrl?: string;
    token?: string;
    setToken?: (token: string) => void;
}): {
    threads: {
        checkExist: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        images: (options: {
            threadId: number;
            commentId?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/images").Images, any>>;
        thread: (options: {
            threadId: number;
            page?: number;
            start?: number;
            end?: number;
            sort?: "vote";
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Thread, any>>;
        userVotes: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/userVotes").UserVotes, any>>;
        getComment: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/comment").Comment, any>>;
        replies: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<Comment[], any>>;
        vote: (options: {
            threadId: number;
            commentId: number;
            vote: "U" | "D";
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        addComment: (options: {
            threadId: number;
            comment: string;
            rtoken: string;
            quote?: number;
        }) => Promise<import("axios").AxiosResponse<{
            id: number;
        }, any>>;
        pin: (options: {
            threadId: number;
            commentId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        unpin: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        create: (options: {
            comment: string;
            rtoken: string;
            title: string;
            category: number;
        }) => Promise<import("axios").AxiosResponse<{
            id: number;
        }, any>>;
    };
    users: {
        avatar: (options: {
            avatar: File;
        }) => Promise<import("axios").AxiosResponse<any, any>>;
        block: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<{
            blocked: number[];
        }, any>>;
        editprofile: (options: {
            name?: string;
            sex?: import("./types/user").userSex;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK & import("./types/token").Token, any>>;
        login: (options: {
            userNameOrEmail: string;
            password: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/token").Token, any>>;
        register: (options: {
            username: string;
            email: string;
            password: string;
            rtoken: string;
            sex: import("./types/user").userSex;
            invitecode?: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        resend: (options: {
            email: string;
            rtoken: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        reset: (options: {
            email: string;
            verificationToken?: string;
            newPassword?: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK | import("./types/token").Token, any>>;
        status: () => Promise<import("axios").AxiosResponse<{
            action: boolean;
            id?: number;
            name?: string;
            token?: string;
        }, any>>;
        unblock: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<{
            blocked: number[];
        }, any>>;
        verify: (options: {
            email: string;
            code: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/token").Token, any>>;
    };
};
