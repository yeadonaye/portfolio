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
        <div class="github-nav-center">
          <NuxtLink to="/" :class="['nav-link', { active: route.path === '/' }]">Accueil</NuxtLink>
          <NuxtLink to="/github-contributions" :class="['nav-link', { active: route.path === '/github-contributions' }]">
            GitHub Contributions
          </NuxtLink>
          <NuxtLink to="/linkedin-posts" :class="['nav-link', { active: route.path === '/linkedin-posts' }]">
            LinkedIn Posts
          </NuxtLink>
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
const route = useRoute();

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
  gap: 16px;
}

.github-nav-center {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  color: var(--github-text-secondary);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--github-text);
  background-color: var(--github-hover-bg);
  text-decoration: none;
}

.nav-link.active {
  color: var(--github-primary);
  border-color: var(--github-border-active);
  background-color: var(--github-hover-bg);
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

@media (max-width: 960px) {
  .github-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .github-nav-left,
  .github-nav-right {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
