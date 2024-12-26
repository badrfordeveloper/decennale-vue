<template>
  <form @submit.prevent="submitStep">
    <h3>
      {{ selectedActivities.length > 0 ? "Exercez-vous d'autres activités ?" : "Quelle est votre activité principale ?"}}
    </h3>

    <input v-model="searchTerm" @input="filterActivities"
      :placeholder="selectedActivities.length > 0 ? 'Ajouter une autre activité' : 'Exemple : Maçon...'"
      class="activity-input" v-show="selectedActivities.length < 5" aria-label="Rechercher une activité" />

    <ul v-if="filteredActivities.length" class="activity-dropdown">
      <li v-for="activity in filteredActivities" :key="activity.name"
        @click="!isActivitySelected(activity) && selectActivity(activity)" class="activity-item"
        :class="{ disabled: isActivitySelected(activity) }">
        {{ activity.name }}
      </li>
    </ul>

    <h6 style="margin-top: 20px;" v-if="selectedActivities.length">Vos activités (5 maximum)</h6>

    <ul class="selected-activities">
      <li v-for="activity in selectedActivities" :key="activity.name" class="selected-activity">
        <div class="activity-details">
          <span>{{ activity.name }}</span>
          <div class="d-flex gap-2 activity-buttons">
            <button type="button" class="details-button" @click="openModal(activity)"
              aria-label="Voir les détails de l'activité">
              Plus de détails
            </button>
            <button type="button" class="close-icon" @click="removeActivity(activity)"
              aria-label="Supprimer cette activité">
              ✖
            </button>
          </div>
        </div>
      </li>
    </ul>

    <div v-if="selectedActivities.length">
      <div class="css-y62p23 e1bayppm0">
        <div class="css-70qvj9">
          <div class="css-t1zs2o">
            <div class="css-1tmuokj">
              <div class="css-sua9d4"><img src="../assets/icons/bola.png" alt="" class="css-3ps8c1">
              </div>
            </div>
          </div>
          <div class="css-ufw65v">
            <p class="css-6x79tc">Bon à savoir</p>
          </div>
        </div>
        <div class="css-1gt2dqj">
          <div class="css-1hw29i9">
            <div class="css-6slv8k">
              <p class="css-8swbkq">Votre expérience devra être justifiée : fiches de paie, factures, certificats de travail, etc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button v-if="selectedActivities.length" type="submit"
      class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">
      Étape suivante
      <img src="../assets/icons/arrow-next.svg" alt="Suivant" class="ms-3 img-fluid">
    </button>
  </form>

  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="d-flex justify-content-between">
        <h3>{{ selectedActivityDetails?.name }}</h3>
        <div @click="closeModal">
          <img src="../assets/icons/xmark.svg" alt="xmark" class="xmark">
        </div>
      </div>
      <p>{{ selectedActivityDetails?.description }}</p>

      <div v-if="selectedActivityDetails?.includedGaranties" class="garanties-inclues">
        <h5>Les prestations principales</h5>
        <h6>Les principaux cas</h6>
        <ul>
          <li v-for="item in selectedActivityDetails.includedGaranties" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="selectedActivityDetails?.secondaryGaranties" class="garanties-inclues">
        <h5>Garanties Secondaires</h5>
        <h6>Les principaux cas</h6>
        <ul>
          <li v-for="item in selectedActivityDetails.secondaryGaranties" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

      <div v-if="selectedActivityDetails?.excludedGaranties" class="garanties-exclues">
        <h5>Garanties Exclues</h5>
        <h6>Les principaux cas</h6>
        <ul>
          <li v-for="item in selectedActivityDetails.excludedGaranties" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import allActivities from "@/assets/activities.json";
import { useFormStore } from "@/stores/useFormStore";

const searchTerm = ref("");
const activities = ref(allActivities);
const filteredActivities = ref([]);
const selectedActivities = ref([]);
const showModal = ref(false);
const selectedActivityDetails = ref(null);
const formStore = useFormStore();

const selectedActivityNames = computed(() =>
  selectedActivities.value.map(activity => activity.name)
);

