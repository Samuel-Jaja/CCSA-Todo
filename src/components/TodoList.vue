<template>
  <div>
    <todo-item-vue @edit-clicked="emitText" v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import TodoItemVue from './TodoItem.vue'

export default {
    components: {
        TodoItemVue
    },
    props: {
        todos: {
            type: Array,
            default: []
        }
    },
    methods: {
      emitText(text) {
        this.$emit('edit', text)
      }
    }
}
</script>