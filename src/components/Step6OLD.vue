<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            <div class="col-12 mt-0">
                <h2 class="stepTitle mb-3">Bien noté.</h2>
                <p class="stepDescription mb-3 mb-md-0">
                    Parlons de votre besoin et votre budget pour constituer la meilleure offre.
                </p>
            </div>
            <!-- Protection souhaitée -->
            <label for="economique" class="formLabel mb-3">Quelle est la protection souhaitée ?</label>
            <div class="col-4 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="type_mutuelle" value="ECONOMIQUE" id="economique"
                        autocomplete="off" v-model="formData.type_mutuelle" />
                    <label class="btn btn-outline-primary iconLabel" for="economique">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/economique.svg" alt="economique" />
                        </div>
                        <div>Economique</div>
                    </label>
                </div>
            </div>
            <div class="col-4 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="type_mutuelle" value="EQUILIBREE" id="classique"
                        autocomplete="off" v-model="formData.type_mutuelle" />
                    <label class="btn btn-outline-primary iconLabel" for="classique">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/classique.svg" alt="classique" />
                        </div>
                        <div>Classique</div>
                    </label>
                </div>
            </div>
            <div class="col-4 mt-0">
                <div class="btn-group formIconContainer" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="type_mutuelle" value="OPTIMALE" id="optimal"
                        autocomplete="off" v-model="formData.type_mutuelle" />
                    <label class="btn btn-outline-primary iconLabel" for="optimal">
                        <div class="text-end checkedLabel">
                            <img src="../assets/icons/checkedicon.svg" width="15" height="15" alt="checked" />
                        </div>
                        <div class="btnImg">
                            <img src="../assets/icons/optimal.svg" alt="optimal" />
                        </div>
                        <div>Optimale</div>
                    </label>
                </div>
            </div>

            <!-- Capital mobilier -->
            <div class="col-12 mt-3 mb-0" v-if="nbrPieces == 1">
                <label for="capital" class="formLabel mb-3">Capital mobilier à assurer</label>
                <select class="form-select" name="valeur_bien" v-model="formData.valeur_bien">
                    <option value="5000">5 000€</option>
                    <option value="10000">10 000€</option>
                    <option value="15000">15 000€</option>
                    <option value="20000">20 000€</option>
                    <option value="25000">25 000€</option>
                    <option value="30000">30 000€</option>
                    <option value="35000">35 000€</option>
                    <option value="40000">40 000€</option>
                </select>
                <div class="errorMsg" style="display: none;">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                            viewBox="0 0 10.497 10.008">
                            <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                <g id="Page-1" transform="translate(30 591)">
                                    <g id="Alert" transform="translate(5 5)">
                                        <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                            fill="none"></rect>
                                        <path id="Path"
                                            d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                            transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                        <path id="Path-2" data-name="Path"
                                            d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                            transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                        <path id="Path-3" data-name="Path"
                                            d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                            transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p class="m-0 ms-2">Ce champ est requis</p>
                    </div>
                </div>
            </div>
            
            <section v-if="false">
                <!-- Indemnisation Mobilier -->
                <div class="col-12 mt-3 mb-0">
                    <label for="capital" class="formLabel mb-3">Indemnisation Mobilier</label>
                    <select class="form-select" name="indemnisation_mobilier" v-model="formData.indemnisation_mobilier">
                        <option value="VALEUR_USAGE" selected="selected">Valeur d'usage</option>
                        <option value="VALEUR_NEUF_25_POURCENT">Valeur à neuf 25%</option>
                        <option value="VALEUR_NEUF_2_ANS">Valeur à neuf intégrale 2 ans</option>
                        <option value="VALEUR_NEUF_5_ANS">Valeur à neuf intégrale 5 ans</option>
                    </select>
                    <div class="errorMsg" style="display: none;">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                                viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                                fill="none"></rect>
                                            <path id="Path"
                                                d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                                transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path"
                                                d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                                transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path"
                                                d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                                transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>
                </div>
                
                <!-- Objets de valeur -->
                <div class="col-12 mt-3 mb-0">
                    <label for="capital" class="formLabel mb-3">Objets de valeur</label>
                    <select class="form-select" name="objets_valeur" v-model="formData.objets_valeur">
                        <option value="ZERO">0%</option>
                        <option value="QUINZE">15%</option>
                        <option value="VINGT">20%</option>
                        <option value="TRENTE">30%</option>
                    </select>
                    <div class="errorMsg" style="display: none;">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                                viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                                fill="none"></rect>
                                            <path id="Path"
                                                d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                                transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path"
                                                d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                                transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path"
                                                d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                                transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>
                </div>
                
                <!-- niveau franchise -->
                <div class="col-12 mt-3 mb-0">
                    <label for="capital" class="formLabel mb-3">Franchise</label>
                    <select class="form-select" name="niveau_franchise" v-model="formData.niveau_franchise">
                        <option value="AUCUNE">Aucune</option>
                        <option value="CENTCINQUANTE">150 €</option>
                        <option value="TROISCENTS">300 €</option>
                        <option value="CINQCENTS">500 €</option>
                    </select>
                    <div class="errorMsg" style="display: none;">
                        <div class="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.497" height="10.008"
                                viewBox="0 0 10.497 10.008">
                                <g id="Groupe_36" data-name="Groupe 36" transform="translate(-36 -597.573)">
                                    <g id="Page-1" transform="translate(30 591)">
                                        <g id="Alert" transform="translate(5 5)">
                                            <rect id="Rectangle" width="10" height="10" transform="translate(1 1.581)"
                                                fill="none"></rect>
                                            <path id="Path"
                                                d="M-.476,2.145A.524.524,0,0,1-1,1.621v-2.1A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v2.1A.524.524,0,0,1-.476,2.145Z"
                                                transform="translate(6.766 5.194)" fill="#f4627f"></path>
                                            <path id="Path-2" data-name="Path"
                                                d="M-.476.117A.524.524,0,0,1-1-.408V-.476A.524.524,0,0,1-.476-1a.524.524,0,0,1,.524.524v.068A.524.524,0,0,1-.476.117Z"
                                                transform="translate(6.766 9.125)" fill="#f4627f"></path>
                                            <path id="Path-3" data-name="Path"
                                                d="M7.274,3a1.557,1.557,0,0,1,1.362.786l3.632,6.29a1.573,1.573,0,0,1-1.362,2.359H3.642A1.573,1.573,0,0,1,2.28,10.077l3.632-6.29A1.557,1.557,0,0,1,7.274,3Zm3.632,8.387a.524.524,0,0,0,.454-.786L7.728,4.31a.524.524,0,0,0-.908,0L3.188,10.6a.524.524,0,0,0,.454.786Z"
                                                transform="translate(-0.983 -1.427)" fill="#f4627f"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="m-0 ms-2">Ce champ est requis</p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Submit Button -->
            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">
                                Étape suivante
                                <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir
                remarque="Le mobilier correspond à vos meubles, équipement électroménager. Les objets de valeur correspondent à vos bijoux, montres…" />
        </div>
    </form>
</template>

<script setup>
import BonASavoir from './BonASavoir.vue';
import { useFormStore } from '@/stores/useFormStore';
import { ref, reactive, computed } from 'vue'

const formStore = useFormStore();
const nbrPieces = formStore.getNbrPieces;
const step6Data = formStore.getFormData.step6;

const formData = reactive({
    type_mutuelle: 'ECONOMIQUE',
    valeur_bien: step6Data.valeur_bien || 5000,
    indemnisation_mobilier: 'VALEUR_USAGE',
    niveau_franchise: 'TROISCENTS',
    objets_valeur: 'ZERO',
});

function submitStep() {
    formStore.updateStepData('step6', formData);
    formStore.nextStep();
}
</script>