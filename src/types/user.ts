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
    count: number;
};

export type userSex = "M" | "F";
export type userRole = "admin" | "user";
