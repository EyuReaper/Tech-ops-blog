<script setup>
import { onMounted, ref } from 'vue';

const isDark = ref(false);

onMounted(() => {
  // Check saved theme or system preference
  const saved = localStorage.getItem('theme');
  isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme();
});

const toggle = () => {
  isDark.value = !isDark.value;
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  applyTheme();
};

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value);
};
</script>

<template>
  <button
    @click="toggle"
    class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    aria-label="Toggle dark mode"
  >
    <!-- Sun Icon (Light Mode) -->
    <svg
      v-if="!isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-gray-700 dark:text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m8.485-10.485l-.707.707M5.636 18.364l-.707.707m13.435-2.828l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>

    <!-- Moon Icon (Dark Mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>