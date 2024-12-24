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
            <div class="col-6 ">
                <label class="formLabel mb-2">Nom de l'établissement</label>
                <input type="text" v-model="data.nom_entreprise" class="form-control">
                <ErrorComponent v-if="$v.nom_entreprise.$error" :errors="$v.nom_entreprise.$errors" />

            </div>
            <div class="col-6 ">

                <label for="etages" class="formLabel mb-3">Type</label>
                <select class="form-select"  v-model="data.type" >
                    <option v-for="(libelle, valeur) in types" :key="valeur" :value="libelle">
                        {{ libelle }}
                    </option>
                </select>
                <ErrorComponent v-if="$v.type.$error" :errors="$v.type.$errors" />

            </div>

            <div class="col-12 ">
                <label class="formLabel mb-2">Adresse</label>
                <input type="text" v-model="data.adresse" class="form-control">
                <ErrorComponent v-if="$v.adresse.$error" :errors="$v.adresse.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Code Postal</label>
                <input type="text" v-model="data.code_postal" class="form-control">
                <ErrorComponent v-if="$v.code_postal.$error" :errors="$v.code_postal.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Ville</label>
                <input type="text" v-model="data.ville" class="form-control">
                <ErrorComponent v-if="$v.ville.$error" :errors="$v.ville.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Mobile</label>
                <input type="text" v-model="data.mobile" class="form-control">
                <ErrorComponent v-if="$v.mobile.$error" :errors="$v.mobile.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Mail</label>
                <input type="text" v-model="data.mail" class="form-control">
                <ErrorComponent v-if="$v.mail.$error" :errors="$v.mail.$errors" />
            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">Nombre de Salariés + patron</label>
                <input type="number" v-model="data.nombre_salaries" class="form-control">
                <ErrorComponent v-if="$v.nombre_salaries.$error" :errors="$v.nombre_salaries.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">    Chiffre d'affaires
                </label>
                <input type="number"  v-model="data.chiffre_affaires" class="form-control">
                <ErrorComponent v-if="$v.chiffre_affaires.$error" :errors="$v.chiffre_affaires.$errors" />

            </div>
            <div class="col-12 ">
                <label class="formLabel mb-2">   Date de création
                </label>
                <input type="date" v-model="data.date_creation" class="form-control">
                <ErrorComponent v-if="$v.date_creation.$error" :errors="$v.date_creation.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">  Nom & prénom du dirigeant
                </label>
                <input type="text" v-model="data.nom_dirigeant" class="form-control">
                <ErrorComponent v-if="$v.nom_dirigeant.$error" :errors="$v.nom_dirigeant.$errors" />

            </div>
            <div class="col-6 ">
                <label class="formLabel mb-2">   Date de naissance
                </label>
                <input type="date" v-model="data.date_naissance" class="form-control">
                <ErrorComponent v-if="$v.date_naissance.$error" :errors="$v.date_naissance.$errors" />

            </div>

            <span v-if="$v.profession.$error">profession is required.</span>
            <span v-if="$v.siren.$error">{{ $v.siren.$error }}siren is required.</span>

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


const rules = {
        profession: { required },
        siren: { required },
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
