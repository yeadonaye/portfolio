<template>
  <footer class="mt-20 border-t border-slate-200/70 py-8 dark:border-slate-800">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:px-6 md:flex-row lg:px-8 dark:text-slate-400">
      <p>© {{ year }} SENTAYEHU Yeadonaye</p>
      <p>Construite avec Nuxt 3 + Tailwind CSS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
