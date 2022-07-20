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
        }) => Promise<import("axios").AxiosResponse<import("./types/image").Image[], any>>;
        get: (options: {
            threadId: number;
            page?: number;
            start?: number;
            end?: number;
            sort?: "time" | "score" | "latest";
            limit?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Thread, any>>;
        create: (options: {
            comment: string;
            rtoken: string;
            title: string;
            category: number;
        }) => Promise<import("axios").AxiosResponse<{
            id: number;
        }, any>>;
        comments: {
            get: (options: {
                threadId: number;
                commentId: number;
            }) => Promise<import("axios").AxiosResponse<import("./types/thread/comment").Comment, any>>;
            replies: (options: {
                threadId: number;
                commentId: number;
            }) => Promise<import("axios").AxiosResponse<import("./types/thread/comment").Comment[], any>>;
            vote: (options: {
                threadId: number;
                commentId: number;
                vote: "U" | "D";
            }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
            create: (options: {
                threadId: number;
                comment: string;
                rtoken: string;
                quote?: number;
            }) => Promise<import("axios").AxiosResponse<{
                id: number;
            }, any>>;
        };
    };
    users: {
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
        verify: (options: {
            email: string;
            code: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/token").Token, any>>;
        resend: (options: {
            email: string;
            rtoken: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        forgot: (options: {
            email: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        reset: (options: {
            email: string;
            verificationToken: string;
            newPassword: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/token").Token, any>>;
        avatars: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<string, any>>;
        profile: (options: {
            userId: number;
            nameonly?: boolean;
        }) => Promise<import("axios").AxiosResponse<import("./types/user").Profile, any>>;
    };
    me: {
        uploadAvatar: (options: {
            avatar: File;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        rename: (options: {
            name: string;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK & import("./types/token").Token, any>>;
        status: () => Promise<import("axios").AxiosResponse<{
            active: boolean;
            id?: number;
            name?: string;
        }, any>>;
        block: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        unblock: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
        blocked: () => Promise<import("axios").AxiosResponse<import("./types/user").User[], any>>;
        votes: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/me/votes").votes, any>>;
    };
    menu: {
        threads: (options: {
            threads: number[];
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
        history: (options: {
            userId: number | "self";
            sort?: 0 | 1 | "Created" | "LastReply";
            page?: number;
            limit?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
        main: (options: import("./types/xor").RequireAtLeastOne<{
            categoryId?: number;
            threadId?: number;
            sort?: 0 | 1 | "Latest" | "Viral";
            page?: number;
            limit?: number;
        }, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
        search: (options: {
            page?: number;
            searchQuery: string;
            sort?: 0 | 2 | 1 | "Created" | "LastReply" | "Relevance";
            mode?: 0 | 1 | "Title" | "OP";
            limit?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
    };
    category: {
        info: (options: import("./types/xor").RequireAtLeastOne<{
            categoryId?: number;
            threadId?: number;
        }, "categoryId" | "threadId">) => Promise<import("axios").AxiosResponse<import("./types/category").Category, any>>;
        categories: () => Promise<import("axios").AxiosResponse<import("./types/category").Category[], any>>;
    };
};
