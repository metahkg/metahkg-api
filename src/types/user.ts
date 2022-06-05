export interface User {
    id: number;
    name: string;
    sex: userSex;
    role: userRole;
}

export type Profile = User & {
    /** date string */
    createdAt: string;
    /** number of threads */
    count: 14;
};

export type userSex = "M" | "F";
export type userRole = "admin" | "user";
