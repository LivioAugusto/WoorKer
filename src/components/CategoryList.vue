<template>
    <div class="category-list">
      <h2>Categorias</h2>
      <div class="categories-grid">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-card"
          :style="{ backgroundColor: category.color }"
        >
          <span class="icon">{{ category.icon }}</span>
          <span class="name">{{ category.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    categories: {
      type: Array,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .category-list {
    margin-top: 20px;
  }
  
  .category-list h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .category-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .name {
    font-size: 1rem;
    font-weight: bold;
  }
  </style>