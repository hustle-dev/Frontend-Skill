import { Todo } from 'modules/todos';

export type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
};
