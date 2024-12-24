<template>
  <form @submit.prevent="submitStep">
      <div class="row g-3 g-md-4">

          <div class="col-12 mt-0">
              <div class="container-fluid p-0">
                  <div class="row align-items-center">
                      <div class="col-12">
                          <button type="submit"
                              class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">Étape suivante <img
                                  src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
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
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core';
import { required ,requiredIf} from '@vuelidate/validators';
const formStore = useFormStore();
const step2Data = formStore.getFormData;

const formData = reactive({})

function submitStep() {
  formStore.updateStepData('step2', formData);
  formStore.nextStep();

}



</script>
<style scoped>
</style>