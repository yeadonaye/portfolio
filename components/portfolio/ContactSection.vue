<template>
  <section id="contact" class="section-shell">
    <PortfolioSectionHeading
      eyebrow="Contact"
      title="Discutons de votre prochain projet"
      description="Je suis ouvert aux stages, alternances et collaborations freelance en développement full-stack, data et backend."
    />

    <div class="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div class="space-y-4">
        <a href="mailto:yeadonayeashenafi@gmail.com" class="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900/80">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</p>
          <p class="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">yeadonayeashenafi@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/yeadonaye/" target="_blank" rel="noopener noreferrer" class="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900/80">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">LinkedIn</p>
          <p class="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">linkedin.com/in/yeadonaye</p>
        </a>
        <a href="https://github.com/yeadonaye" target="_blank" rel="noopener noreferrer" class="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900/80">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">GitHub</p>
          <p class="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">github.com/yeadonaye</p>
        </a>
      </div>

      <form class="space-y-4" @submit.prevent="submitForm">
        <div>
          <label for="name" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Nom</label>
          <input id="name" v-model="formData.name" required type="text" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
        </div>

        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
          <input id="email" v-model="formData.email" required type="email" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
        </div>

        <div>
          <label for="message" class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
          <textarea id="message" v-model="formData.message" required rows="5" class="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
        </div>

        <button type="submit" class="btn-primary w-full" :disabled="isLoading">
          {{ isLoading ? 'Envoi en cours...' : 'Envoyer le message' }}
        </button>

        <p v-if="isSuccess" class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
          Votre message a été envoyé avec succès.
        </p>
        <p v-if="errorMessage" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-300">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  if (isLoading.value) {
    return
  }

  isLoading.value = true
  isSuccess.value = false
  errorMessage.value = ''

  try {
    await emailjs.send(
      'service_portfolio',
      'template_portfolio',
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
        to_email: 'yeadonayeashenafi@gmail.com'
      },
      '3XHADdIkc7HguoUkL'
    )

    formData.value = { name: '', email: '', message: '' }
    isSuccess.value = true
  } catch {
    errorMessage.value = 'Une erreur est survenue lors de l\'envoi du message.'
  } finally {
    isLoading.value = false
  }
}
</script>
