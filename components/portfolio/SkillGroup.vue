<template>
  <article class="section-shell">
    <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">{{ group.name }}</h3>
    <ul class="mt-4 flex flex-wrap gap-2">
      <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
interface SkillGroup {
  name: string
  items: string[]
}

defineProps<{
  group: SkillGroup
}>()
</script>
