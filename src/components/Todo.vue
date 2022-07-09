<script setup lang="ts">
import { ref } from "vue";
import { useTodo } from "../store";
const data = ref("");
const store = useTodo();
const addTodo = () => {
	store.addTodoItem(data.value);
	clearInput();
};
const clearInput = () => {
	data.value = "";
};
</script>

<template>
	<div>
		<h2>Todo</h2>
		<div>
			<input v-model="data" type="text" @keydown.enter="addTodo" />
			<button @click="addTodo">add</button>
		</div>
		<ul>
			<li
				class="todo-item"
				v-for="item in store.todoItems"
				:key="item.id">
				<input
					type="checkbox"
					style="vertical-align: middle"
					v-model="item.status"
					true-value="done"
					false-value="todo" />
				<span>{{ item.title }}</span>
			</li>
		</ul>
	</div>
	<div>
		<h2>Done</h2>
		<ul v-for="item in store.doneItems" :key="item.id">
			<li class="done-item">{{ item.title }}</li>
		</ul>
	</div>
</template>

<style scoped>
.todo-item {
	list-style: none;
}

ul {
	padding-left: 0;
}
.done-item {
	padding-left: 5px;
}
</style>
