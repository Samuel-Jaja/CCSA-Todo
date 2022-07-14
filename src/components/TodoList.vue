<template>
  <div>
    <todo-item-vue @edit-clicked="$emit('edit-click', index)" @delete-clicked="$emit('delete-click', todo.id)" v-for="(todo, index) in todos" :key="todo.id" :todo="todo"/>
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
    }
}
</script>