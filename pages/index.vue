<template>
  <div>
    <!-- Header Component -->
    <Header />
    
    <main class="github-container container">
      <!-- Sidebar Component -->
      <Sidebar />
      
      <!-- Main Content -->
      <div class="github-main">
        <!-- Tabs Navigation -->
        <div class="github-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab-btn', { 'active': activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <i :class="tab.icon"></i> {{ tab.name }}
          </button>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-content" :class="{ 'active': activeTab === 'overview' }">
          <Overview v-if="activeTab === 'overview'" />
        </div>
        
        <div class="tab-content" :class="{ 'active': activeTab === 'projects' }">
          <Projects v-if="activeTab === 'projects'" />
        </div>
        
        <div class="tab-content" :class="{ 'active': activeTab === 'cv' }">
          <CV v-if="activeTab === 'cv'" />
        </div>
        
        <div class="tab-content" :class="{ 'active': activeTab === 'contact' }">
          <Contact v-if="activeTab === 'contact'" />
        </div>
      </div>
    </main>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Contact from '~/components/Contact.vue';

const activeTab = ref('overview');

// Gestionnaire d'événement pour le changement d'onglet
const handleTabChange = (event) => {
  const validTabs = ['overview', 'projects', 'cv', 'contact'];
  if (validTabs.includes(event.detail)) {
    activeTab.value = event.detail;
  }
};

// Ajouter et supprimer l'écouteur d'événement
onMounted(() => {
  window.addEventListener('tab-change', handleTabChange);
  
  // Gestion des ancres dans l'URL au chargement de la page
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (['projects', 'cv', 'contact'].includes(hash)) {
      activeTab.value = hash;
    }
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('tab-change', handleTabChange);
});

const tabs = [
  { id: 'overview', name: 'Vue d\'ensemble', icon: 'fas fa-home' },
  { id: 'projects', name: 'Projets', icon: 'fas fa-project-diagram' },
  { id: 'cv', name: 'CV', icon: 'fas fa-file-alt' },
  { id: 'contact', name: 'Contact', icon: 'fas fa-envelope' },
];
</script>

<style scoped>
/* Base styles */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

.github-container {
  display: flex;
  gap: 24px;
  margin-top: 24px;
}

.github-main {
  flex: 1;
  min-width: 0;
}

/* Tabs */
.github-tabs {
  display: flex;
  border-bottom: 1px solid var(--github-border);
  margin-bottom: 24px;
  overflow-x: auto;
}

.tab-btn {
  padding: 12px 16px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--github-text-secondary);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-btn:hover {
  color: var(--github-text);
  border-bottom-color: var(--github-border-active);
}

.tab-btn.active {
  color: var(--github-text);
  border-bottom-color: var(--github-primary);
  font-weight: 600;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive layout */
@media (max-width: 960px) {
  .github-container {
    flex-direction: column;
  }

  .github-tabs {
    flex-wrap: wrap;
    gap: 8px;
  }

  .tab-btn {
    flex: 1 1 calc(50% - 8px);
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .tab-btn {
    flex: 1 1 100%;
  }
}
</style>
