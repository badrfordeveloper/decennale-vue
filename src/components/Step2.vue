<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">

            <div class="col-12">
                <label class="formLabel mb-3" for="resiliation">Avez-vous déjà été assuré</label>
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check resilie_par_assureur3ans"
                                    name="resilie_par_assureur3ans" id="resnon" value="NON"
                                    v-model="formData.deja_assure">
                                <label class="btn btn-outline-primary iconLabel" for="resnon">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Non</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="btn-group formIconContainer miniClass" role="group"
                                aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check resilie_par_assureur3ans"
                                    name="resilie_par_assureur3ans" id="resoui" value="OUI"
                                    v-model="formData.deja_assure">
                                <label class="btn btn-outline-primary iconLabel" for="resoui">
                                    <div class="text-end checkedLabel"><img src="../assets/icons/checkedicon.svg"
                                            width="15" height="15" alt="checked"></div>
                                    <div class="twoBtns">Oui</div>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit"
                                class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape suivante <img
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
import BonASavoir from '../components/BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue'

const formStore = useFormStore();
const step2Data = formStore.getFormData;

const formData = reactive({
    deja_assure: step2Data.step2.deja_assure || "NON",
    assureur: {
        annee: step2Data.step2.assureur.annee || "",
        en_cours: step2Data.step2.assureur.en_cours || "",
        date_resiliation: step2Data.step2.assureur.date_resiliation || "",
        nom: step2Data.step2.assureur.nom || "",
        nombre_sinistre: step2Data.step2.assureur.nombre_sinistre || "",
        montant_sinistre: step2Data.step2.assureur.montant_sinistre || "",
        non_paiement: step2Data.step2.assureur.non_paiement || "",
        arriere: step2Data.step2.assureur.arriere || "",
        fausse_declaration: step2Data.step2.assureur.fausse_declaration || ""
    }
})

const allCities = ref([])
const filteredCities = ref([])
const showVillesCp = ref(false)
const showErrorMsg = ref(false)

const toutesOptions = {
    RDC: "Au rez-de-chaussée",
    INTERMEDIAIRE: "À un étage intermédiaire",
    DERNIER: "Au dernier étage",
};

const options = computed(() => {
    if (formData.nbrEtageImmb === 0) {
        return { RDC: toutesOptions.RDC, DERNIER: toutesOptions.DERNIER };
    } else if (formData.nbrEtageImmb > 1) {
        return toutesOptions;
    } else {
        return { RDC: toutesOptions.RDC, DERNIER: toutesOptions.DERNIER };
    }
});

const isMaison = computed(() => {
    return formStore.formData.step1.type_habitation == "MAISON_INDIVIDUELLE";
});

const updateOptions = () => {
    if (!Object.keys(options.value).includes(formData.appartement_situe)) {
        formData.appartement_situe = Object.keys(options.value)[0];
    }
};

function submitStep() {
    if (showErrorMsg.value == false && String(formData.codePostal).length == 5) {
        formStore.updateStepData('step2', formData);
        formStore.nextStep();
    } else {
        showErrorMsg.value = true;
        showVillesCp.value = false;
    }
}

const onVilleCpSearchKeyup = async () => {
    const pressedKey = formData.zipcode.trim();
    if (pressedKey && pressedKey.length >= 3) {
        await getVilleZip(pressedKey);
        showErrorMsg.value = false;
    } else {
        showErrorMsg.value = pressedKey.length === 0 ? false : true;
        showVillesCp.value = false;
    }

}
function selectCpVille(cp, ville) {
    formData.zipcode = `${cp} ${ville}`;
    formData.codePostal = cp;
    formData.ville = ville;
    showVillesCp.value = false;
}
async function getVilleZip(query) {
    try {
        const response = await fetch('/Villes.json');
        const data = await response.json();
        allCities.value = data;
        filteredCities.value = allCities.value.filter(city => String(city.code_postal).includes(query) || city.code_postal == query || city.commune.toLowerCase().includes(query.toLowerCase()));
        showVillesCp.value = filteredCities.value.length > 0;
        showErrorMsg.value = filteredCities.value.length === 0;
    } catch (error) {
        console.error("Error fetching city data:", error);
        showErrorMsg.value = true;
        showVillesCp.value = false;
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