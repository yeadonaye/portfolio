<template>
  <aside class="github-sidebar">
    <div class="profile-card">
      <img 
        :src="'/assets/ressources/photo.jpeg'" 
        alt="Photo de profil de SENTAYEHU Yeadonaye" 
        class="profile-avatar"
      >
      <h2 class="profile-name">SENTAYEHU Yeadonaye</h2>
      <p class="profile-username">Étudiant en Informatique</p>
      
      <div class="profile-stats">
        <div class="stat">
          <i class="fas fa-map-marker-alt"></i>
          <span>Toulouse, France</span>
        </div>
        <div class="stat">
          <i class="fas fa-envelope"></i>
          <a href="mailto:yeadonayeashenafi.com">yeadonayeashenafi@gmail.com</a>
        </div>
      </div>
      
      <div class="profile-links">
        <a href="https://github.com/yeadonaye" class="github-btn" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yeadonaye/" class="github-btn" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
    
    <div class="skills-card">
      <h3>Compétences</h3>
      <div class="skills-list">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-bar">
            <div 
              class="skill-level" 
              :style="{ width: skill.level + '%', backgroundColor: skill.color }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const skills = [
  { name: 'Java', level: 70, color: '#e34c26' },
  { name: 'Python', level: 85, color: '#f0db4f' },
  { name: 'Ada', level: 60, color: '#42b883' },
  { name: 'SQL', level: 65, color: '#68a063' },
];
</script>

<style scoped>
.github-sidebar {
  width: 280px;
  flex-shrink: 0;
}

.profile-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
  text-align: center;
  margin-bottom: 16px;
}

.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid var(--github-primary);
  margin: 0 auto 16px;
  object-fit: cover;
}

.profile-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--github-text);
  margin-bottom: 4px;
}

.profile-username {
  color: var(--github-text-secondary);
  margin-bottom: 16px;
  font-size: 14px;
}

.profile-stats {
  margin: 16px 0;
  text-align: left;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--github-text-secondary);
  font-size: 14px;
}

.stat i {
  width: 20px;
  text-align: center;
  color: var(--github-text);
}

.stat a {
  color: var(--github-primary);
  text-decoration: none;
}

.stat a:hover {
  text-decoration: underline;
}

.profile-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}

.github-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--github-btn-bg);
  color: var(--github-btn-text);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
}

.github-btn:hover {
  background-color: var(--github-btn-hover-bg);
  border-color: var(--github-border-active);
}

.skills-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
}

.skills-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--github-text);
  margin-bottom: 16px;
  border-bottom: 1px solid var(--github-border);
  padding-bottom: 8px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill {
  margin-bottom: 8px;
}

.skill-name {
  display: block;
  font-size: 13px;
  color: var(--github-text);
  margin-bottom: 4px;
}

.skill-bar {
  height: 8px;
  background-color: var(--github-border);
  border-radius: 4px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 960px) {
  .github-sidebar {
    width: 100%;
  }

  .profile-card,
  .skills-card {
    margin-bottom: 16px;
  }
}
</style>
