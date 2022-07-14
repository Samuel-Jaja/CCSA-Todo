<template>
  <TodoComponent />
</template>

<script>
import TodoComponent from "./views/TodoComponent.vue";

export default {
  name: "App",
  components: {
    TodoComponent,
  },
};
</script>

<style>
  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
