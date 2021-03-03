// Importing
import React, { useState } from "react";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";
/* Strategy, I will create three Components:
    Header: contains header
    TodoForm: contains the form with an input
    Todo: contains the function to remove element
*/

// Component
export function Home() {
	// Setting my "todos"  to an empty array
	const [todos, setTodos] = useState([]);

	// Adding an element
	/* Const that it's equal to a function that holds one parameter (text) and will create a new variable(newTodos)
    equal to the existing "todos" plus the new item (text), then it will set a new state with setTodo(newTodos)
    */
	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};
	// Removing an element
	/* Const that it's equal to a function that holds one parameter(index) and will create a new variable (newTodos) 
    equal to the "todos", then it will use splice method on "newTodos" and remove the element corresponding to "index".
    Finally it will set a new state with setTodo(newTodos)
    */
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
					/* This will map the existing "todos" with two parameters (todo, index) and pass a function that will return
                    the "Todo" Component where it will set the values for the properties defined*/
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
