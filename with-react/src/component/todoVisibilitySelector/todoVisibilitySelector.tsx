import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { TodoActionCreator, todoVisibility } from "../../action/todo";

export interface ITodoVisibilitySelectorProp {
	onVisibilityChanged: (visibility: todoVisibility) => void;
}

class TodoVisibilitySelector extends React.Component<ITodoVisibilitySelectorProp> {

	public render() {
		return (
			<form>
				<input type="radio" name="visibility" id="show-all" onClick={() => this.props.onVisibilityChanged(todoVisibility.SHOW_ALL)}/>
				<label htmlFor="show-all">Show all</label>
				<input type="radio" name="visibility" id="show-todo" onClick={() => this.props.onVisibilityChanged(todoVisibility.SHOW_TODO)}/>
				<label htmlFor="show-todo">Todo</label>
				<input type="radio" name="visibility" id="show-completed" onClick={() => this.props.onVisibilityChanged(todoVisibility.SHOW_COMPLETED)}/>
				<label htmlFor="show-completed">Completed</label>
			</form>
		);
	}
}

const dispatchToProp = (dispatch: Dispatch) => {
	return {
		onVisibilityChanged: (visibility: todoVisibility) => {
			dispatch(TodoActionCreator.changeVisibility(visibility));
		},
	};
};

export default connect(null, dispatchToProp)(TodoVisibilitySelector);
