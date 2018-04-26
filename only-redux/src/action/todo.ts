export enum todoActionTypes {
	ADD_TODO = "TODO_ADD",
	REMOVE_TODO = "TODO_REMOVE",
	COMPLETE_TODO = "TODO_COMPLETE",
	CHANGE_VISIBILITY = "SET_VISIBILITY",
}

export enum todoVisibility {
	SHOW_ALL = "SHOW_ALL",
	SHOW_TODO = "SHOW_TODO",
	SHOW_COMPLETED = "SHOW_COMPLETED",
}

export interface ITodoActionAdd {
	type: todoActionTypes;
	text: string;
	id: number;
}

export interface ITodoActionRemove {
	type: todoActionTypes;
	id: number;
}

export interface ITodoActionComplete {
	type: todoActionTypes;
	id: number;
}

export interface ITodoActionSetVisibility {
	type: todoActionTypes;
	filter: todoVisibility;
}

export class TodoActionCreator {

	public static addTodo(text: string, id: number): ITodoActionAdd {
		return {
			type: todoActionTypes.ADD_TODO,
			text,
			id,
		};
	}

	public static removeTodo(id: number): ITodoActionRemove {
		return {
			type: todoActionTypes.REMOVE_TODO,
			id,
		};
	}

	public static completeTodo(id: number) {
		return {
			type: todoActionTypes.COMPLETE_TODO,
			id,
		};
	}

	public static changeVisibility(visibility: todoVisibility) {
		return {
			type: todoActionTypes.CHANGE_VISIBILITY,
			filter: visibility,
		};
	}
}
