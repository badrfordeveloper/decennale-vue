<template>
  <form @submit.prevent="submitStep">
    <div class="row">
      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Avez-vous déjà été assuré</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="deja_assure" id="deja_assure_non"
                  value="NON" v-model="formData.deja_assure">
                <label class="btn btn-outline-primary iconLabel" for="deja_assure_non">
                
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="deja_assure" id="deja_assure_oui"
                  value="OUI" v-model="formData.deja_assure">
                <label class="btn btn-outline-primary iconLabel" for="deja_assure_oui">
                 
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>

        <ErrorComponent v-if="$v.deja_assure.$error" :errors="$v.deja_assure.$errors" />

      </div>
    </div>
    <div class="row mt-3 p-2" v-if="formData.deja_assure == 'OUI'">
      <div class="col-12 ">
        <label class="formLabel mb-2"> Nombre d'années d'assurance
        </label>
        <input type="number" v-model="formData.assureur.annee" class="form-control">
        <ErrorComponent v-if="$v.assureur.annee.$error" :errors="$v.assureur.annee.$errors" />

      </div>

      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Votre contrat est-il en cours</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="en_cours" id="en_cours_non"
                  value="NON" v-model="formData.assureur.en_cours">
                <label class="btn btn-outline-primary iconLabel" for="en_cours_non">
                 
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="en_cours" id="en_cours_oui"
                  value="OUI" v-model="formData.assureur.en_cours">
                <label class="btn btn-outline-primary iconLabel" for="en_cours_oui">
                 
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>
        <ErrorComponent v-if="$v.assureur.en_cours.$error" :errors="$v.assureur.en_cours.$errors" />

      </div>
      <div class="col-12 col-md-6">
        <label class="formLabel mb-2"> Date de résiliation de votre dernier contrat
        </label>
        <input type="date" v-model="formData.assureur.date_resiliation" class="form-control">
        <ErrorComponent v-if="$v.assureur.date_resiliation.$error" :errors="$v.assureur.date_resiliation.$errors" />

      </div>

      <div class="col-12 col-md-6 ">
        <label class="formLabel mb-2"> Nom de l'ancienne compagnie
        </label>
        <input type="text" v-model="formData.assureur.nom" class="form-control">
        <ErrorComponent v-if="$v.assureur.nom.$error" :errors="$v.assureur.nom.$errors" />

      </div>
      <div class="col-12 col-md-6 ">
        <label class="formLabel mb-2"> Nombre de sinistres déclarés sur 36 mois
        </label>
        <input type="number" v-model="formData.assureur.nombre_sinistre" class="form-control">
        <ErrorComponent v-if="$v.assureur.nombre_sinistre.$error" :errors="$v.assureur.nombre_sinistre.$errors" />

      </div>
      <div class="col-12 col-md-6">
        <label class="formLabel mb-2"> Montant des sinistres déclarés sur 36 mois
        </label>
        <input type="number" v-model="formData.assureur.montant_sinistre" class="form-control">
        <ErrorComponent v-if="$v.assureur.montant_sinistre.$error" :errors="$v.assureur.montant_sinistre.$errors" />

      </div>
      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Votre ancien contrat a-t'il-été résilié pour
          non-paiement</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="non_paiement" id="non_paiement_non"
                  value="NON" v-model="formData.assureur.non_paiement">
                <label class="btn btn-outline-primary iconLabel" for="non_paiement_non">
      
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="non_paiement" id="non_paiement_oui"
                  value="OUI" v-model="formData.assureur.non_paiement">
                <label class="btn btn-outline-primary iconLabel" for="non_paiement_oui">
                 
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
            <ErrorComponent v-if="$v.assureur.non_paiement.$error" :errors="$v.assureur.non_paiement.$errors" />

          </div>
          <div class="col-12">
            <label class="formLabel mb-3" for="resiliation">Si oui, avez-vous réglé l’arriéré à la compagnie</label>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-6">
                  <div class="btn-group formIconContainer miniClass" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check resilie_par_assureur3ans" name="arriere" id="arriere_non"
                      value="NON" v-model="formData.assureur.arriere">
                    <label class="btn btn-outline-primary iconLabel" for="arriere_non">
                   
                      <div class="twoBtns">Non</div>
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="btn-group formIconContainer miniClass" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check resilie_par_assureur3ans" name="arriere" id="arriere_oui"
                      value="OUI" v-model="formData.assureur.arriere">
                    <label class="btn btn-outline-primary iconLabel" for="arriere_oui">
                    
                      <div class="twoBtns">Oui</div>
                    </label>
                  </div>
                </div>
                <ErrorComponent v-if="$v.assureur.arriere.$error" :errors="$v.assureur.arriere.$errors" />

              </div>

            </div>
          </div>

          <div class="col-12">
            <label class="formLabel mb-3" for="resiliation">Votre ancien contrat a-t'il-été résilié pour fausse
              déclaration</label>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-6">
                  <div class="btn-group formIconContainer miniClass" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check resilie_par_assureur3ans" name="fausse_declaration"
                      id="fausse_declaration_non" value="NON" v-model="formData.assureur.fausse_declaration">
                    <label class="btn btn-outline-primary iconLabel" for="fausse_declaration_non">
                    
                      <div class="twoBtns">Non</div>
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="btn-group formIconContainer miniClass" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check resilie_par_assureur3ans" name="fausse_declaration"
                      id="fausse_declaration_oui" value="OUI" v-model="formData.assureur.fausse_declaration">
                    <label class="btn btn-outline-primary iconLabel" for="fausse_declaration_oui">
                    
                      <div class="twoBtns">Oui</div>
                    </label>
                  </div>
                </div>
                <ErrorComponent v-if="$v.assureur.fausse_declaration.$error"
                  :errors="$v.assureur.fausse_declaration.$errors" />

              </div>

            </div>
          </div>
        </div>
      </div>

 
    </div>
    <div class="row">
      <div class="col-12 mt-0">
        <div class="container-fluid p-0">
          <div class="row align-items-center">
            <div class="col-12">
              <button type="submit" class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">Étape
                suivante <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
            </div>
            <div class="col-12 text-center">
              <!-- <a class="backLink" onclick="goBack()"><img src="../assets/icons/back-arrow.svg" alt="back" class="img-fluid me-3"> Retour</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import BonASavoir from './BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { required, requiredIf } from '@vuelidate/validators';
