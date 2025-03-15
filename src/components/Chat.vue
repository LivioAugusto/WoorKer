<template>
    <div class="chat">
      <div class="chat-header">
        <h2>Chat com {{ freelancerName }}</h2>
        <button @click="closeChat">Fechar</button>
      </div>
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="chat-input">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Digite sua mensagem..." />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    freelancerName: {
      type: String,
      required: true,
    },
  });
  
  const messages = ref([]);
  const newMessage = ref('');
  
  const sendMessage = () => {
    if (newMessage.value.trim()) {
      messages.value.push({ text: newMessage.value, sender: 'user' });
      newMessage.value = '';
      // Simula uma resposta do freelancer após 1 segundo
      setTimeout(() => {
        messages.value.push({ text: 'Oi! Como posso ajudar?', sender: 'freelancer' });
      }, 1000);
    }
  };
  
  const closeChat = () => {
    emit('close-chat');
  };
  
  const emit = defineEmits(['close-chat']);
  </script>
  
  <style scoped>
  .chat {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    padding: 10px;
    background-color: #4a6cf7;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .chat-header h2 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .chat-header button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    max-height: 300px;
  }
  
  .message {
    margin-bottom: 10px;
  }
  
  .message p {
    margin: 0;
    padding: 8px;
    border-radius: 5px;
    display: inline-block;
    max-width: 80%;
  }
  
  .message.user p {
    background-color: #4a6cf7;
    color: white;
    margin-left: auto;
  }
  
  .message.freelancer p {
    background-color: #f1f1f1;
    color: #333;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  
  .chat-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .chat-input button {
    padding: 8px 12px;
    background-color: #4a6cf7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .chat-input button:hover {
    background-color: #6e8efb;
  }
  </style>