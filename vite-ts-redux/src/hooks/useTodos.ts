import { RootState } from 'modules';
import { addTodo, toggleTodo } from 'modules/todos';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useTodos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text: string) => dispatch(addTodo(text));
  const onToggle = useCallback((id: number) => dispatch(toggleTodo(id)), [dispatch]);

  return { todos, onCreate, onToggle };
};
