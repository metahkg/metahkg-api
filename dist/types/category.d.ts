export interface Category {
    /** category id */
    id: number;
    /** category name */
    name: string;
    /** hide from not logged in users and category 1 */
    hidden?: boolean;
}
