<template>
    <form @submit.prevent="submitStep">
        <div class="row  ">

            <div class="col-12  mb-2">
                <label for="maison" class="formLabel mb-5">Quelle profession souhaitez-vous assurer ?</label>
               <div class="row g-3 g-md-4">
                <div class="col-4 mt-0">
                    <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check profession" name="profession" value="ARTISAN_ENTREPRISE_BATIMENT"
                            id="ARTISAN_ENTREPRISE_BATIMENT" autocomplete="off" v-model="data.profession">
                        <label class="btn btn-outline-primary iconLabel" for="ARTISAN_ENTREPRISE_BATIMENT">
                            <div class="text-end checkedLabel">
                                <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked">
                            </div>
                            <div class=""><img src="../assets/icons/worker.svg"  style="width: 80px;" alt="ARTISAN_ENTREPRISE_BATIMENT"></div>
                            <div>Artisan entreprise du batiment</div>
                        </label>
                    </div>
                </div>
                <div class="col-4 mt-0">
                    <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check profession" name="profession"
                            value="PROFESSION_INTELLECTUELLE_BATIMENT" id="PROFESSION_INTELLECTUELLE_BATIMENT" autocomplete="off" v-model="data.profession">
                        <label class="btn btn-outline-primary iconLabel" for="PROFESSION_INTELLECTUELLE_BATIMENT">
                            <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                    height="15" alt="checked"></div>
                            <div class=""><img src="../assets/icons/engineer.svg"  style="width: 80px;" alt="PROFESSION_INTELLECTUELLE_BATIMENT"></div>
                            <div>Profession Intellectuelle du batiment</div>
                        </label>
                    </div>
                </div>
                <div class="col-4 mt-0">
                    <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check profession" name="profession" value="ACTIVITE_PISCINISTE"
                            id="ACTIVITE_PISCINISTE" autocomplete="off" v-model="data.profession">
                        <label class="btn btn-outline-primary iconLabel" for="ACTIVITE_PISCINISTE">
                            <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                    height="15" alt="checked"></div>
                            <div class=""><img src="../assets/icons/pool.svg" style="width: 80px;" alt="ACTIVITE_PISCINISTE"></div>
                            <div>Activite de pisciniste</div>
                        </label>
                    </div>


                </div>
                </div>
                <div  class="col-12 mt-0">
                    <ErrorComponent v-if="$v.profession.$error" :errors="$v.profession.$errors" />
                </div>
            </div >
            <div class="col-12 ">

                <label class="formLabel mb-2"> Rechercher mon entreprise (nom, SIREN, SIRET) </label>
                <input type="text"  v-model="data.siren" class="form-control ">
                <ErrorComponent v-if="$v.siren.$error" :errors="$v.siren.$errors" />
            </div >
   

            <div class="col-12">
                <button type="submit" class="navBtn firstBtn mt-4">Votre devis en 2 minutes</button>
            </div>
        </div>
  

    </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
const formStore = useFormStore();

const types = ["Auto Entrepreneur","Nom Propre","SARL","SA","SAS,SASU..." ];



const data = reactive({
    profession: formStore.formData.step1.profession || "",
    siren: formStore.formData.step1.siren || "",

});


const rules = {
        profession: { required },
        siren: { required },
    };

    const $v = useVuelidate(rules, data);

const showModal = ref(false);
const modalTrigger = ref(null);
function submitStep() {
   /*  if (data.profession === "AUTRE") {
        showModal.value = true;
        modalTrigger.value?.click();
        return;
    } */
   
    $v.value.$touch(); // Mark all fields as touched
    if (!$v.value.$invalid) {
        formStore.updateStepData('step1', data);
        formStore.nextStep();
    }
}
</script>
<style scoped>
.formIconContainer{
    height: 100%;
}
.customCloseBtn {
    background: var(--color1);
    border: 0;
    padding: 14px 50px;
    font-size: 16px;
    border-radius: 9px;
    color: #fff;
}

.contenu {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
