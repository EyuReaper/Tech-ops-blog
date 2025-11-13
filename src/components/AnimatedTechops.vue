<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  text?: string;
  className?: string;
  animationSpeed?: number;
  showBorder?: boolean;
}>(), {
  text: 'Tech Ops',
  className: '',
  animationSpeed: 6,
  showBorder: false,
});

const isDark = ref(false);
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark');
  new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark');
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});

const gradientStyle = computed(() => {
  const light = ['#00CCFF', '#4F46E5', '#FF6600']; // Cyan → Indigo → Orange
  const dark = ['#00D4FF', '#FF4500', '#00CCFF'];   // Electric → Neon → Cyan

  const colors = isDark.value ? dark : light;

  return {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${props.animationSpeed}s`,
    backgroundSize: '300% 100%',
    '--animation-duration': `${props.animationSpeed}s`,
  };
});

const textStyle = computed(() => ({
  ...gradientStyle.value,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
}));
</script>

<template>
  <div
    :class="`relative flex items-center justify-center font-orbitron font-black tracking-tight transition-all duration-500 group ${className}`"
  >
    <!-- Optional Glowing Border -->
    <div
      v-if="showBorder"
      class="absolute inset-0 bg-cover animate-gradient rounded-xl"
      :style="gradientStyle"
    >
      <div
        class="absolute inset-0 bg-[var(--bg-secondary)] dark:bg-[var(--bg-secondary-dark)] rounded-xl"
        style="inset: 1px;"
      />
    </div>

    <!-- Animated Gradient Text -->
    <div
      class="relative z-10 text-transparent bg-cover animate-gradient px-1 transition-transform duration-300 group-hover:scale-110"
      :style="textStyle"
    >
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
/* Import Orbitron 900 from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  animation: gradient var(--animation-duration, 6s) linear infinite;
}
</style>