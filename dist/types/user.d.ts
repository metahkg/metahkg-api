export interface User {
    id: number;
    name: string;
    sex: userSex;
    role: userRole;
}
export declare type userSex = "M" | "F";
export declare type userRole = "admin" | "user";