onMounted(() => {
  initializeSelectedActivities();
  showInitialActivities();
});

function showInitialActivities() {
  if (selectedActivities.value.length === 0) {
    filteredActivities.value = activities.value.slice(0, 5);
  }
}

function initializeSelectedActivities() {
  const storedActivities = formStore.formData.step5;
  if (!Array.isArray(storedActivities) || storedActivities.length === 0) {
    showInitialActivities();
    return;
  }
  selectedActivities.value = storedActivities
    .map(name => activities.value.find(activity => activity.name === name))
    .filter(Boolean);
}

function filterActivities() {
  const term = searchTerm.value.trim().toLowerCase();

  if (term === "") {
    filteredActivities.value = selectedActivities.value.length === 0 
      ? activities.value.slice(0, 5) 
      : [];
    return;
  }

  filteredActivities.value = activities.value.filter(
    activity =>
      activity.name.toLowerCase().includes(term) &&
      !isActivitySelected(activity)
  );
}

function isActivitySelected(activity) {
  return selectedActivities.value.some(
    selected => selected.name === activity.name
  );
}

function selectActivity(activity) {
  if (!isActivitySelected(activity) && selectedActivities.value.length < 5) {
    selectedActivities.value.push(activity);
    searchTerm.value = "";
    filteredActivities.value = [];
  }
}

function removeActivity(activity) {
  selectedActivities.value = selectedActivities.value.filter(
    a => a.name !== activity.name
  );

  if (selectedActivities.value.length === 0) {
    showInitialActivities();
  }
}

function openModal(activity) {
  selectedActivityDetails.value = activity;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedActivityDetails.value = null;
}

async function submitStep() {
  formStore.updateStepData("step5", selectedActivityNames.value);
  formStore.nextStep();
}
</script>

<style scoped>
.label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.results {
  margin-top: 10px;
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  overflow: hidden;
}

.result-item {
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.result-item:hover {
  background-color: #f0f0f0;
}

.details {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.details-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.details-description {
  margin-bottom: 15px;
  color: #555;
}

.details-garanties h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.details-garanties ul {
  list-style: disc;
  margin-left: 20px;
}

.activity-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.activity-dropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}

.activity-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
}

.activity-item:hover {
  background-color: #f5f5f5;
}

.selected-activities {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.selected-activity {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px 16px;
  background-color: var(--color-bg-base-normal);
}
@media (max-width: 768px) {
    .activity-details {
      display: flex ;
      flex-direction: column;
    }
    .activity-buttons{
      margin-top: 8px;
    }
}
.activity-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details-button {
  padding: 5px 10px;
  font-size: 14px;
  color: #f97316;
  background-color: transparent;
  border: 1px solid #f97316;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
}

.details-button:hover {
  background-color: #f97316;
  color: #fff;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  margin-top: 0;
}

.modal-close:hover {
  background: #0056b3;
}
.xmark{
  height: 24px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}
.garanties-inclues{
  border: 1px solid #d9d8e1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  background-color: #fafaff;
  margin-top: 32px;
}
.garanties-exclues{
  border: 1px solid #d9d8e1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  background-color: #ffeff0;
  margin-top: 32px;
}
.css-y62p23 {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 8px;
    margin-top: 32px;
    background-color: #f9d9c3;
    color: #070042;
}
.css-70qvj9 {
    display: flex
;
    -webkit-box-align: center;
    align-items: center;
}
.css-1gt2dqj {
    margin-left: 0px;
}
.css-t1zs2o {
    flex-shrink: 0;
    margin-right: 12px;
}
.css-1tmuokj {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: flex
;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}
.css-sua9d4 {
    display: flex
;
    width: 100%;
    height: 100%;
    
}
.css-6x79tc {
    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
    overflow-wrap: break-word;
    hyphens: auto;
}
.css-ufw65v {
    min-width: 0px;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.css-1gt2dqj {
    margin-left: 0px;
}
.css-1hw29i9 {
    margin-top: 12px;
}
.css-6slv8k {
    overflow-wrap: break-word;
    hyphens: auto;
}
.css-8swbkq {
    font-size: 14px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
}
</style>
