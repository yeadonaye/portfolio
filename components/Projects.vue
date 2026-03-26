<template>
  <div>
    <h2>Mes Projets</h2>
    
    <div class="projects-grid">
      <!-- Projet 1 : Application de vente de Tomate -->
      <div class="project-card">
        <div class="project-header">
          <h3>Application de vente de Tomate</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/ventesDeTomate" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Dans le cadre d’une SAE, j’ai collaboré avec un camarade de classe pour concevoir et développer une application Java destinée à gérer la vente de tomates. Grâce à l’outil WindowBuilder et à l’interface Java Swing, nous avons réalisé une application dotée d’une interface graphique intuitive, permettant de parcourir et sélectionner une large collection de variétés de tomates.
        </p>
        <p class="project-description">
          Ce projet nous a permis de renforcer nos compétences en développement Java, en conception d’interfaces graphiques et en structuration d’une application orientée utilisateur. Et dernièrement, nous avons intégré des tests unitaires avec JUnit pour assurer la fiabilité et la robustesse de notre application.        
        </p>
        <div class="project-tech">
          <span class="tech-tag">Java</span>
          <span class="tech-tag">Java Swing</span>
          <span class="tech-tag">JUnit 4</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 2 : Proxy FTP -->
      <div class="project-card">
        <div class="project-header">
          <h3>Proxy FTP</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/projetFTP" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Ce projet est un proxy FTP écrit en C dont le rôle est d'intercepter les connesxions FTP en mode actif (PORT) et de les convertir automatiquement en mode passif(PASV) côté serveur.
          <br>
          Ce proxy relaie dans un premier temps le flux de contrôle (USER, PASS, LIST, QUIT, etc.) et dans un deuxième temps le flux de données entre le client FTP et le serveur distant.
          <br>
          L'objectif principal de ce projet est donc de permettre à un client FTP actif de communiquuer avec un serveur FTP passif, de manière transparent.
        </p>
        <div class="project-tech">
          <span class="tech-tag">C</span>
          <span class="tech-tag">Makefile</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 3 : Application de Gestion Immobilière -->
      <div class="project-card">
        <div class="project-header">
          <h3>Application de Gestion Immobilière</h3>
          <div class="project-links">
            <a href="#" class="project-link" title="Voir le code">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <p class="project-description">
          Dans le cadre d’une SAE réalisée en deuxième année de BUT Informatique, nous avons développé en groupe une application de gestion immobilière visant à remplacer des documents de calculs existants par une solution informatisée.
          <br>
          L’objectif de ce projet était de concevoir une application complète répondant à un besoin réel, en couvrant l’ensemble du processus, de l’analyse du besoin jusqu’au développement final, dans un cadre académique et collaboratif.
          <br>
          À partir des documents fournis, nous avons modélisé les données en créant un MCD, puis conçu et implémenté la base de données, en intégrant des mécanismes de sécurisation tels que des contraintes d’intégrité et des triggers. Nous avons ensuite développé l’application en Java Swing et mis en place des tests unitaires avec JUnit 4 afin de valider son bon fonctionnement.
          <br>
          Ce projet m’a permis de travailler sur l’ensemble du cycle de développement logiciel, en combinant conception, modélisation, développement et tests, tout en renforçant mes compétences en travail d’équipe et en développement d’applications Java.
        </p>
        <div class="project-tech">
          <span class="tech-tag">Java Swing</span>
          <span class="tech-tag">JUnit 4</span>
          <span class="tech-tag">PL/SQL</span>
          <span class="tech-tag">Git</span>
        </div>
      </div>

      <!-- Projet 4 : Gestionnaire de Club de Foot | Fullstack PHP & JS-->
      <div class="project-card" href="https://liverpool.alwaysdata.net">
        <div class="project-header">
          <h3>Gestionnaire de Club de Foot | Fullstack PHP & JS</h3>
          <div class="project-links">
            <a href="https://github.com/yeadonaye/LiverpoolFrontend" class="project-link" title="Voir le code (FrontEnd)">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/yeadonaye/LiverpoolBackend" class="project-link" title="Voir le code (BackEnd)">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/yeadonaye/LiverpoolAPI-auth" class="project-link" title="Voir le code (API-auth)">
              <i class="fab fa-github"></i>
            </a>
            <!--
            <a href="https://liverpool.alwaysdata.net" class="project-link" title="Voir la démo">
              <i class="fas fa-external-link-alt"></i>
            </a>-->
          </div>
        </div>
        <p class="project-description">
          Ce projet démontre la mise en place d'une architecture logicielle robuste basée sur le modèle MVC. J'ai conçu une API REST pour assurer la communication entre le backend (PHP) et une interface utilisateur réactive (HTML/CSS/JS).
          <ul>
            <li>Backend : Structuration en couches, gestion de base de données MariaDB.</li>
            <li>Frontend : Consommation d'API.</li>
            <li>API & Sécurité : Développement d'une API REST avec authentification par Token pour sécuriser les échanges entre le client (JavaScript) et le serveur.</li>
            <li>Déploiement : Configuration et mise en ligne sur environnement de production (Alwaysdata).</li>
          </ul>
        </p>
        <div class="project-tech">
          <span class="tech-tag">PHP</span>
          <span class="tech-tag">HTML</span>
          <span class="tech-tag">CSS</span>
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">MariaDB</span>
        </div>
      </div>

      <!-- Autres projets... -->

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
  margin-bottom: 16px;
  flex-grow: 1;
}

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

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
