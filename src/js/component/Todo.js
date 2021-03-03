import React from "react";
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
export default Todo;

// {todo.text} ?? PARA QUE
// LA UNICA FINALIDAD DE ESTE COMPONENTE ES BORRAR UN ELEMENTO ??
