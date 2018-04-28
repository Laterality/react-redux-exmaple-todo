export enum TodoState { 
	TODO = "TODO",
	COMPLETED = "COMPLETED",
}

export class TodoItem {

	public constructor(
		private id: number,
		private text: string,
		private state: TodoState,
	) { }

	public getId() { return this.id; }
	public getText() { return this.text; }
	public getState() { return this.state; }

	public setState(state: TodoState) { this.state = state; }
}
