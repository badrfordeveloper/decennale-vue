import { defineStore } from 'pinia';


import axios from 'axios';

export const useFormStore = defineStore('form', {
  state: () => ({
    currentStep: 1,
    formData: {
      step1: {
        profession:  "",
        siren:  "",
      
      },
      step2: {
        nom_entreprise:  "",
        type:"",
        adresse: "",
        code_postal:  "",
        ville:  "",
        mobile:  "",
        mail: "",
        nombre_salaries: "",
        chiffre_affaires:  "",
        date_creation: "",
        nom_dirigeant: "",
        date_naissance: "",
      },
      step3: {
        deja_assure: '',
        assureur : {
            annee: '',
            en_cours: '',
            date_resiliation: '',
            nom: '',
            nombre_sinistre: '',
            montant_sinistre: '',
            non_paiement: '',
            arriere: '',
            fausse_declaration: '',
        }
      },
      step4: {
      },
      step5: {
      },
      step6: {
        date_effet: '',
        franchise: '',
        fractionnement: '',
        observations_diverses: ''
      }

    },
    
    responseData: null,
    responseError: null,
  }),
  getters: {
    getFormData: (state) => state.formData,

  },

  actions: {
    updateStepData(step, data) {
      if(step == "tarifs" || step == "selectedTarifOptions" || step == "dependecies" ){
        this.formData[step]=[];
      }
      this.formData[step] = data;
    },
    nextStep() {
      this.currentStep++;
    },
    updateCurrentStep(step) {
      this.currentStep = step;
    },
    prevStep(router) {
      this.currentStep--;
      if (this.currentStep === 0) {
        this.currentStep = 1;
        router.push('/home');
      }
    },
    async submitForm() {
     
    },
  },
 /*  persist: {
    enabled: false,
    storage: localStorage // or sessionStorage
  }, */
});
