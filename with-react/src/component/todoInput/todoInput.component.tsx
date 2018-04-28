import * as jquery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as Redux from "redux";

import { TodoActionCreator, todoActionTypes } from "../../action/todo";

let idNext = 1;

export interface ITodoInputProps {
	onClick: (input: string) => void;
}

class TodoInput extends React.Component<ITodoInputProps> {

	public render() {
		return (
		<div>
			<input id="todoInput" type="text"/>
			<button onClick={this.onInputButtonClick}>ADD</button>
		</div>);
	}

	private onInputButtonClick = () => {
		const elmInput = jquery("#todoInput");
		if (!elmInput) { return; }
		const input = elmInput.val();
		elmInput.val("");
		this.props.onClick(input as string);
	}
}

const dispatchToProp = (dispatch: Redux.Dispatch) => {
	return {
		onClick: (input: string) => {
			dispatch(TodoActionCreator.addTodo(input, idNext++));
		},
	};
};

export default connect(null, dispatchToProp)(TodoInput);
