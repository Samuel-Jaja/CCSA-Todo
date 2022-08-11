<template>
  <div class="todo-container">
    <input
      class="control"
      type="text"
      v-model="todoText"
      @keypress.enter="addTodoMethod"
    />
    <p class="length">We have {{ todos.length }} Todos</p>
    <todo-list-vue @edit="setText" @delete-click="deleteTodo" :todos="todos" />
  </div>
</template>

<script>
import TodoListVue from "@/components/TodoList.vue";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Todo-Component",
  components: {
    TodoListVue,
  },

  setup() {
    const todoText = ref("");

    const store = useStore();

    function setText(text) {
      todoText = text;
    }

    function setTodoTextMethod() {
      setTodoText(todoText);
    }

    function addTodoMethod() {
      if (isEditMode) {
        setActiveTodo({
          id: activeTodo.id,
          isCompleted: activeTodo.isCompleted,
          message: todoText,
        });
        editTodo(activeTodo);
        changeIsEditStateFalse();
        todoText = "";
        return;
      }

      const payload = {
        id: Math.floor(Math.random() * 10000) + 1,
        message: todoText,
        isCompleted: false,
      };

      addTodo(payload);
      todoText = "";
    }

    return {
      todoText,
      setText,
      setTodoTextMethod,
      addTodoMethod,

      // access a state in computed function
      isEditMode: computed(() => store.state.isEditMode),
      activeTodo: computed(() => store.state.activeTodo),

      // access a getter in computed function
      todos: computed(() => store.getters.todos),

      // access a mutation
      setActiveTodo: () => store.commit("setActiveTodo"),
      changeIsEditStateFalse: () => store.commit("changeIsEditStateFalse"),
      changeIsEditStateTrue: () => store.commit("changeIsEditStateTrue "),
      deleteTodo: () => store.commit("deleteTodo "),
      addTodo: () => store.commit("addTodo "),
      editTodo: () => store.commit("editTodo "),
    };
  },

  // data() {
  //   return {
  //     todoText: "",
  //   };
  // },
  // computed: {
  //   ...mapGetters(["todos"]),
  //   ...mapState(["isEditMode", "activeTodo"]),
  // },
  // methods: {
  //   ...mapMutations([
  //     "addTodo",
  //     "editTodo",
  //     "changeIsEditStateFalse",
  //     "setActiveTodo",
  //   ]),

  //   setText(text) {
  //     this.todoText = text;
  //   },
  //   setTodoTextMethod() {
  //     this.setTodoText(this.todoText);
  //   },
  //   addTodoMethod() {
  //     if (this.isEditMode) {
  //       this.setActiveTodo({
  //         id: this.activeTodo.id,
  //         isCompleted: this.activeTodo.isCompleted,
  //         message: this.todoText,
  //       });
  //       this.editTodo(this.activeTodo);
  //       this.changeIsEditStateFalse();
  //       this.todoText = "";
  //       return;
  //     }

  //     const payload = {
  //       id: Math.floor(Math.random() * 10000) + 1,
  //       message: this.todoText,
  //       isCompleted: false,
  //     };

  //     this.addTodo(payload);
  //     this.todoText = "";
  //   },
  // },
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
