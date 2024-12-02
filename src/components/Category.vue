<template>
    <div>
        <h2>カテゴリー: {{ categoryContent.category }}</h2>
        <p><strong>キーワード:</strong> {{ categoryContent.keyword }}</p>
        <p><strong>説明:</strong> {{ categoryContent.description }}</p>
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
                    this.categoryContent = data;
                });
        },
    },
};
</script>
