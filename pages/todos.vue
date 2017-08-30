<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1>Todo List</h1>
    <ul class="todos">
      <li>item</li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  async asyncData() {
    const {data} = await axios.get('/api/todos');
    return {todos: data};
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
