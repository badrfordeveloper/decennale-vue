<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12">
                <h2 class="stepTitle mb-3">On y est presque !</h2>
                <p class="stepDescription mb-3 mb-md-0">
                </p>
            </div>

            <div class="col-12">
                <label class="formLabel mb-2">Date d'effet</label>
                <input type="date" name="date_effet" class="form-control" v-model="formData.date_effet" />
                <ErrorComponent v-if="$v.date_effet.$error" :errors="$v.date_effet.$errors" />
            </div>

            <div class="col-12">
                <div class="d-flex flex-md-row flex-column align-items-md-center">
                    <label class="formLabel mb-4 text-start" for="franchise">Franchise</label>
                    <div id="form-wrapper">
                        <div id="form">
                            <div id="franchise-slider" :class="{'franchise-false': isFranchise1}">
                                <template v-if="isFranchise1">
                              
                                  <div class="group-input-franchise">
                                    <input type="radio" name="franchise" id="franchise4" value="500 € à 1500 €"
                                        v-model="formData.franchise" />
                                    <label for="franchise4" data-franchise="500 € à 1500 €"></label> 
                                  </div>
                                  <div class="group-input-franchise">
                                    <input type="radio" name="franchise" id="franchise5" value="2000 € à 3000 €"
                                        v-model="formData.franchise" />
                                    <label for="franchise5" data-franchise="2000 € à 3000 €"></label>
                                  </div>
                                </template>
                                <template v-else>
                                    <input type="radio" name="franchise" id="franchise1" value="1500 €"
                                        v-model="formData.franchise" />
                                    <label for="franchise1" data-franchise="1500 €"></label>
    
                                    <input type="radio" name="franchise" id="franchise2" value="2000 € (-3%)"
                                        v-model="formData.franchise" />
                                    <label for="franchise2" data-franchise="2000 € (-3%)"></label>
    
                                    <input type="radio" name="franchise" id="franchise3" value="3000 € (-5%)"
                                        v-model="formData.franchise" />
                                    <label for="franchise3" data-franchise="3000 € (-5%)"></label>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <ErrorComponent v-if="$v.franchise.$error" :errors="$v.franchise.$errors" />
            </div>
        </div>

        <div class="col-12 row">
            <label for="fractionnement" class="formLabel mb-3">Fractionnement</label>
            <div v-for="option in fractionnementOptions" :key="option.id"
                :class="option.columnClass">
                <div class="btn-group formIconContainer h-100" role="group"
                    aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check fractionnement" :id="option.id" :value="option.value"
                        v-model="formData.fractionnement" />
                    <label class="btn btn-outline-primary iconLabel" :for="option.id">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/calendrier.png" width="32" :alt="option.alt" />
                        </div>
                        <div>
                            {{ option.label }}
                            <span v-if="option.condition" class="smallcondition">({{ option.condition }})</span>
                        </div>
                    </label>
                </div>
            </div>
            <ErrorComponent v-if="$v.fractionnement.$error" :errors="$v.fractionnement.$errors" />

        </div>

        <div class="col-12 mt-4">
            <label class="formLabel mb-3">Observations diverses</label>
            <textarea class="form-control" rows="4" cols="50" name="observations_diverses" v-model="formData.observations_diverses"></textarea>
        </div>

        <div class="col-12 mt-0">
            <div class="container-fluid p-0">
                <div class="row align-items-center">
                    <div class="col-12">
                      <button v-if="loader" type="button" class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">
                                <vue-spinner size="30" color="white" />
                            </button>
                        <button v-else type="submit"
                            class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">
                            DEVIS EXPRESS
                            <img src="../assets/icons/complete.png" width="32" alt="suivant" class="ms-3 img-fluid" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
  
<script setup>
import { useFormStore } from "@/stores/useFormStore";
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import {VueSpinner} from 'vue3-spinners';

const router = useRouter();
const formStore = useFormStore();
const loader= ref(false)

const formData = reactive({
    date_effet:  "",
    franchise: "",
    fractionnement:  "",
    observations_diverses: "",
 /*    date_effet: formStore.getFormData.step6?.date_effet || "",
    franchise: formStore.getFormData.step6?.franchise || "",
    fractionnement: formStore.getFormData.step6?.fractionnement || "",
    observations_diverses: formStore.getFormData.step6?.observations_diverses || "", */
});

const rules = {
  date_effet: { required },
  franchise: { required },
  fractionnement: { required }
};

const $v = useVuelidate(rules, formData);

const isFranchise1 = ref(true);
onMounted(() => {
    isFranchise1.value = ["ARTISAN_ENTREPRISE_BATIMENT", "ACTIVITE_PISCINISTE"].includes(formStore.getFormData?.step1?.profession || "");
});

