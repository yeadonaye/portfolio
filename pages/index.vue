<template>
  <div>
    <PortfolioSiteHeader
      :links="navItems"
      :active-section="activeSection"
      :is-dark="isDark"
      @navigate="scrollToSection"
      @toggle-theme="toggleTheme"
    />

    <main class="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <section id="hero" class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-8 shadow-soft md:p-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        <div class="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/20" aria-hidden="true" />
        <div class="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/20" aria-hidden="true" />

        <div class="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">Software Engineer Portfolio</p>
            <h1 class="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-slate-50">Je conçois des expériences web rapides, robustes et élégantes.</h1>
            <p class="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
              Je suis SENTAYEHU Yeadonaye, étudiant en informatique à Toulouse. Je construis des applications full-stack,
              des API fiables et des interfaces modernes orientées performance et accessibilité.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <button class="btn-primary" @click="scrollToSection('projects')">Voir mes projets</button>
              <button class="btn-secondary" @click="scrollToSection('contact')">Me contacter</button>
            </div>
          </div>

          <aside class="section-shell animate-float">
            <img src="/photo.jpeg" alt="Photo de profil de SENTAYEHU Yeadonaye" width="144" height="144" class="mx-auto h-36 w-36 rounded-2xl object-cover ring-4 ring-sky-500/30" />
            <h2 class="mt-4 text-center text-xl font-semibold text-slate-900 dark:text-slate-100">SENTAYEHU Yeadonaye</h2>
            <p class="mt-1 text-center text-sm text-slate-600 dark:text-slate-300">Étudiant BUT Informatique · Toulouse, France</p>
            <div class="mt-5 flex flex-wrap justify-center gap-2">
              <span class="chip">Full-Stack</span>
              <span class="chip">Data</span>
              <span class="chip">Backend</span>
            </div>
            <div class="mt-5 grid grid-cols-2 gap-2">
              <a href="https://github.com/yeadonaye" target="_blank" rel="noopener noreferrer" class="btn-secondary !px-3 !py-2 text-center">GitHub</a>
              <a href="https://www.linkedin.com/in/yeadonaye/" target="_blank" rel="noopener noreferrer" class="btn-secondary !px-3 !py-2 text-center">LinkedIn</a>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" class="mt-12 section-shell">
        <PortfolioSectionHeading
          eyebrow="À propos"
          title="Un profil orienté ingénierie logicielle"
          description="Je combine une base académique solide et des projets concrets en web, systèmes et bases de données pour livrer des solutions maintenables et performantes."
        />
        <p class="text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
          Actuellement en 2ème année de BUT Informatique à l'Université de Toulouse, je me spécialise dans
          l'administration, la gestion et l'exploitation des données. J'aime transformer des besoins métier en produits utiles,
          avec une attention particulière à la qualité du code, la structure de l'architecture et l'expérience utilisateur.
        </p>
      </section>

      <section id="projects" class="mt-12">
        <PortfolioSectionHeading
          eyebrow="Projets"
          title="Sélection de réalisations"
          description="Des projets académiques et personnels couvrant le full-stack, les systèmes réseau et l'ingénierie logicielle."
        />
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <PortfolioProjectCard v-for="project in projects" :key="project.title" :project="project" />
        </div>
      </section>

      <section id="skills" class="mt-12">
        <PortfolioSectionHeading
          eyebrow="Compétences"
          title="Stack technique"
          description="Un socle transversal pour développer des produits complets, du backend à l'interface utilisateur."
        />
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <PortfolioSkillGroup v-for="group in skillGroups" :key="group.name" :group="group" />
        </div>
      </section>

      <section id="experience" class="mt-12 section-shell">
        <PortfolioSectionHeading
          eyebrow="Parcours"
          title="Expérience & formation"
          description="Mon parcours académique et professionnel en développement logiciel."
        />
        <ol class="relative space-y-6 border-l border-slate-300/80 pl-4 dark:border-slate-700">
          <PortfolioTimelineItem v-for="item in timeline" :key="item.title + item.period" :item="item" />
        </ol>
      </section>

      <div class="mt-12">
        <PortfolioContactSection />
      </div>
    </main>

    <PortfolioSiteFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const navItems = [
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Parcours' },
  { id: 'contact', label: 'Contact' }
]

