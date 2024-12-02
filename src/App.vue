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
    <div v-if="categoryContent && categoryContent.length > 0">
      <h3>Lessons in Selected Category:</h3>
      <ul>
        <li v-for="lesson in categoryContent" :key="lesson.keyword">
          <p><strong>Category:</strong> {{ lesson.category }}</p>
          <p><strong>Keyword:</strong> {{ lesson.keyword }}</p>
          <p><strong>Description:</strong> {{ lesson.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [], // カテゴリーリスト
      categoryContent: null, // 選択したカテゴリーの内容（リスト）
    };
  },
  created() {
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
      this.categoryContent = data.lessons || []; // レッスンリストを保存
    },
  },
};
</script>
