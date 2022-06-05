export default function objToQuery(obj: { [key: string]: string | number }) {
    return Object.keys(obj)
        .filter((key) => obj[key] !== undefined && obj[key] !== null)
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
}