const projects = [
  {
    title: 'Gestionnaire de Club de Football',
    category: 'Full-Stack',
    description: "Application complète de gestion d'un club de football avec architecture MVC, API REST sécurisée par token et déploiement en production.",
    tech: ['PHP', 'JavaScript', 'MariaDB', 'API REST', 'MVC'],
    links: [
      { label: 'Frontend', url: 'https://github.com/yeadonaye/LiverpoolFrontend' },
      { label: 'Backend', url: 'https://github.com/yeadonaye/LiverpoolBackend' },
      { label: 'Auth API', url: 'https://github.com/yeadonaye/LiverpoolAPI-auth' }
    ]
  },
  {
    title: 'Proxy FTP en C',
    category: 'Systèmes',
    description: 'Proxy réseau bas niveau en C qui convertit automatiquement le mode FTP actif en mode passif et relaie les flux de manière transparente.',
    tech: ['C', 'Sockets', 'FTP', 'Makefile', 'Git'],
    links: [{ label: 'Repository', url: 'https://github.com/yeadonaye/projetFTP' }]
  },
  {
    title: 'Gestion Immobilière',
    category: 'Application Desktop',
    description: 'Projet Java en équipe avec modélisation des données, contraintes d’intégrité, triggers PL/SQL et interface Swing testée avec JUnit 4.',
    tech: ['Java Swing', 'PL/SQL', 'JUnit 4', 'MCD', 'Git'],
    links: [{ label: 'Repository', url: 'https://github.com/yeadonaye/gestionImmobiliere' }]
  },
  {
    title: 'Vente de Tomates',
    category: 'Projet académique',
    description: 'Application Java Swing réalisée en binôme pour la gestion des ventes avec interface graphique et tests unitaires.',
    tech: ['Java', 'Swing', 'WindowBuilder', 'JUnit 4'],
    links: [{ label: 'Repository', url: 'https://github.com/yeadonaye/ventesDeTomate' }]
  },
  {
    title: 'Mini-Projets Python',
    category: 'Personnel',
    description: 'Suite de mini-projets incluant un Jeu de la Vie interactif, un Snake en Pygame et un Typing Test avec mesures de performance.',
    tech: ['Python', 'Tkinter', 'Pygame', 'Algorithmes'],
    links: [{ label: 'Repository', url: 'https://github.com/yeadonaye/projetsPython' }]
  }
]

const skillGroups = [
  {
    name: 'Langages',
    items: ['Java', 'Python', 'JavaScript', 'PHP', 'SQL', 'PL/SQL', 'Ada']
  },
  {
    name: 'Frameworks & Outils',
    items: ['Nuxt.js', 'Vue.js', 'Flask', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    name: 'Plateformes',
    items: ['Git', 'Docker', 'Oracle SQL Developer', 'VirtualBox', 'MongoDB', 'Eclipse']
  }
]

const timeline = [
  {
    title: 'Stage Développeur',
    period: 'Avril - Juin 2026',
    place: 'IRIT, Toulouse',
    summary: 'Développement d’une application web interne, conception de base de données relationnelle et implémentation d’API REST.'
  },
  {
    title: 'BUT Informatique',
    period: '2024 - Présent',
    place: 'Université de Toulouse · IUT Paul Sabatier',
    summary: 'Parcours Administration, Gestion et Exploitation des Données avec projets full-stack, réseau et data.'
  },
  {
    title: 'Baccalauréat Général',
    period: '2024',
    place: 'Lycée Guebre Mariam',
    summary: 'Spécialités Mathématiques, NSI, Physique-Chimie avec option Maths Expertes.'
  }
]

const activeSection = ref('hero')
const isDark = ref(false)
let observer: IntersectionObserver | null = null

const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = savedTheme ? savedTheme === 'dark' : systemPrefersDark
  document.documentElement.classList.toggle('dark', isDark.value)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible?.target.id) {
        activeSection.value = visible.target.id
      }
    },
    { threshold: 0.35 }
  )

  navItems.forEach((item) => {
    const section = document.getElementById(item.id)
    if (section) observer?.observe(section)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
