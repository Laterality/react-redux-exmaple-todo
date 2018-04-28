import * as redux from "redux";

import { TodoActionCreator, todoVisibility } from "../action/todo";
import { TodoItem } from "../lib/todo.obj";
import { todoApp } from "../reducer/todo";

export interface IStore {
	todos: TodoItem[];
	visibility: todoVisibility;
}

export const store = redux.createStore(todoApp);
