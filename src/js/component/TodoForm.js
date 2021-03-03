import React, { useState } from "react";
// TodoForm Component
function TodoForm({ addTodo }) {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit} className="">
			<input
				type="text"
				className="input"
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="No tasks, add a task"
			/>
		</form>
	);
}
export default TodoForm;

// NO ME QUEDA TOTALMENTE CLARO EL "handleSubmit" ??
