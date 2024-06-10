<template>
  <button @click="toggleForm">Toggle Form</button>

  <p>
    {{ displayForm ? 'Form is shown' : 'Form is not shown' }}
  </p>

  <div v-show="displayForm">
    <form @submit.prevent="createTodo">
      <label for="todo-description">Description</label>
      <input v-model="data.todoDescription" type="text" id="todo-description">

      <input type="submit" value="Create">
    </form>

    <ol>
      <li v-for="(todo, index) in data.todos">
        <del v-if="todo.isCompleted">{{ todo.description }}</del>
        <span v-else>{{ todo.description }}</span>

        <button @click="deleteTodo(index)">Delete 🗑️</button>
        <button v-if="!todo.isCompleted" @click="markAsComplete(index)">Complete ✅</button>
      </li>
    </ol>
  </div>  
</template>

<script setup>
import { reactive, ref } from "vue";

let displayForm = ref(false);



const data = reactive({
  todos: [],
  todoDescription: ""
})

function createTodo() {
  data.todos.push({
    description: data.todoDescription,
    isCompleted: false
  });
  data.todoDescription = "";
}

function deleteTodo(index) {
  data.todos.splice(index, 1);
}

function markAsComplete(index) {
  data.todos[index].isCompleted = true;
}

function toggleForm() {
  displayForm.value = !displayForm.value;
}
</script>


