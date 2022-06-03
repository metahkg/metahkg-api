export declare type Image = {
    /** image source url */
    image: string;
    /** comment id */
    cid: number;
};
export interface Images {
    /** thread id */
    id: number;
    /** images list */
    images: Image[];
}
