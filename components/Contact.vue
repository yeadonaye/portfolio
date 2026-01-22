<template>
  <div class="contact-container">
    <h2 class="section-title">Contactez-moi</h2>
    
    <div class="contact-content">
      <form class="contact-form" @submit.prevent="handleSubmit">
        
        <div class="cv-download-section">
          <p class="cv-text">Besoin de mon curriculum vitae ?</p>
          <a 
            href="/ressources/mon-cv.pdf" 
            download="CV_Yeadonaye_Ashenafi.pdf" 
            class="download-btn"
          >
            <i class="fas fa-file-download"></i> Télécharger mon CV (PDF)
          </a>
        </div>

        <div class="separator-container">
          <hr class="separator">
          <span>OU ENVOYEZ UN MESSAGE</span>
        </div>

        <div class="form-group">
          <label for="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required 
            class="form-control"
            placeholder="Votre nom"
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required 
            class="form-control"
            placeholder="votre.email@example.com"
          >
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            rows="5" 
            required 
            class="form-control"
            placeholder="Votre message..."
          ></textarea>
        </div>
        
        <div class="recaptcha-container">
          <div ref="recaptchaElement" class="g-recaptcha" :data-sitekey="recaptchaSiteKey" data-callback="onRecaptchaSuccess" data-expired-callback="onRecaptchaExpired"></div>
        </div>

        <button type="submit" class="submit-btn" :disabled="isLoading || !isRecaptchaVerified">
          <span v-if="!isLoading">Envoyer le message</span>
          <span v-else>Envoi en cours...</span>
        </button>
        
        <div v-if="isSuccess" class="success-message">
          <i class="fas fa-check-circle"></i> Votre message a été envoyé avec succès!
        </div>
        
        <div v-if="errorMessage" class="error-message">
          <i class="fas fa-exclamation-circle"></i> {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const recaptchaSiteKey = '6Ld5bCEsAAAAANpNOgMjH2xP17dtvSdazkoLamVU'; 
const isRecaptchaVerified = ref(false);
const recaptchaElement = ref(null);

// Fonctions globales pour reCAPTCHA
window.onRecaptchaSuccess = (response) => {
  isRecaptchaVerified.value = true;
};

window.onRecaptchaExpired = () => {
  isRecaptchaVerified.value = false;
};

// Charger reCAPTCHA
const loadRecaptcha = () => {
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
  script.async = true;
  script.defer = true;
  
  window.onRecaptchaLoad = () => {
    if (window.grecaptcha) {
      window.grecaptcha.render(recaptchaElement.value, {
        sitekey: recaptchaSiteKey,
        callback: window.onRecaptchaSuccess,
        'expired-callback': window.onRecaptchaExpired
      });
    }
  };
  
  document.head.appendChild(script);
};

onMounted(() => {
  loadRecaptcha();
});

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

const handleSubmit = async () => {
  if (isLoading.value) return;
  
  try {
    isLoading.value = true;
    errorMessage.value = '';
    
    const serviceID = 'service_portfolio';
    const templateID = 'template_portfolio';
    const publicKey = '3XHADdIkc7HguoUkL';
    
    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message,
        to_email: 'yeadonayeashenafi@gmail.com'
      },
      publicKey
    );
    
    isSuccess.value = true;
    formData.value = { name: '', email: '', message: '' };
    
    setTimeout(() => {
      isSuccess.value = false;
    }, 5000);
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error);
    errorMessage.value = 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  padding: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--github-text-primary);
  text-align: center;
}

.contact-content {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--github-bg-secondary);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
}

/* Styles pour la section CV */
.cv-download-section {
  text-align: center;
  padding: 1.5rem;
  background-color: var(--github-bg);
  border: 1px solid var(--github-border);
  border-radius: 6px;
  margin-bottom: 0.5rem;
}

.cv-text {
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--github-text-primary);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2ea44f;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.download-btn:hover {
  background-color: #2c974b;
}

/* Séparateur */
.separator-container {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  color: var(--github-text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
}

.separator-container::before, .separator-container::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--github-border);
}

.separator-container span {
  padding: 0 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--github-text-primary);
}

.form-control {
  padding: 0.75rem 1rem;
  border: 1px solid var(--github-border);
  border-radius: 6px;
  background-color: var(--github-bg);
  color: var(--github-text-primary);
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: var(--github-accent);
  box-shadow: 0 0 0 3px rgba(46, 164, 79, 0.2);
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.recaptcha-container {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.submit-btn {
  background-color: #2ea44f;
  color: white;
  border: 1px solid rgba(27, 31, 35, 0.15);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
}

.submit-btn:disabled {
  background-color: #94d3a2;
  cursor: not-allowed;
}

.success-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
}

.error-message {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style>