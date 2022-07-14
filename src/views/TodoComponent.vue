<template>
  <div class="todo-container">
    <input class="control" type="text" v-model="todoText" @keypress.enter="addTodo" />
    <p class="length">We have {{todos.length}} Todos</p>
    <todo-list-vue @edit-click="editTodo" @delete-click="deleteTodo" :todos="todos"/>
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
      todos: [],
      todoToBeEdited: {},
      indexToBeEdited: -1,
      isEditMode: false
    };
  },
  methods: {
    addTodo() {
      if (this.isEditMode) {
        this.todoToBeEdited.message = this.todoText
        this.todos.splice(this.indexToBeEdited, 1, this.todoToBeEdited)
        this.todoToBeEdited = {}
        this.indexToBeEdited = -1
        this.isEditMode = false
        this.todoText = ""
        return
      }
      this.todos.push({
        id: Math.floor(Math.random() * 10000) + 1,
        message: this.todoText,
        isCompleted: false
      })
      this.todoText = ""
    },
    editTodo(index){
      this.todoToBeEdited = this.todos[index]
      this.indexToBeEdited = index
      this.isEditMode = true
      this.todoText = this.todoToBeEdited.message
    },
    deleteTodo (id) {
      const indexOfItem = this.todos.findIndex(todo => todo.id === id) 
      if (indexOfItem !== -1) {
        this.todos.splice(indexOfItem, 1)
      }
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