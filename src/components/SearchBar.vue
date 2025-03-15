<template>
    <div class="search-bar">
      <div class="search-container">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar serviços ou freelancers..."
          v-model="searchQuery"
          @input="handleSearch"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  
  const handleSearch = () => {
    console.log('Buscando por:', searchQuery.value);
  };
  </script>
  
  <style scoped>
  .search-bar {
    margin-bottom: 20px;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 25px;
    padding: 10px 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .search-icon {
    font-size: 1.2rem;
    margin-right: 10px;
    color: #666;
  }
  
  .search-container input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    background: transparent;
  }
  </style>