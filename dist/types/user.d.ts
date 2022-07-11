export interface User {
    id: number;
    name: string;
    sex: userSex;
    role: userRole;
}
export declare type Profile = User & {
    /** date string */
    createdAt: string;
    /** number of threads */
    count: number;
};
export declare type userSex = "M" | "F";
export declare type userRole = "admin" | "user";
