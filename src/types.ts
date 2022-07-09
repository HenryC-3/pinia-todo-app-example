export type Items = Array<Item>;

export interface Item {
	id: string;
	title: string;
	status: ItemStatus;
}

export type ItemStatus = BasicStatus | DeletedStatus;
export type BasicStatus = "todo" | "done";
export type DeletedStatus = "deleted";

export type TodoStore = {
	items: Items;
};
