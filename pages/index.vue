<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <ul class="users">
      <li>
        <nuxt-link :to="'users'">Users Demo</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>

.links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.links > li > a {
  display: inline-block;
  margin: 0 14px;
}
</style>
