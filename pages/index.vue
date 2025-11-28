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
      </div>
    </main>
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('overview');

const tabs = [
  { id: 'overview', name: 'Vue d\'ensemble', icon: 'fas fa-home' },
  { id: 'projects', name: 'Projets', icon: 'fas fa-project-diagram' },
  { id: 'cv', name: 'CV', icon: 'fas fa-file-alt' },
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
</style>
