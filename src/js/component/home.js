import React, { useState } from "react";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";

// I will use three components: Header, TodoList and TodoForm
export function Home() {
	const [todos, setTodos] = useState([
		{
			text: "Learn about React"
		},
		{
			text: "Meet friend for lunch"
		},
		{
			text: "Build really cool todo app"
		}
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<Header />
			<TodoForm addTodo={addTodo} />
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
}
