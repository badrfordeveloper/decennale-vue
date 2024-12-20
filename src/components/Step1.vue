<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <label for="maison" class="formLabel mb-3">Quelle profession souhaitez-vous assurer ?</label>
            <div class="col-4 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check profession" name="profession" value="APPARTEMENT"
                        id="appartement" autocomplete="off" v-model="data.profession">
                    <label class="btn btn-outline-primary iconLabel" for="appartement">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked">
                        </div>
                        <div class="btnImg"><img src="../assets/icons/appartement.svg" alt="appartement"></div>
                        <div>Artisan entreprise du batiment</div>
                    </label>
                </div>
            </div>
            <div class="col-4 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check profession" name="profession"
                        value="MAISON_INDIVIDUELLE" id="maison" autocomplete="off" v-model="data.profession">
                    <label class="btn btn-outline-primary iconLabel" for="maison">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/appartement.svg" alt="appartement"></div>
                        <div>Profession Intellectuelle du batiment</div>
                    </label>
                </div>
            </div>
            <div class="col-4">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check profession" name="profession" value="APPARTEMENT"
                        id="studio" autocomplete="off" v-model="data.profession">
                    <label class="btn btn-outline-primary iconLabel" for="studio">
                        <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg" width="15"
                                height="15" alt="checked"></div>
                        <div class="btnImg"><img src="../assets/icons/appartement.svg" alt="appartement"></div>
                        <div>Activite de pisciniste</div>
                    </label>
                </div>
            </div>

            <div class="col-12 ">
                <label class="formLabel mb-2"> Rechercher mon entreprise (nom, SIREN, SIRET) </label>
                <input type="text"  v-model="data.siren" class="form-control ">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Nom de l'établissement</label>
                <input type="text" v-model="data.nom_entreprise" class="form-control">
            </div>
            <div class="col-6 ">

                <label for="etages" class="formLabel mb-3">Type</label>
                <select class="form-select"  v-model="data.type" >
                    <option v-for="(libelle, valeur) in types" :key="valeur" :value="valeur">
                        {{ libelle }}
                    </option>
                </select>
            </div>

            <div class="col-12 ">
                <label class="formLabel mb-2">Adresse</label>
                <input type="text" v-model="data.adresse" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Code Postal</label>
                <input type="text" v-model="data.code_postal" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Ville</label>
                <input type="text" v-model="data.ville" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Mobile</label>
                <input type="text" v-model="data.mobile" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Mail</label>
                <input type="mail" v-model="data.mail" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Nombre de Salariés + patron</label>
                <input type="number" v-model="data.nombre_salaries" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">    Chiffre d'affaires
                </label>
                <input type="number"  v-model="data.chiffre_affaires" class="form-control">
            </div>
            <div class="col-12 ">
                <label class="formLabel mb-2">   Date de création
                </label>
                <input type="date" v-model="data.date_creation" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">  Nom & prénom du dirigeant
                </label>
                <input type="text" v-model="data.nom_dirigeant" class="form-control">
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">   Date de naissance
                </label>
                <input type="date" v-model="data.date_naissance" class="form-control">
            </div>
            <div class="col-12">
                <button type="submit" class="navBtn firstBtn mt-4">Votre devis en 2 minutes</button>
            </div>

        </div>


    </form>
</template>

<script setup>
import { useFormStore } from '@/stores/useFormStore';
import { reactive, ref } from 'vue';
const formStore = useFormStore();

const types = ["Auto Entrepreneur","Nom Propre","SARL","SA","SAS,SASU..." ];



const data = reactive({
    profession: formStore.formData.step1.profession || "",
    siren: formStore.formData.step1.siren || "",
    nom_entreprise: formStore.formData.step1.nom_entreprise || "",
    type: formStore.formData.step1.type || "",
    adresse: formStore.formData.step1.adresse || "",
    code_postal: formStore.formData.step1.code_postal || "",
    ville: formStore.formData.step1.ville || "",
    mobile: formStore.formData.step1.mobile || "",
    mail: formStore.formData.step1.mail || "",
    nombre_salaries: formStore.formData.step1.nombre_salaries || "",
    chiffre_affaires: formStore.formData.step1.chiffre_affaires || "",
    date_creation: formStore.formData.step1.date_creation || "",
    nom_dirigeant: formStore.formData.step1.nom_dirigeant || "",
    date_naissance: formStore.formData.step1.date_naissance || "",
});

const showModal = ref(false);
const modalTrigger = ref(null);

function submitStep() {
   /*  if (data.profession === "AUTRE") {
        showModal.value = true;
        modalTrigger.value?.click();
        return;
    } */
    formStore.updateStepData('step1', data);
    formStore.nextStep();
}
</script>
<style scoped>
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