const fractionnementOptions = ref([
  ...(/* isFranchise1.value ? [
      { id: 'trimestriel', value: 'Trimestriel (+6%)', label: 'Trimestriel (+6%)', alt: 'non', condition: null, columnClass: 'col-md-4 col-12 mt-0 pe-0' },
      { id: 'semestriel', value: 'Semestriel (+3%)', label: 'Semestriel (+3%)', alt: 'non', condition: null, columnClass: 'col-md-4 col-12 mt-0 pe-0' },
      { id: 'annuel', value: 'annuel', label: 'Annuel', alt: 'non', condition: null, columnClass: 'col-md-4 col-12 mt-0 pe-0' },
  ] : */ [
    { id: 'mensuel', value: 'mensuel', label: 'Mensuel', alt: 'oui', condition: null, columnClass: 'col-md-3 col-12 mt-0 pe-0' },
    { id: 'trimestriel', value: 'trimestriel', label: 'Trimestriel', alt: 'non', condition: null, columnClass: 'col-md-3 col-12 mt-0 pe-0' },
    { id: 'semestriel', value: 'semestriel', label: 'Semestriel', alt: 'non', condition: null, columnClass: 'col-md-3 col-12 mt-0 pe-0' },
    { id: 'annuel', value: 'annuel', label: 'Annuel', alt: 'non', condition: null, columnClass: 'col-md-3 col-12 mt-0 pe-0' },
  ]),
]);

const handleApiRequest = async (url, data, onSuccess = () => {}, errorMessage = 'Une erreur est survenue, merci de réessayer plus tard.') => {
    try {
        const response = await axios.post(url, data);
        if (response.status === 200) {
            onSuccess(response);
        }
        return response;
    } catch (error) {
        const errorResponse = error.response;
        console.error(errorMessage, errorResponse || error.message);
        toast.error(errorMessage);
        throw error;
    }
};

const sendEmail = async () => {
    const data = formStore.getFormData;
    console.log('Sending signature data:', data);

    return await handleApiRequest(
        `${import.meta.env.VITE_BASE_URL}/api/send-email`,
        data,
        (response) => {
            console.log('Email sent successfully:', response);
        },
        'Erreur lors de l\'envoi du mail.'
    );
};

const submitStep = async () => {
  $v.value.$touch(); // Mark all fields as touched
  if (!$v.value.$invalid) {
    formStore.updateStepData("step6", { ...formData });
    loader.value =true;

    try {
        const response = await sendEmail();
        if (response?.status === 200) {
            router.push('/devis/merci');
        }
        loader.value =false;

    } catch (error) {
        console.error('Error during finalizing devis:', error);
        loader.value =false;

    }
  }
}
</script>

<style scoped>
.group-input-franchise{
  position: relative;
  flex: 1;
  text-align: center;
}
@media (max-width: 768px) {
  .group-input-franchise {
    }
}

.franchise-option {
    margin-bottom: 10px;
}
.nextBtn:hover{
    background-color: #b0e2fd !important;
    color: #f97316 !important;
}
#form-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
}

#form {
  width: 100%;
  max-width: 500px;
}
#form #form-title {
  margin-top: 0;
  font-weight: 400;
  text-align: center;
}
#form #franchise-slider {
  display: flex;
  flex-direction: row;
  align-content: stretch;
  position: relative;
  width: 100%;
  height: 50px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
#form #franchise-slider::before {
  content: " ";
  position: absolute;
  height: 2px;
  width: 100%;
  width: calc(100% * (2 / 3));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f97316;
}
#form #franchise-slider.franchise-false::before {
  width: calc(100% * (1 / 2));
}
#form #franchise-slider input, #form #franchise-slider label {
  box-sizing: border-box;
  flex: 1;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
}
#form #franchise-slider label {
  display: inline-block;
  position: relative;
  width: 20%;
  height: 100%;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
#form #franchise-slider label:last-child::before {
  padding-right: 0px;
}
#form #franchise-slider label:nth-child(2)::before {
  padding-right: 20px;
}
#form #franchise-slider label:nth-child(4)::before {
  padding-right: 20px;
}
#form #franchise-slider label::before {
  content: attr(data-franchise);
  position: absolute;
  left: 50%;
  /* padding-top: 10px; */
  transform: translate(-50%, 45px);
  font-size: 14px;
  letter-spacing: 0.4px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0.85;
  transition: all 0.15s ease-in-out;
}
#form #franchise-slider label::after {
  content: " ";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 2px solid #f97316;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: 1;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}
#form #franchise-slider label:hover::after {
  transform: translate(-50%, -50%) scale(1.25);
}
#form #franchise-slider input {
  display: none;
}
#form #franchise-slider input:checked + label::before {
  font-weight: 800;
  opacity: 1;
  color: #f97316;
}
#form #franchise-slider input:checked + label::after {
  border-width: 4px;
  transform: translate(-50%, -50%) scale(0.75);
}
form:valid #franchise-slider input + label::before {
  transform: translate(-50%, 45px) scale(0.9);
  transition: all 0.15s linear;
}
form:valid #franchise-slider input:checked + label::before {
  transform: translate(-50%, 45px) scale(1.1);
  transition: all 0.15s linear;
}
#form:invalid + button {
  pointer-events: none;
  opacity: 0.25;
}
.smallcondition{
    font-size: .75em;
    white-space: nowrap;
}
.iconLabel{
    width: auto;
}
@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
    width: 24px;
    opacity: 1;
    margin-right: 12px;
  }
  to {
    transform: rotate(360deg);
    width: 24px;
    opacity: 1;
    margin-right: 12px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
    width: 24px;
    opacity: 1;
    margin-right: 12px;
  }
  to {
    transform: rotate(360deg);
    width: 24px;
    opacity: 1;
    margin-right: 12px;
  }
}
</style>