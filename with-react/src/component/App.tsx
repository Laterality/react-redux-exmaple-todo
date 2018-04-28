import * as React from "react";

import { default as TodoInput } from "./todoInput/todoInput.component";
import { default as TodoList } from "./todoList/todoList.container";
import { default as TodoSelector } from "./todoVisibilitySelector/todoVisibilitySelector";

export class App extends React.Component {

	public render() {
		return(
			<div>
				<TodoInput />
				<TodoSelector />
				<TodoList />
			</div>
		);
	}
}
