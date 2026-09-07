<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <button class="text-left" @click="$emit('navigate', 'hero')">
        <p class="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Portfolio</p>
        <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">SENTAYEHU Yeadonaye</p>
      </button>

      <nav class="hidden gap-1 md:flex" aria-label="Navigation principale">
        <button
          v-for="item in links"
          :key="item.id"
          type="button"
          class="rounded-lg px-3 py-2 text-sm font-medium transition"
          :class="activeSection === item.id
            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
            : 'text-slate-600 hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-800'"
          @click="$emit('navigate', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <button
        type="button"
        class="btn-secondary !px-3 !py-2"
        :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
        @click="$emit('toggle-theme')"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
interface LinkItem {
  id: string
  label: string
}

defineProps<{
  links: LinkItem[]
  activeSection: string
  isDark: boolean
}>()

defineEmits<{
  (e: 'navigate', id: string): void
  (e: 'toggle-theme'): void
}>()
</script>
