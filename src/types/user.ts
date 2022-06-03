export interface User {
    id: number;
    name: string;
    sex: userSex;
    role: userRole;
}

export type userSex = "M" | "F";
export type userRole = "admin" | "user";
