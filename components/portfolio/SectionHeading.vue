<template>
  <div class="mb-8 md:mb-10">
    <p v-if="eyebrow" class="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-400">
      {{ eyebrow }}
    </p>
    <h2 class="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-100">{{ title }}</h2>
    <p v-if="description" class="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>
