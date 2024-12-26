<template>
    <form @submit.prevent="submitStep">
        <div class="row  ">

  
            <div class="col-12 col-md-6">
                <label class="formLabel ">Nom de l'établissement</label>
                <input type="text" v-model="data.nom_entreprise" class="form-control">
                <ErrorComponent v-if="$v.nom_entreprise.$error" :errors="$v.nom_entreprise.$errors" />

            </div>
            <div class="col-12 col-md-6">

                <label for="etages" class="formLabel ">Type</label>
                <select class="form-select"  v-model="data.type" >
                    <option v-for="(libelle, valeur) in types" :key="valeur" :value="libelle">
                        {{ libelle }}
                    </option>
                </select>
                <ErrorComponent v-if="$v.type.$error" :errors="$v.type.$errors" />

            </div>

            <div class="col-12 ">
                <label class="formLabel ">Adresse</label>
                <input type="text" v-model="data.adresse" class="form-control">
                <ErrorComponent v-if="$v.adresse.$error" :errors="$v.adresse.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">Code Postal</label>
                <input type="text" v-model="data.code_postal" class="form-control">
                <ErrorComponent v-if="$v.code_postal.$error" :errors="$v.code_postal.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">Ville</label>
                <input type="text" v-model="data.ville" class="form-control">
                <ErrorComponent v-if="$v.ville.$error" :errors="$v.ville.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">Mobile</label>
                <input type="text" v-model="data.mobile" class="form-control">
                <ErrorComponent v-if="$v.mobile.$error" :errors="$v.mobile.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">Mail</label>
                <input type="text" v-model="data.mail" class="form-control">
                <ErrorComponent v-if="$v.mail.$error" :errors="$v.mail.$errors" />
            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">Nombre de Salariés + patron</label>
                <input type="number" v-model="data.nombre_salaries" class="form-control">
                <ErrorComponent v-if="$v.nombre_salaries.$error" :errors="$v.nombre_salaries.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">    Chiffre d'affaires
                </label>
                <input type="number"  v-model="data.chiffre_affaires" class="form-control">
                <ErrorComponent v-if="$v.chiffre_affaires.$error" :errors="$v.chiffre_affaires.$errors" />

            </div>
            <div class="col-12 ">
                <label class="formLabel ">   Date de création
                </label>
                <input type="date" v-model="data.date_creation" class="form-control">
                <ErrorComponent v-if="$v.date_creation.$error" :errors="$v.date_creation.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">  Nom & prénom du dirigeant
                </label>
                <input type="text" v-model="data.nom_dirigeant" class="form-control">
                <ErrorComponent v-if="$v.nom_dirigeant.$error" :errors="$v.nom_dirigeant.$errors" />

            </div>
            <div class="col-12 col-md-6">
                <label class="formLabel ">   Date de naissance
                </label>
                <input type="date" v-model="data.date_naissance" class="form-control">
                <ErrorComponent v-if="$v.date_naissance.$error" :errors="$v.date_naissance.$errors" />

            </div>

      

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
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
const formStore = useFormStore();

const types = ["Auto Entrepreneur","Nom Propre","SARL","SA","SAS,SASU..." ];



const data = reactive({
    nom_entreprise: formStore.formData.step2.nom_entreprise || "",
    type: formStore.formData.step2.type || "",
    adresse: formStore.formData.step2.adresse || "",
    code_postal: formStore.formData.step2.code_postal || "",
    ville: formStore.formData.step2.ville || "",
    mobile: formStore.formData.step2.mobile || "",
    mail: formStore.formData.step2.mail || "",
    nombre_salaries: formStore.formData.step2.nombre_salaries || "",
    chiffre_affaires: formStore.formData.step2.chiffre_affaires || "",
    date_creation: formStore.formData.step2.date_creation || "",
    nom_dirigeant: formStore.formData.step2.nom_dirigeant || "",
    date_naissance: formStore.formData.step2.date_naissance || "",
});


const rules = {
        nom_entreprise: { required },
        type: { required },
        adresse:{ required },
        code_postal: { required },
        ville: { required },
        mobile:{ required },
        mail: { required,email},
        nombre_salaries: { required },
        chiffre_affaires: { required },
        date_creation: { required },
        nom_dirigeant: { required },
        date_naissance: { required },
    };

const $v = useVuelidate(rules, data);
function submitStep() {
   
    $v.value.$touch(); // Mark all fields as touched
    if (!$v.value.$invalid) {
        formStore.updateStepData('step2', data);
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
