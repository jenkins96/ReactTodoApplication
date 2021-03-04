import React from "react";
import PropTypes from "prop-types";

// Todo Component
function Todo({ todo, index, removeTodo }) {
	return (
		<div className="todo">
			{todo.text}
			<div>
				<button onClick={() => removeTodo(index)}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
}
Todo.propTypes = {
	todo: PropTypes.array,
	index: PropTypes.number,
	removeTodo: PropTypes.func
};

export default Todo;
