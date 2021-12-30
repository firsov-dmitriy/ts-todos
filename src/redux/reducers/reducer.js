import getTodo from "../../service/service";

export const takeTodos = (data) => {
    initialState.todos.push(...data);
};

export const initialState = {
    todos: [],
};
const ADD_TODO = "ADD_TODO";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, ...action.payload],
            };

        default:
            return state;
    }
}

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