const formStore = useFormStore();
const step3Data = formStore.getFormData;

const formData = reactive({
  deja_assure: step3Data.step3.deja_assure || "NON",
  assureur: {
    annee: step3Data.step3.assureur.annee || "",
    en_cours: step3Data.step3.assureur.en_cours || "",
    date_resiliation: step3Data.step3.assureur.date_resiliation || "",
    nom: step3Data.step3.assureur.nom || "",
    nombre_sinistre: step3Data.step3.assureur.nombre_sinistre || "",
    montant_sinistre: step3Data.step3.assureur.montant_sinistre || "",
    non_paiement: step3Data.step3.assureur.non_paiement || "",
    arriere: step3Data.step3.assureur.arriere || "",
    fausse_declaration: step3Data.step3.assureur.fausse_declaration || ""
  }
})

const rules = {
  deja_assure: { required },
  assureur: {
    annee: { requiredIf: requiredIf(isDejaAssure) },
    en_cours: { requiredIf: requiredIf(isDejaAssure) },
    date_resiliation: { requiredIf: requiredIf(isDejaAssure) },
    nom: { requiredIf: requiredIf(isDejaAssure) },
    nombre_sinistre: { requiredIf: requiredIf(isDejaAssure) },
    montant_sinistre: { requiredIf: requiredIf(isDejaAssure) },
    non_paiement: { requiredIf: requiredIf(isDejaAssure) },
    arriere: { requiredIf: requiredIf(isDejaAssure) },
    fausse_declaration: { requiredIf: requiredIf(isDejaAssure) },
  }

};

const $v = useVuelidate(rules, formData);

function isDejaAssure() {
  return formData.deja_assure == "OUI"
}

function submitStep() {
  $v.value.$touch(); // Mark all fields as touched
  if (!$v.value.$invalid) {
    formStore.updateStepData('step3', formData);
    formStore.nextStep();
  }

}



</script>
<style scoped>
.villeSearchResult,
.containerResult,
.adressesResult {
  height: 0px;
  position: relative;
  z-index: 2;
}

#villesCp,
.racesList,
#adresses,
#stationCp {
  max-height: 176px;
  overflow-y: auto;
  background-color: rgb(255, 255, 255);
  list-style: none;
  padding: 0px 0px;
  border-radius: 4px;
  width: 100%;
  border: 1px solid rgb(165, 165, 165);
  margin-top: 8px;
}

ul#villesCp li,
ul#stationCp li,
#adresses li {
  font-size: 16px;
  padding: 5px 15px;
  color: #303030;
  cursor: pointer;
}

ul#villesCp li:hover,
ul#stationCp li:hover,
#adresses li:hover {
  color: var(--color1);
  transition: 0.3s;
  background-color: var(--color3);
  border-radius: 0;
}
</style>