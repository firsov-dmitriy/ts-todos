import axios from "axios";

export default async function getTodo(url) {
    const response = await axios.get(url);
    if (!response.status === 200) {
        throw new Error(
            `Could not fetch ${url}` + `received ${response.status}`
        );
    }
    return await response.data;
}
