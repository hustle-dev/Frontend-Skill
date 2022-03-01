const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initalState: TodosState = [];

type TodosAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo>;

export default function todos(state: TodosState = initalState, action: TodosAction) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.payload.id, text: action.payload.text, done: false }];
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    default:
      return state;
  }
}
