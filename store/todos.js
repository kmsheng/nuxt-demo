import axios from '~/plugins/axios';

export const state = () => ({
  todos: []
});

export const mutations = {

  setTodos(state, todos) {
    state.todos = todos;
  },

  add(state, text) {
    state.todos.push({
      text: text,
      done: false
    });
  },

  remove(state, {todo}) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  toggle(state, todo) {
    todo.done = !todo.done;
  }
};

export const actions = {
  async setTodos({commit}) {
    const {data} = await axios.get('/api/todos');
    commit('setTodos', data);
  }
};
