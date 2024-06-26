import { useState } from "react";
import { VStack, Heading } from "@chakra-ui/react";

import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "宿題をする",
      date: "2024/04/01",
    },
    {
      id: 2,
      content: "卵を買う",
      date: "2024/04/01",
    },
    {
      id: 3,
      content: "郵便を出す",
      date: "2024/04/01",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedContent) => {
    const updatedTodos = todos. map((item) => {
      if( item.id === id ) {
        return (
          { ...item, content: updatedContent }
        );
      }
      return item;
    })
    setTodos(updatedTodos);
  };

  return (
    <VStack p="10" spacing="10">
      <Heading color="blue.200" fontSize="5xl">
        ToDoBox
      </Heading>
      <List todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
    </VStack>
  );
};
export default Todo;
