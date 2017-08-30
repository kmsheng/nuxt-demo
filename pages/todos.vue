<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ul>
  </section>
</template>

<script>
export default {

  fetch({store}) {
    return store.dispatch('todos/setTodos');
  },

  computed: {
    todos() {
      return this.$store.state.todos.todos;
    }
  },

  head() {
    return {
      title: 'Todos'
    };
  }
};
</script>

<style scoped>
</style>
