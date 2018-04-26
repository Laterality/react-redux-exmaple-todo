import * as redux from "redux";

import { TodoActionCreator, todoVisibility } from "../action/todo";
import { TodoItem } from "../lib/todo.obj";
import { todoApp } from "../reducer/todo";

export interface IStore {
	todos: TodoItem[];
	visibility: todoVisibility;
}

const store = redux.createStore(todoApp);
let id = 1;

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(TodoActionCreator.addTodo("Learn React", id++));
store.dispatch(TodoActionCreator.addTodo("Learn Redux", id++));
store.dispatch(TodoActionCreator.addTodo("Learn React-Redux", id++));
store.dispatch(TodoActionCreator.completeTodo(1));
store.dispatch(TodoActionCreator.completeTodo(3));
store.dispatch(TodoActionCreator.changeVisibility(todoVisibility.SHOW_COMPLETED));

unsubscribe();
