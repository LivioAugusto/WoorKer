<template>
    <div class="home-page">
      <Header />
      <SearchBar />
      <CategoryList :categories="categories" />
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue';
  import SearchBar from '../components/SearchBar.vue';
  import CategoryList from '../components/CategoryList.vue';
  
  // Dados das categorias
  const categories = [
    { id: 1, name: 'Carpintaria', icon: '🪵', color: '#FFD700' },
    { id: 2, name: 'Costura', icon: '🧵', color: '#FF6F61' },
    { id: 3, name: 'Construção', icon: '🏗️', color: '#6B5B95' },
    { id: 4, name: 'Bar', icon: '🍻', color: '#88B04B' },
    { id: 5, name: 'Pintura', icon: '🎨', color: '#92A8D1' },
    { id: 6, name: 'Gesso', icon: '🏠', color: '#FFA500' },
    { id: 7, name: 'Jardim', icon: '🌿', color: '#32CD32' },
    { id: 8, name: 'Faxina', icon: '🧹', color: '#A0522D' },
  ];
  </script>
  
  <style scoped>
  .home-page {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f8f9fa;
    min-height: 100vh;
  }
  </style>