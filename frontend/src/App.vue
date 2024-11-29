<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    axios.get('http://localhost:8888/api/data')
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
};
</script>
