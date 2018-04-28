import * as React from "react";

import { TodoItem, TodoState } from "../../lib/todo.obj";

export interface ITodoItemProps {
	onClick: (id: number) => void;
	todo: TodoItem;
}

export class Todo extends React.Component<ITodoItemProps> {

	public render() {
		return (<li style={{
			textDecoration: this.props.todo.getState() === TodoState.COMPLETED ?
			 "line-through" : "none",
		}} onClick={() => this.props.onClick((this.props.todo.getId()))}>
			{this.props.todo.getText()}
		</li>);
	}
}
