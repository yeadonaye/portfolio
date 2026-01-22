<template>
  <div>
    <h2>Mon CV</h2>
    
    <div class="cv-container">
      <div class="cv-header">
        <h1>SENTAYEHU Yeadonaye</h1>
        <p class="cv-title">Étudiant en Informatique</p>
      </div>
      
      <div class="cv-section">
        <h3><i class="fas fa-user-graduate"></i> Formation</h3>
        <div class="cv-item">
          <div class="cv-item-header">
            <h4>BUT Informatique</h4>
            <span class="cv-date">2024 - Présent</span>
          </div>
          <p class="cv-location">Université de Toulouse - IUT Paul Sabatier</p>
          <p class="cv-description">
            Parcours : Administration, Gestion et Exploitation des Données
          </p>
        </div>
        
        <div class="cv-item">
          <div class="cv-item-header">
            <h4>Baccalauréat Générale</h4>
            <span class="cv-date">2024</span>
          </div>
          <p class="cv-location">Lycée Guebre Mariam</p>
          <p class="cv-description">
            Mention Assez Bien<br>
            Spécialités : Mathématiques, NSI, Physique Chimie
          </p>
        </div>
      </div>
      
      <div class="cv-section">
        <h3><i class="fas fa-briefcase"></i> Expérience Professionnelle</h3>
        <div class="cv-item">
          <div class="cv-item-header">
            <h4>Stage Développeur</h4>
            <span class="cv-date">Avril - Juin 2026</span>
          </div>
          <p class="cv-location">IRIT, Toulouse</p>
          <ul class="cv-description">
            <li>Développement d'une application web interne avec Vue.js et Node.js</li>
            <li>Conception et implémentation d'une base de données relationnelle</li>
            <li>Mise en place d'une API RESTful pour le traitement des données</li>
          </ul>
        </div>
        
        <div class="cv-item">
          <div class="cv-item-header">
            <h4>Bénévolat</h4>
            <span class="cv-date">2023-2024</span>
          </div>
          <p class="cv-location">MARYJOY Ethiopia</p>
          <ul class="cv-description">
            <li>Aide aux personnes défavorisées</li>
          </ul>
        </div>
      </div>
      
      <div class="cv-section">
        <h3><i class="fas fa-code"></i> Compétences Techniques</h3>
        <div class="skills-grid">
          <div class="skill-category">
            <h4>Langages</h4>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>PL/SQL</li>
              <li>My SQL</li>
              <li>HTML/CSS</li>
              <li>PHP</li>
              <li>Ada</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h4>Frameworks & Bibliothèques</h4>
            <ul>
              <li>Nuxt.js/Vue.js</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>Flask</li>
              <li>Tkinter</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h4>Logiciels maîtrisés</h4>
            <ul>
              <li>VirtualBox</li>
              <li>Oracle SQL Developer</li>
              <li>Eclipse</li>
              <li>Modelio</li>
              <li>Oracle APEX</li>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>Windev</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="cv-section">
        <h3><i class="fas fa-globe"></i> Langues</h3>
        <div class="languages">
          <div class="language">
            <span>Français</span>
            <div class="language-level">
              <span></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
            </div>
          </div>
          <div class="language">
            <span>Anglais</span>
            <div class="language-level">
              <span></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot filled"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div class="language">
            <span>Amharique</span>
              <div class="language-level">
                <span></span>
                <span class="dot filled"></span>
                <span class="dot filled"></span>
                <span class="dot filled"></span>
                <span class="dot filled"></span>
              </div>      
          </div>
        </div>
      </div>
      
      <div class="cv-actions">
        <a 
          href="/ressources/SENTAYEHU_Yeadonaye_Ashenafi.pdf" 
          download="SENTAYEHU_Yeadonaye_Ashenafi.pdf" 
          class="download-btn"
        >
          <i class="fas fa-download"></i> Télécharger le CV complet (PDF)
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.cv-container {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 32px;
  color: var(--github-text);
}

.cv-header {
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--github-border);
}

.cv-header h1 {
  margin: 0 0 8px 0;
  font-size: 28px;
  color: var(--github-text);
}

.cv-title {
  margin: 0;
  color: var(--github-text-secondary);
  font-size: 16px;
}

.cv-section {
  margin-bottom: 32px;
}

.cv-section h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--github-border);
  font-size: 18px;
  color: var(--github-text);
}

.cv-section h3 i {
  color: var(--github-primary);
  width: 24px;
  text-align: center;
}

.cv-item {
  margin-bottom: 24px;
  padding-left: 8px;
  border-left: 2px solid var(--github-primary);
  padding-left: 16px;
}

.cv-item:last-child {
  margin-bottom: 0;
}

.cv-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
}

.cv-item h4 {
  margin: 0;
  font-size: 16px;
  color: var(--github-text);
}

.cv-date {
  background-color: var(--github-tag-bg);
  color: var(--github-text);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
}

.cv-location {
  margin: 0 0 8px 0;
  color: var(--github-text-secondary);
  font-size: 14px;
  font-style: italic;
}

.cv-description {
  margin: 0;
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

.cv-description li {
  margin-bottom: 4px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}

.skill-category h4 {
  margin: 0 0 12px 0;
  font-size: 15px;
  color: var(--github-text);
}

.skill-category ul {
  margin: 0;
  padding: 0 0 0 20px;
}

.skill-category li {
  margin-bottom: 6px;
  color: var(--github-text-secondary);
  font-size: 14px;
}

.languages {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language span:first-child {
  width: 100px;
  color: var(--github-text);
  font-size: 14px;
}

.language-level {
  display: flex;
  gap: 4px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--github-border);
}

.dot.filled {
  background-color: var(--github-primary);
}

.cv-actions {
  text-align: center;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--github-border);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--github-primary);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.download-btn:hover {
  background-color: var(--github-primary-dark);
}

@media (max-width: 768px) {
  .cv-container { padding: 20px; }
  .skills-grid { grid-template-columns: 1fr; gap: 20px; }
  .cv-item-header { flex-direction: column; align-items: flex-start; gap: 4px; }
  .cv-date { margin-top: 4px; }
}
</style>