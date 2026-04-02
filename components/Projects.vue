<template>
  <div>
    <h2>Mes Projets</h2>

    <div class="projects-grid">

      <!-- Projet 1 : Liverpool – Fullstack PHP & JS -->
      <div class="project-card">
        <div class="project-header">
          <h3>Gestionnaire de Club de Football</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/LiverpoolFrontend" class="project-link" title="Frontend">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/yeadonaye/LiverpoolBackend" class="project-link" title="Backend">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/yeadonaye/LiverpoolAPI-auth" class="project-link" title="API Auth">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Application web fullstack de gestion d'une équipe de football, avec une architecture MVC complète.
          J'ai conçu une API REST sécurisée par token entre le backend PHP et le frontend JavaScript,
          et déployé l'ensemble sur un environnement de production (Alwaysdata).
        </p>
        <div class="project-badges">
          <span class="badge badge-fullstack">Fullstack</span>
          <span class="badge badge-deployed">Déployé</span>
        </div>
        <div class="project-tech">
          <span class="tech-tag">PHP</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">HTML/CSS</span>
          <span class="tech-tag">MariaDB</span>
          <span class="tech-tag">API REST</span>
          <span class="tech-tag">MVC</span>
        </div>
      </div>

      <!-- Projet 2 : Proxy FTP -->
      <div class="project-card">
        <div class="project-header">
          <h3>Proxy FTP en C</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/projetFTP" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Proxy FTP bas niveau en C qui intercepte les connexions FTP en mode actif (PORT) et les convertit
          automatiquement en mode passif (PASV) côté serveur. Il relaie les flux de contrôle
          (USER, PASS, LIST…) et les flux de données entre client et serveur de manière transparente.
        </p>
        <div class="project-badges">
          <span class="badge badge-systems">Systèmes & Réseaux</span>
        </div>
        <div class="project-tech">
          <span class="tech-tag">C</span>
          <span class="tech-tag">Sockets</span>
          <span class="tech-tag">Protocole FTP</span>
          <span class="tech-tag">Makefile</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 3 : Gestion Immobilière -->
      <div class="project-card">
        <div class="project-header">
          <h3>Application de Gestion Immobilière</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/gestionImmobiliere" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Application Java développée en équipe pour remplacer des documents de calculs immobiliers.
          J'ai modélisé les données (MCD), conçu et implémenté la base de données avec des triggers
          et contraintes d'intégrité, puis développé l'interface Java Swing avec tests unitaires JUnit 4.
        </p>
        <div class="project-badges">
          <span class="badge badge-team">Projet d'équipe</span>
        </div>
        <div class="project-tech">
          <span class="tech-tag">Java Swing</span>
          <span class="tech-tag">PL/SQL</span>
          <span class="tech-tag">JUnit 4</span>
          <span class="tech-tag">MCD</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 4 : Vente de Tomates -->
      <div class="project-card">
        <div class="project-header">
          <h3>Application de Vente de Tomates</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/ventesDeTomate" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Application Java avec interface graphique WindowBuilder/Swing permettant de parcourir et acheter
          des variétés de tomates. Réalisée en binôme dans le cadre d'une SAE, avec tests unitaires
          JUnit pour assurer la robustesse de l'application.
        </p>
        <div class="project-badges">
          <span class="badge badge-team">Projet d'équipe</span>
        </div>
        <div class="project-tech">
          <span class="tech-tag">Java</span>
          <span class="tech-tag">Java Swing</span>
          <span class="tech-tag">WindowBuilder</span>
          <span class="tech-tag">JUnit 4</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 5 : Projets Python -->
      <div class="project-card">
        <div class="project-header">
          <h3>Mini-Projets Python</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/projetsPython" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Collection de trois mini-projets Python : un simulateur interactif du <strong>Jeu de la Vie</strong>
          (Conway) avec Tkinter, un jeu <strong>Snake</strong> avec Pygame et gestion des collisions,
          et un <strong>Typing Test</strong> mesurant la vitesse de frappe (WPM, CPM, précision).
        </p>
        <div class="project-badges">
          <span class="badge badge-personal">Personnel</span>
        </div>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Tkinter</span>
          <span class="tech-tag">Pygame</span>
          <span class="tech-tag">Algorithmes</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
h2 {
  margin-bottom: 24px;
  color: var(--github-text);
  font-size: 24px;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

.project-card {
  background-color: var(--github-card-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--github-border-active);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.project-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--github-primary);
  flex: 1;
}

.project-links {
  display: flex;
  gap: 8px;
}

.project-link {
  color: var(--github-text-secondary);
  transition: color 0.2s ease;
  font-size: 14px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.project-link:hover {
  color: var(--github-text);
  background-color: var(--github-hover-bg);
}

.project-description {
  color: var(--github-text-secondary);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
  flex-grow: 1;
}

/* Badges de catégorie */
.project-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
}

.badge-fullstack  { background-color: #dbeafe; color: #1d4ed8; border: 1px solid #93c5fd; }
.badge-deployed   { background-color: #dcfce7; color: #15803d; border: 1px solid #86efac; }
.badge-systems    { background-color: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
.badge-team       { background-color: #ede9fe; color: #6d28d9; border: 1px solid #c4b5fd; }
.badge-personal   { background-color: #fce7f3; color: #9d174d; border: 1px solid #f9a8d4; }

/* Tech tags */
.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--github-border);
}

.tech-tag {
  background-color: var(--github-tag-bg);
  color: var(--github-text);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid var(--github-border);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>