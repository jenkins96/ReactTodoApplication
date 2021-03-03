import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
	return (
		<div className="todo">
			{todo.text}
			<div className="buttonDiv">
				<button className="hide" onClick={() => removeTodo(index)}>
					<i class="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
}
export default Todo;
