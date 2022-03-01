import { useTodos } from 'hooks';

import { useState, ChangeEvent, FormEvent, memo } from 'react';
import { TodoItemProps, TodoListProps } from './Todo.types';

export default function Todos() {
  const { todos, onCreate, onToggle } = useTodos();

  const [text, setText] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} placeholder="할 일을 입력하세요..." onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <Todos.List todos={todos} onToggle={onToggle} />
    </div>
  );
}

Todos.List = memo(function TodoList({ todos, onToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todos.Item key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

Todos.Item = memo(function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
      onKeyPress={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});
