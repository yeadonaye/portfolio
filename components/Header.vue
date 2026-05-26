<template>
  <header class="github-header">
    <div class="container">
      <nav class="github-nav">
        <div class="github-nav-left">
          <span class="github-logo">
            <font-awesome-icon icon="code" />
            <span>Yeadonaye Ashenafi - Portfolio</span>
          </span>
        </div>
        <div class="github-nav-right">
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'">
            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" />
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.body.classList.add('loaded');
});
</script>

<style scoped>
.github-header {
  background-color: var(--github-header-bg);
  border-bottom: 1px solid var(--github-border);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.github-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.github-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  color: var(--github-text);
}

.github-logo i {
  font-size: 24px;
  color: var(--github-primary);
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--github-text-secondary);
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.theme-toggle:hover {
  background-color: var(--github-hover-bg);
  color: var(--github-text);
}
</style>
