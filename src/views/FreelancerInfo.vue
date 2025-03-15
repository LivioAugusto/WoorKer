<template>
    <div class="freelancer-info">
      <div v-if="freelancer">
        <div class="freelancer-header">
          <h1>{{ freelancer.name }}</h1>
          <p class="skills">{{ freelancer.skills.join(', ') }}</p>
        </div>
  
        <div class="freelancer-details">
          <div class="rating">
            <span>⭐️ {{ freelancer.rating }}</span>
            <span>({{ freelancer.reviews }} avaliações)</span>
          </div>
          <p class="description">{{ freelancer.description }}</p>
        </div>
  
        <div class="freelancer-actions">
          <button @click="openChat">Entrar em Contato</button>
          <router-link to="/" class="back-link">Voltar para a página inicial</router-link>
        </div>
      </div>
      <div v-else>
        <p>Carregando...</p>
      </div>
  
      <!-- Componente do Chat -->
      <Chat v-if="showChat" :freelancerName="freelancers.name" @close-chat="closeChat" />
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Chat from '../components/Chat.vue';
  
  // Dados do freelancer (simulados)
  const freelancers = [
    {
      id: 1,
      name: 'Jozef Roberto',
      skills: ['Carpintaria', 'Marcenaria'],
      rating: 4.8,
      reviews: 120,
      description: 'Especialista em móveis personalizados e reformas. Com mais de 10 anos de experiência, ofereço serviços de alta qualidade.',
    },
    {
      id: 2,
      name: 'Carlos Silva',
      skills: ['Design Gráfico', 'UI/UX'],
      rating: 4.7,
      reviews: 95,
      description: 'Designer com experiência em branding e interfaces. Trabalho com ferramentas modernas como Figma e Adobe XD.',
    },
    {
      id: 3,
      name: 'Ana Souza',
      skills: ['Jardinagem', 'Paisagismo'],
      rating: 4.9,
      reviews: 150,
      description: 'Especialista em jardinagem e paisagismo. Transformo espaços externos em ambientes incríveis.',
    },
  ];
  
  const route = useRoute();
  const freelancer = ref(null);
  const showChat = ref(false);
  
  // Função para carregar os dados do freelancer
  const loadFreelancer = () => {
    const freelancerId = parseInt(route.params.id);
    freelancer.value = freelancers.find(f => f.id === freelancerId);
  };
  
  // Carrega o freelancer inicialmente
  loadFreelancer();
  
  // Observa mudanças no parâmetro da rota (id)
  watch(() => route.params.id, () => {
    loadFreelancer();
  });
  
  // Função para abrir o chat
  const openChat = () => {
    showChat.value = true;
  };
  
  // Função para fechar o chat
  const closeChat = () => {
    showChat.value = false;
  };
  </script>
  
  <style scoped>
  .freelancer-info {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .freelancer-header h1 {
    font-size: 2rem;
    color: #333;
  }
  
  .skills {
    font-size: 1.2rem;
    color: #666;
  }
  
  .rating {
    margin: 10px 0;
    font-size: 1rem;
    color: #888;
  }
  
  .description {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4a6cf7;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #6e8efb;
  }
  
  .back-link {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #4a6cf7;
    text-decoration: none;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>