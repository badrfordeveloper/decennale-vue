<template>
  <div class="container">
    <!-- Logo -->
    <img src="../assets/logo.png" width="350" class="logo" alt="DECENNALE EXPRESS" />
    
    <!-- Titre principal -->
    <h1 class="title">Merci pour votre confiance !</h1>
    
    <!-- Message principal -->
    <p class="subtitle">
      Félicitations, votre demande de devis pour une assurance décennale a bien été enregistrée.<br>
      Nous sommes ravis de vous accompagner dans la protection de vos projets et de vos réalisations.
    </p>
    
    <!-- Prochaines étapes -->
    <div class="info-box">
      <h2 class="info-title">Que se passe-t-il maintenant ?</h2>
      <ul class="info-list">
        <li>Nos experts analyseront votre demande pour vous proposer l'offre la plus adaptée à vos besoins.</li>
        <li>Vous recevrez un e-mail détaillé contenant votre devis personnalisé sous 24 à 48 heures.</li>
      </ul>
    </div>
    
    <!-- Actions -->
    <div class="actions">
      <a href="/" class="action-button">Retourner à l'accueil</a>
    </div>
    
    <!-- Section Contact -->
    <div class="contact">
      <h3 class="contact-title">Besoin d’aide ou de renseignements supplémentaires ?</h3>
      <p>
        Notre service client est disponible pour répondre à toutes vos questions.<br>
        Appelez-nous au <span class="highlight"><a href="tel:0972880101">09 72 88 01 01</a></span><br>
        ou envoyez-nous un e-mail à <span class="highlight"><a href="mailto:contact@decennale-express.fr">contact@decennale-express.fr</a></span>.
      </p>
    </div>
    
  </div>
</template>

<script setup>
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7fafc; /* gray-100 */
  color: #2d3748; /* gray-800 */
}

.logo {
  margin: 1.25rem; /* m-5 */
}

.title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #000; /* Use your specific color here for colorText */
  margin-bottom: 1rem; /* mb-4 */
}

.subtitle {
  font-size: 1.125rem; /* text-lg */
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center; /* text-center */
}

.info-box {
  background-color: #fff; /* bg-white */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* shadow-md */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 1.5rem; /* p-6 */
}

.info-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 600; /* font-semibold */
  color: #4a5568; /* text-gray-700 */
  margin-bottom: 1rem; /* mb-4 */
}

.info-list {
  list-style-type: disc; /* list-disc */
  padding-left: 1rem; /* list-inside */
  gap: 0.5rem; /* space-y-2 */
  color: #718096; /* text-gray-600 */
}

.actions {
  display: flex;
  gap: 1rem; /* space-x-4 */
  margin-top: 1.5rem; /* mt-6 */
}

.action-button {
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  background-color: #e2e8f0; /* bg-gray-300 */
  color: #4a5568; /* text-gray-700 */
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* shadow */
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

.action-button:hover {
  background-color: #cbd5e0; /* bg-gray-400 */
}

.contact {
  margin-top: 2rem; /* mt-8 */
  text-align: center;
  font-size: 0.875rem; /* text-sm */
  color: #a0aec0; /* text-gray-500 */
}

.contact-title {
  color: #4a5568; /* text-gray-700 */
  font-weight: 500; /* font-medium */
}

.highlight {
  font-weight: 600; /* font-semibold */
}

.footer {
  margin-top: 2.5rem; /* mt-10 */
  text-align: center;
  font-size: 0.75rem; /* text-xs */
  color: #cbd5e0; /* text-gray-400 */
}

</style>