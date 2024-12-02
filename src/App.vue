<template>
  <div id="app">
    <h1>Learning Dashboard</h1>
    <div v-if="categories.length > 0">
      <h2>Choose a Category to Learn:</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <button @click="loadLesson(category.id)">{{ category.name }}</button>
        </li>
      </ul>
    </div>
    <div v-if="categoryContent">
      <h3>Category: {{ categoryContent.category }}</h3>
      <p><strong>Keyword:</strong> {{ categoryContent.keyword }}</p>
      <p><strong>Description:</strong> {{ categoryContent.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],  // カテゴリーリスト
      categoryContent: null,  // 選択したカテゴリーの内容
    };
  },
  created() {
    // コンポーネントが作成されたときにカテゴリーを取得
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      const response = await fetch("http://localhost:8888/dashboard");
      const data = await response.json();
      this.categories = data.categories;
    },
    async loadLesson(categoryId) {
      const response = await fetch(`http://localhost:8888/category/${categoryId}`);
      const data = await response.json();
      if (data.category) {
        this.categoryContent = data;  // カテゴリーの内容を表示
      } else {
        this.categoryContent = { category: "No category found" };
      }
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  cursor: pointer;
}
</style>
