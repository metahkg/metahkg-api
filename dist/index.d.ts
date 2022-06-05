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
        }) => Promise<import("axios").AxiosResponse<import("./types/image").Image[], any>>;
        get: (options: {
            threadId: number;
            page?: number;
            start?: number;
            end?: number;
            sort?: "vote";
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Thread, any>>;
        userVotes: (options: {
            threadId: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/userVotes").UserVotes, any>>;
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
            add: (options: {
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
        uploadAvatar: (options: {
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
            active: boolean;
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
    profile: {
        avatars: (options: {
            userId: number;
        }) => Promise<import("axios").AxiosResponse<string, any>>;
        userProfile: (options: {
            userId: number | "self";
            nameonly?: boolean;
        }) => Promise<import("axios").AxiosResponse<import("./types/user").Profile, any>>;
    };
    menu: {
        threads: {
            checkExist: (options: {
                threadId: number;
            }) => Promise<import("axios").AxiosResponse<import("./types/ok").OK, any>>;
            images: (options: {
                threadId: number;
                commentId?: number;
            }) => Promise<import("axios").AxiosResponse<import("./types/image").Image[], any>>;
            get: (options: {
                threadId: number;
                page?: number;
                start?: number;
                end?: number;
                sort?: "vote";
            }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Thread, any>>;
            userVotes: (options: {
                threadId: number;
            }) => Promise<import("axios").AxiosResponse<import("./types/thread/userVotes").UserVotes, any>>;
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
                add: (options: {
                    threadId: number;
                    comment: string;
                    rtoken: string;
                    quote?: number;
                }) => Promise<import("axios").AxiosResponse<{
                    id: number;
                }, any>>;
            };
        };
        profile: (options: {
            userId: number | "self";
            nameonly?: boolean;
        }) => Promise<import("axios").AxiosResponse<import("./types/user").Profile, any>>;
        main: (options: {
            categoryId: number;
            sort?: "Latest" | "Viral";
            page?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
        search: (options: {
            page?: number;
            searchQuery: string;
            sort?: "Relevence" | "Topic" | "LastReply";
            mode?: "Title" | "OP";
        }) => Promise<import("axios").AxiosResponse<import("./types/thread/thread").Summary[], any>>;
    };
    category: {
        info: (option: {
            categoryId?: number;
            threadId?: number;
        }) => Promise<import("axios").AxiosResponse<import("./types/category").Category, any>>;
        categories: () => Promise<import("axios").AxiosResponse<import("./types/category").Category[], any>>;
    };
};
