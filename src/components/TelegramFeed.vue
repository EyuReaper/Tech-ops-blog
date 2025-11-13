<script setup>
import { ref, onMounted } from 'vue';

const updates = ref([]);

onMounted(async () => {
  const res = await fetch('/api/telegram-feed');
  updates.value = await res.json();
});
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
    <h3 class="text-lg font-bold flex items-center gap-2 mb-4">
      <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm5.768 17.637l-2.46-2.343-4.643 4.267-1.837-1.774 4.643-4.267-2.46-2.343 8.957-.001z"/>
      </svg>
      Telegram Updates
    </h3>
    <ul class="space-y-3 text-sm">
      <li v-for="update in updates" :key="update.time" class="flex justify-between items-start">
        <div>
          <p class="font-medium">{{ update.text }}</p>
          <p class="text-xs text-gray-500">{{ update.time }}</p>
        </div>
        <a v-if="update.link" :href="update.link" target="_blank" class="text-accent text-xs">Link →</a>
      </li>
    </ul>
    <a href="https://t.me/techopschannel" target="_blank" class="mt-4 btn-secondary text-sm w-full block text-center">
      Follow on Telegram
    </a>
  </div>
</template>