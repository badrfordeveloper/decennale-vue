<template>
    <my-header :progress="formStore.currentStep" :step="'subscription'" />
    <section id="formulaire">
        <div class="container">
            <div class="row justify-content-center mb-lg-4 d-block d-md-none progressdiv">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="progress Mobile">
                        <div class="progress-bar progressMobile" role="progressbar" 
                            :style="{ width: progressPercentage + '%' }"
                            :aria-valuenow="progressPercentage" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0 align-items-baseline stepperdiv">
                <div class="d-flex col-md-9 col-lg-9 col-xl-9 col-xxl-9 hideSlides px-0 pb-2 animate__animated animate__fadeIn animate__slow">
                    <div class="stepperCustom">
                        <div v-for="(step, index) in steps" 
                            :key="index"
                            :class="['step', { active: isActiveStep(index + 1) }]">
                            {{ step }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
                <div class="col-md-9 col-lg-9 col-xl-9 col-xxl-9 stepper hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid" style="padding: 40px;">
                        <Step1 v-if="formStore.currentStep === 1" />
                        <Step2 v-if="formStore.currentStep === 2" />
                        <Step3 v-if="formStore.currentStep === 3" />
                        <Step4 v-if="formStore.currentStep === 4" />
                        <Step5 v-if="formStore.currentStep === 5" />
                        <Step6 v-if="formStore.currentStep === 6" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useFormStore } from '../stores/useFormStore';
    import Step1 from '../components/Step1.vue';
    import Step2 from '../components/Step2.vue';
    import Step3 from '../components/Step3.vue';
    import Step4 from '../components/Step4.vue';
    import Step5 from '../components/Step5.vue';
    import Step6 from '../components/Step6.vue';
    import MyHeader from '../components/header.vue';
    import { ref, computed } from 'vue'
    const formStore = useFormStore();

    if(formStore.currentStep > 7 ){
        formStore.updateCurrentStep(7) 
    }

    const stepMap = {
        1: 'Entreprise',
        2: 'Entreprise',
        3: 'Recueil du besoin',
        4: 'Recueil du besoin',
        5: 'Activité',
        6: 'Finalisation',
    };
    const steps = ref(['Entreprise','Recueil du besoin', 'Activité', 'Finalisation']);
    
    const isActiveStep = (stepIndex) => {
        const activeStep = stepMap[formStore.currentStep];
        return steps.value[stepIndex - 1] == activeStep;
    };

    const progressPercentage = computed(() => {
        return (formStore.currentStep / 6) * 100;
    });
</script>
 
<style>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.stepperCustom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 100px;
    margin-bottom: 20px;
    width: 100%;
    animation: fadeIn .5s;
    background: white !important;
    border: 1px solid #e5e5e5;
    border-radius: .85rem;
    animation-name: fadeInLeft;
    animation-duration: .5s;
    box-shadow: 0 .25rem 1.875rem rgb(42 53 79 / 17%);
}

.step {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  /* border-radius: 10px; */
  transition: background-color 0.3s, color 0.3s;
}

.step:nth-child(1){
    border-radius: .85rem 0px 0px .85rem;
}
.step:last-child{
    border-radius: 0px .85rem .85rem 0px;
}
/* .step:not(:last-child) {
  margin-right: 5px;
} */

.step.active {
  background-color: #f97316;
  color: #fff;
  font-weight: bold;
}

.step:hover {
  background-color: #f9d9c3;
}
.stepper{
    animation: fadeIn .5s;
    background: white !important;
    border: 1px solid #e5e5e5;
    border-radius: .85rem;
    animation-name: fadeInLeft;
    animation-duration: .5s;
    box-shadow: 0 .25rem 1.875rem rgb(42 53 79 / 17%);
}
@media (max-width: 768px) {
    .stepperdiv {
        display: none !important;
    }
}
</style>