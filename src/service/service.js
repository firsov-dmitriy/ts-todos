import axios from "axios";
import { addTodo } from "../redux/reducers/reducer";

export default async function getTodo(url) {
    const response = await axios.get(url);
    if (!response.status === 200) {
        throw new Error(
            `Could not fetch ${url}` + `received ${response.status}`
        );
    }
    return await response.data;
}

export const fetchTodos = () => {
    return (dispatch) => {
        getTodo("https://jsonplaceholder.typicode.com/todos").then((data) =>
            dispatch(addTodo(data))
        );
    };
};
