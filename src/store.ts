import { defineStore } from "pinia";
import { TodoStore } from "./types";
import { v4 as uuid } from "uuid";

// NOTE: 为 state 添加类型声明
export const useTodo = defineStore("todo", {
	state: () => {
		return {
			items: [],
		} as TodoStore;
	},
	getters: {
		todoItems: (state) => {
			return state.items.filter((item) => {
				return item.status === "todo";
			});
		},
		doneItems: (state) => {
			return state.items.filter((item) => {
				return item.status === "done";
			});
		},
	},
	actions: {
		// 在 action 中使用 this
		addTodoItem(data: string) {
			this.items.push({
				id: uuid(),
				title: data,
				status: "todo",
			});
		},
	},
});
