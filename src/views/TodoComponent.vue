<template>
  <div class="todo-container">
    <input class="control" type="text" v-model="todoText" @keypress.enter="addTodo" />
    <p class="length">We have {{todos.length}} Todos</p>
    <todo-list-vue :todos="todos"/>
  </div>
</template>
<script>
import TodoListVue from '@/components/TodoList.vue';

export default {
  name: "Todo-Component",
  components: {
    TodoListVue
  },
  data() {
    return {
      todoText: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: Math.floor(Math.random() * 10000) + 1,
        message: this.todoText,
        isCompleted: false
      })
      this.todoText = ""
    },
    buttonClicked(data) {
      console.log("I have been clicked")
      console.log(data)
    }
  }
};
</script>

<style scoped>
  .todo-container {
    border: 1px solid #6489f6;
    box-sizing: border-box;
    height: auto;
    margin: 0 auto;
    padding: 20px;
    max-width: 500px;
  }

  .control {
    border-radius: 5px;
    border: 1px solid #6489f6;
    box-shadow: 0;
    box-sizing: border-box;
    outline: #fe8686;
    padding: 10px;
    width: 100%;
  }
</style>