<template>
  <footer class="github-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#projects" @click.prevent="scrollTo('projects')" class="footer-link">Projets</a>
          <a href="#cv" @click.prevent="scrollTo('cv')" class="footer-link">CV</a>
          <a href="#contact" @click.prevent="scrollTo('contact')" class="footer-link">Contact</a>
        </div>
        <div class="footer-social">
          <a href="https://github.com/yeadonaye" class="social-link" aria-label="GitHub" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yeadonaye/" class="social-link" aria-label="LinkedIn" title="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yeadonayeashenafi@gmail.com" class="social-link" aria-label="Email" title="Email">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        <div class="footer-copyright">
          <p>© {{ currentYear }} SENTAYEHU</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());

const scrollTo = (section) => {
  // Mettre à jour l'onglet actif
  window.dispatchEvent(new CustomEvent('tab-change', { detail: section }));
  
  // Faire défiler vers la section
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.github-footer {
  background-color: var(--github-header-bg);
  border-top: 1px solid var(--github-border);
  padding: 40px 0;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.footer-link {
  color: var(--github-text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.footer-link:hover {
  color: var(--github-primary);
  background-color: rgba(46, 164, 79, 0.1);
  text-decoration: none;
}

.footer-social {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.social-link {
  color: var(--github-text-secondary);
  font-size: 18px;
  transition: color 0.2s ease;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
}

.social-link:hover {
  color: var(--github-primary);
  border-color: var(--github-primary);
  transform: translateY(-2px);
}

.footer-copyright {
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.footer-note {
  margin-top: 8px;
  font-size: 13px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-links {
    gap: 16px;
    margin-bottom: 20px;
  }
  
  .footer-social {
    gap: 16px;
    margin-bottom: 20px;
  }
  
  .footer-copyright {
    font-size: 13px;
  }
}
</style>
