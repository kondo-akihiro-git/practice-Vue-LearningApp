<template>
    <div>
      <h2>カテゴリー: {{ category.name }}</h2>
      <p>{{ categoryContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      category: Object,
    },
    name: "CategoryPage",
    data() {
      return {
        categoryContent: null,
      };
    },
    mounted() {
      this.fetchCategoryContent();
    },
    methods: {
      fetchCategoryContent() {
        // 選択されたカテゴリーの学習内容をAPIから取得
        fetch(`http://localhost:8888/category/${this.category.id}`)
          .then((response) => response.json())
          .then((data) => {
            this.categoryContent = data.content;
          });
      },
    },
  };
  </script>
  