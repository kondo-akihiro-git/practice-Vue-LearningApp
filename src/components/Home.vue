<template>
    <div>
      <h1>Home Page</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "HomePage",
    data() {
      return {
        message: "",
      };
    },
    mounted() {
      // APIからデータを取得
      axios
        .get("http://localhost:8888/api/data")
        .then((response) => {
          this.message = response.data.message;
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
        });
    },
  };
  </script>
  