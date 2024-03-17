import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService,   { Todo } from "../../services/todoService";
import { CACHE_KEY } from "./constants";


interface AddTodoContext {
  previousTodos: Todo[];
}


const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: todoService.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY);

      // Optimistic update of todo list on the frontend
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos = []) => [
        ...todos,
        newTodo,
      ]);

      // Notify consumer of hook on onAdd action
      onAdd();

      return { previousTodos } as AddTodoContext;
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(CACHE_KEY, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      // Roll back to previous todos
      queryClient.setQueryData<Todo[]>(CACHE_KEY, context.previousTodos);
    },
  });
};

export default useAddTodo;
