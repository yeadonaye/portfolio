<template>
  <li class="relative pl-8">
    <span class="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_0_6px_rgba(14,165,233,0.18)]" aria-hidden="true" />
    <article class="section-shell">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h3 class="text-base font-semibold text-slate-900 md:text-lg dark:text-slate-100">{{ item.title }}</h3>
        <span class="chip">{{ item.period }}</span>
      </div>
      <p class="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{{ item.place }}</p>
      <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ item.summary }}</p>
    </article>
  </li>
</template>

<script setup lang="ts">
interface TimelineItem {
  title: string
  period: string
  place: string
  summary: string
}

defineProps<{
  item: TimelineItem
}>()
</script>
