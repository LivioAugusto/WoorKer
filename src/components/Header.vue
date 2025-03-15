<template>
    <header class="header">
      <h1>Elson/Novelva 73 v</h1>
      <nav>
        <router-link to="/">Início</router-link>
        <router-link to="/categorias">Categorias</router-link>
        <router-link to="/freelancers">Freelancers</router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  // Nenhuma lógica necessária aqui
  </script>
  
  <style scoped>
  .header {
    text-align: center;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #4a6cf7;
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .header nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .header nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
  .header nav a:hover {
    text-decoration: underline;
  }
  </style>