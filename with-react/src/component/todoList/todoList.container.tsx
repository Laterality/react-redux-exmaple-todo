import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";

import { TodoActionCreator, todoVisibility } from "../../action/todo";
import { TodoItem, TodoState } from "../../lib/todo.obj";
import { IStore } from "../../store";

import { Todo } from "./todoListItem.component";

export interface ITodoListProps {
	todos: TodoItem[];
	onTodoItemClick: (id: number) => void;
}

class TodoList extends React.Component<ITodoListProps> {

	public render() {
		return(<ul>
				{this.props.todos.map((todo: TodoItem) => {
					return <Todo key={todo.getId()} 
					onClick={this.props.onTodoItemClick}
					todo={todo}></Todo>;
				})}
			</ul>);
	}
}

// Send state Store -> Container
const todoListToProp = (state: IStore) => {
	return {
		todos: state.todos.filter((item: TodoItem) => {
			switch (state.visibility) {
				case todoVisibility.SHOW_ALL:
					return true;
				case todoVisibility.SHOW_TODO:
					return item.getState() === TodoState.TODO;
				case todoVisibility.SHOW_COMPLETED:
					return item.getState() === TodoState.COMPLETED;
			}
		}),
	};
};

// Send action Container -> Store
const todoListDispatchToProps = (dispatch: Redux.Dispatch) => {
	return {
		onTodoItemClick: (id: number) => {
			dispatch(TodoActionCreator.completeTodo(id));
		},
	};
};

export default connect(todoListToProp, todoListDispatchToProps)(TodoList);
