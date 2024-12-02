<template>
    <div>
        <h1>ダッシュボード</h1>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <button @click="fetchCategoryContent(category.id)">
                    {{ category.name }}
                </button>
            </li>
        </ul>
        <div v-if="content">
            <h2>学習内容</h2>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardPage",
    data() {
        return {
            categories: [],
            content: null,
        };
    },
    mounted() {
        // ダッシュボードのカテゴリーをAPIから取得
        fetch("http://localhost:8888/dashboard")
            .then((response) => response.json())
            .then((data) => {
                this.categories = data.categories;
            });
    },
    methods: {
        fetchCategoryContent(categoryId) {
            // カテゴリーを選択した際の学習内容をAPIから取得
            fetch(`http://localhost:8888/category/${categoryId}`)
                .then((response) => response.json())
                .then((data) => {
                    this.content = data.content;
                });
        },
    },
};
</script>