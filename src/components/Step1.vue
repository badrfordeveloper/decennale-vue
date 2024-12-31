<template>
    <form @submit.prevent="submitStep">
        <div class="row  ">

            <div class="col-12  mb-2">
                <label for="maison" class="formLabel mb-5">Quelle profession souhaitez-vous assurer ?</label>
               <div class="row g-3 g-md-4">
                <div class="col-12 col-md-4 mt-0">
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
                <div class="col-12 col-md-4 mt-0">
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
                <div class="col-12 col-md-4 mt-0">
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
                <label class="formLabel my-3"> Numéro de SIREN : </label>
                <input type="text"  v-model="data.siren" class="form-control ">
                <ErrorComponent v-if="$v.siren.$error" :errors="$v.siren.$errors" />
            </div >
   

            <div class="col-12">
                <button v-if="loader" type="button" class="navBtn nextBtn mt-4 d-flex justify-content-center align-items-center">
                                <vue-spinner size="30" color="white" />
                            </button>

                <button v-else type="submit" class="navBtn firstBtn mt-4">Votre devis en 2 minutes</button>
            </div>
        </div>
  

    </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import axios from 'axios';
import {VueSpinner} from 'vue3-spinners';

const formStore = useFormStore();
const loader= ref(false)

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

async function submitStep() {

   
    $v.value.$touch(); // Mark all fields as touched
    if (!$v.value.$invalid) {
        //if(data.siren != formStore.formData.step1.siren){

        if(true){
            loader.value =true;
            await axios.get('https://api.insee.fr/api-sirene/3.11/siret?q=siren:'+data.siren,{
            headers: {
            'X-INSEE-Api-Key-Integration': `28774ea5-fd7e-442a-b74e-a5fd7ec42af9`, // Add token to header
            }})
            .then(response => {
                if (response.status === 200) {

                    const etablissement = response.data.etablissements[0];
                    let adresse = etablissement.adresseEtablissement.numeroVoieEtablissement;

                    if(etablissement.adresseEtablissement.typeVoieEtablissement != null  ){
                        adresse += " "+ etablissement.adresseEtablissement.typeVoieEtablissement;
                    }

                    if(etablissement.adresseEtablissement.libelleVoieEtablissement != null ){
                        adresse += " "+ etablissement.adresseEtablissement.libelleVoieEtablissement
                    }
                    if(etablissement.adresseEtablissement.complementAdresseEtablissement != null ){
                        adresse += "  "+ etablissement.adresseEtablissement.complementAdresseEtablissement
                    }
          
                    const infosStep2 = {
                        nom_entreprise: etablissement.uniteLegale.denominationUniteLegale, //
                        type: formStore.formData.step2.type || "",
                        adresse: adresse,
                        code_postal:  etablissement.adresseEtablissement.codePostalEtablissement,//
                        ville:  etablissement.adresseEtablissement.libelleCommuneEtablissement,//
                        mobile: formStore.formData.step2.mobile || "",
                        mail: formStore.formData.step2.mail || "",
                        nombre_salaries: formStore.formData.step2.nombre_salaries || "",
                        chiffre_affaires: formStore.formData.step2.chiffre_affaires || "",
                        date_creation: etablissement.dateCreationEtablissement,//
                        nom_dirigeant: formStore.formData.step2.nom_dirigeant || "",
                        date_naissance: formStore.formData.step2.date_naissance || "",
                    }
                    formStore.updateStepData('step2', infosStep2)
                    // update before you go
            
                }
            }).catch(({response}) => {
            }).finally(() => {
                loader.value =false;
            });
        }
        formStore.updateStepData('step1', data);
        formStore.nextStep();
 
    }
}
</script>
<style scoped>
@media (max-width: 768px) {
    .firstBtn  {
        font-size: medium;
    }
}

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
