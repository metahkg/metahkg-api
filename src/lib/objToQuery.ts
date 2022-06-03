export default function objToQuery(obj: { [key: string]: any }) {
    return Object.keys(obj)
        .filter((key) => obj[key])
        .map((key) => `${key}=${obj[key]}`)
        .join("&");
}
