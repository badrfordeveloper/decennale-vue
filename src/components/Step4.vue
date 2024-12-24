<template>
  <form @submit.prevent="submitStep">
    <div class="row g-3 g-md-4">

      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Donnez vous des chantiers en sous traitance à plus de
          30%</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="resilie_par_assureur3ans"
                  id="resnon" value="NON" v-model="formData.chantiers_sous_traitance">
                <label class="btn btn-outline-primary iconLabel" for="resnon">
             
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="resilie_par_assureur3ans"
                  id="resoui" value="OUI" v-model="formData.chantiers_sous_traitance">
                <label class="btn btn-outline-primary iconLabel" for="resoui">
                
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>

        <ErrorComponent v-if="$v.chantiers_sous_traitance.$error" :errors="$v.chantiers_sous_traitance.$errors" />

      </div>

      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Souhaitez vous la reprise du passé sur 1 an (+15%)</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="reprise_un_annee"
                  id="reprise_un_annee_non" value="NON" v-model="formData.reprise_un_annee">
                <label class="btn btn-outline-primary iconLabel" for="reprise_un_annee_non">
                
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="reprise_un_annee"
                  id="reprise_un_annee_oui" value="OUI" v-model="formData.reprise_un_annee">
                <label class="btn btn-outline-primary iconLabel" for="reprise_un_annee_oui">
             
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>
        <ErrorComponent v-if="$v.reprise_un_annee.$error" :errors="$v.reprise_un_annee.$errors" />

      </div>

      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Etes-vous en redressement judiciaire</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="redressement_judiciaire"
                  id="redressement_judiciaire_non" value="NON" v-model="formData.redressement_judiciaire">
                <label class="btn btn-outline-primary iconLabel" for="redressement_judiciaire_non">
             
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="redressement_judiciaire"
                  id="redressement_judiciaire_oui" value="OUI" v-model="formData.redressement_judiciaire">
                <label class="btn btn-outline-primary iconLabel" for="redressement_judiciaire_oui">
                 
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>
        <ErrorComponent v-if="$v.redressement_judiciaire.$error" :errors="$v.redressement_judiciaire.$errors" />

      </div>

      <div class="col-12">
        <label class="formLabel mb-3" for="resiliation">Avez-vous des diplomes du batiment</label>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="diplomes_batiment"
                  id="diplomes_batiment_non" value="NON" v-model="formData.diplomes_batiment">
                <label class="btn btn-outline-primary iconLabel" for="diplomes_batiment_non">
               
                  <div class="twoBtns">Non</div>
                </label>
              </div>
            </div>
            <div class="col-6">
              <div class="btn-group formIconContainer miniClass" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check resilie_par_assureur3ans" name="diplomes_batiment"
                  id="diplomes_batiment_oui" value="OUI" v-model="formData.diplomes_batiment">
                <label class="btn btn-outline-primary iconLabel" for="diplomes_batiment_oui">
           
                  <div class="twoBtns">Oui</div>
                </label>
              </div>
            </div>
          </div>

        </div>
        <ErrorComponent v-if="$v.diplomes_batiment.$error" :errors="$v.diplomes_batiment.$errors" />

      </div>
      
      
      <div class="col-12 mt-0">
        <div class="container-fluid p-0">
          <div class="row align-items-center">
            <div class="col-12">
            
              <button type="submit" class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">Étape suivante
                <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
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
import { ref, reactive, computed } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

import { VueSpinner } from 'vue3-spinners';
import { toast } from 'vue3-toastify';

import axios from 'axios';

const formStore = useFormStore();
const step4Data = formStore.getFormData;
const formData = reactive({
  chantiers_sous_traitance: step4Data.step4.chantiers_sous_traitance,
  reprise_un_annee: step4Data.step4.reprise_un_annee,
  redressement_judiciaire: step4Data.step4.redressement_judiciaire,
  diplomes_batiment: step4Data.step4.diplomes_batiment,
})
const rules = {
    chantiers_sous_traitance: { required },
    reprise_un_annee: { required },
    redressement_judiciaire:{ required },
    diplomes_batiment: { required },
};

const $v = useVuelidate(rules, formData);

async function submitStep() {
  $v.value.$touch(); // Mark all fields as touched
    if (!$v.value.$invalid) {
      formStore.updateStepData('step4', formData);
      formStore.nextStep();
    }
}

</script>
