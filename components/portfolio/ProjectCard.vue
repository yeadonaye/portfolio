<template>
  <article class="group section-shell flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-sky-400/50">
    <div class="mb-4 flex items-start justify-between gap-4">
      <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ project.title }}</h3>
      <span class="chip">{{ project.category }}</span>
    </div>

    <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ project.description }}</p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span v-for="tech in project.tech" :key="tech" class="chip">{{ tech }}</span>
    </div>

    <div class="mt-6 flex flex-wrap gap-2">
      <a
        v-for="link in project.links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary !px-4 !py-2 text-xs"
      >
        {{ link.label }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
interface ProjectLink {
  label: string
  url: string
}

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  links: ProjectLink[]
}

defineProps<{
  project: Project
}>()
</script>
