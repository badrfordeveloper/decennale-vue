<template>
   <my-header :progress="formStore.currentStep"  :step="'subscription'"/>
    <section id="formulaire">
        <div class="container">
            <div class="row justify-content-center mb-lg-4 d-block d-md-none progressdiv">
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6">
                    <div class="progress Mobile">
                        <div class="progress-bar progressMobile" role="progressbar" style="width: 16%;" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-md-center justify-content-lg-center m-0">
             
                <div class="col-3">
                    <div class="container-fluid pt-3">
                        <h5 class="heading mb-4 fw-bold">Bienvenue chez nous !</h5>
                        <p>Prêt à faire un pas vers vos objectifs ? Chaque clic ici peut être le début d'une grande aventure. Nous sommes là pour vous accompagner.</p>
                        <p><img src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg" alt="Image" class="img-fluid"></p>
                    </div>
                </div>
                <div class="col-md-9 col-lg-8 col-xl-6 col-xxl-6 hideSlides px-0 px-md-2 animate__animated animate__fadeIn animate__slow">
                    <div class="container-fluid p-0">
                        <Step1 v-if="formStore.currentStep === 1" />
                        <Step2 v-if="formStore.currentStep === 2" />
                        <Step3 v-if="formStore.currentStep === 3" />
                        <Step4 v-if="formStore.currentStep === 4" />
                        <Step5 v-if="formStore.currentStep === 5" />
                        <Step6 v-if="formStore.currentStep === 6" />
                        <Step7 v-if="formStore.currentStep === 7" />

                    </div>
                </div>
                <div class="col-3">
                    <div class="contact" style="
                            background: #c5f3ff;
                            padding: 10px;
                            margin: 10px;

                            border-radius: 9px;
                            text-align: center;
                            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                        ">
                                                <img src="../assets/images/assistance.png" class="assistanceImg img-fluid" style="
                            border-radius: 50%;
                            width: 170px;
                            margin-top: 18px;
                        ">  
                        <h3>Besoin d'aide ?

                        </h3>
                        <p class="text-center">
                            Vous pouvez contacter nos conseillers pour obtenir votre devis personnalisé.                        </p>
                        <div class="divider" ></div>
                        <div class="text-center" >
                            <div class="social-buttons">
                                <a href="https://wa.me/33767779822" target="_blank" class="social-button" aria-label="whatsapp">
                                    <i class='fa fa-whatsapp' style='font-size:36px;color:green'></i>
                                </a>
                                <a href="tel:0146592228" class="social-button" aria-label="phone">
                                    <i class="fa fa-phone" style='font-size:36px'></i>
                                </a>
                                <a href="mailto:contact@assurmabarak.fr" class="social-button" aria-label="envelope">
                                    <i class="fa fa-envelope" style='font-size:36px'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <button v-if="formStore.currentStep === 7" @click="submitForm">Submit</button> -->
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
    import Step7 from '../components/Step7OLD.vue';
    import MyHeader from '../components/header.vue';
    import { ref, onMounted } from 'vue'
    const formStore = useFormStore();

    if(formStore.currentStep > 7 ){
        formStore.updateCurrentStep(7) 
    }
  
</script>
 
<style>
 @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

</style>