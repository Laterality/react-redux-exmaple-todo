import * as todoAction from "../action/todo";
import { TodoItem, TodoState } from "../lib/todo.obj";
import { IStore } from "../store/index";

const initialState: IStore = {
	todos: [],
	visibility: todoAction.todoVisibility.SHOW_ALL,
};

export function todoApp(state = initialState, 
	action: todoAction.ITodoActionAdd | todoAction.ITodoActionComplete | 
	todoAction.ITodoActionRemove | todoAction.ITodoActionSetVisibility) {

	// Copy current state to new state object
	const newState = Object.assign({}, state);

	switch (action["type"]) {
		case todoAction.todoActionTypes.ADD_TODO:
			newState.todos = [
				...state.todos,
				new TodoItem(
					(action as todoAction.ITodoActionAdd).id, 
					(action as todoAction.ITodoActionAdd).text,
					TodoState.TODO),
			];
			return newState;
			
		case todoAction.todoActionTypes.REMOVE_TODO: {
			// Find index to remove and splice it
			const idx = newState.todos.findIndex(
				(obj: TodoItem) => obj.getId() === 
				(action as todoAction.ITodoActionRemove).id);
			if (idx < 0) { return state; }
			newState.todos.splice(idx, 1);
			return newState;
		}
		case todoAction.todoActionTypes.COMPLETE_TODO: {
			const idx = newState.todos.findIndex(
				(obj: TodoItem) => obj.getId() === 
				(action as todoAction.ITodoActionComplete).id);
			if (idx < 0) { return state; }
			newState.todos[idx] = new TodoItem(
				newState.todos[idx].getId(),
				newState.todos[idx].getText(),
				TodoState.COMPLETED);
			return newState;
		}
		case todoAction.todoActionTypes.CHANGE_VISIBILITY:
			newState.visibility = (action as todoAction.ITodoActionSetVisibility).filter;
			return newState;
		default:
			return state;
	}
}
