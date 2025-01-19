<script setup>
  import "../assets/orus.css"; 
  import "../assets/index.js"; 
  import { ref, onMounted } from "vue";
  import { Swiper as SwiperCore } from 'swiper';
  import { Autoplay, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/pagination';

  SwiperCore.use([Autoplay, Pagination]);


  const showModal = ref(false);

  const closeModal = () => {
    showModal.value = false;
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    console.log("LocalStorage cleared, starting a new devis.");
  };

  const faqItems = ref([
    {
      question: "Quels artisans doivent s’assurer avec une décennale ?",
      answer: `
        <p>L'assurance décennale, essentielle pour les professionnels du bâtiment, de la
          construction et du BTP, est un domaine couvert en profondeur chez nous. Nous assurons une large
          gamme d'activités dans ces secteurs :</p>
        <p>- Du terrassement aux V.R.D. (Voies et Réseaux Divers) incluant canalisations, assainissement,
          chaussées, etc. ; </p>
        <p>- La construction de charpentes en bois ou métalliques ; </p>
        <p>- Les travaux de couverture ; </p>
        <p>- La pose de menuiseries extérieures ; </p>
        <p>- La réalisation de bardages de façade ;</p>
        <p>- Le calfeutrement et étanchéité des façades ;</p>
        <p>- La plâtrerie et autres finitions intérieures ;</p>
        <p>- La serrurerie et métallerie ;</p>
        <p>- La vitrerie et miroiterie ;</p>
        <p>- La peinture de bâtiments ;</p>
        <p>- La pose de revêtements souples, parquets flottants et surfaces dures ;</p>
        <p>- L’isolation thermique, acoustique et frigorifique ;</p>
        <p>- La plomberie et installations sanitaires ;</p>
        <p>- L’installation thermiques et de génie climatique ;</p>
        <p>- Les travaux d'électricité.</p>
        <p>Pour déterminer si votre activité est couverte chez nous, le moyen le plus rapide est de faire
          une estimation sur notre site.</p>
      `,
    },
    {
      question: "Comment obliger un artisan à nous fournir une garantie décennale ?",
      answer: `
        <p>Fournir la preuve de sa garantie décennale est une obligation pour les artisans concernés. Si
        un artisan refuse de présenter une attestation décennale, il peut être utile de lui rappeler que
        la loi l’y oblige. En refusant de fournir la garantie décennale, il s’expose à des conséquences
        légales et des sanctions importantes. Si la discussion ne porte pas ses fruits, la médiation ou
        d’autres actions pourront être envisagées.</p>
      `,
    },
    {
      question: "Est-ce que les artisans sous-traitants ont l'obligation de prendre une assurance décennale ?",
      answer: `<p>Habituellement, les sous-traitants ne sont pas obligés de prendre une assurance décennale. C
        'est l'entrepreneur principal qui a la responsabilité des travaux face au client. Les
          sous-traitants, eux, travaillent sous la responsabilité de cet entrepreneur principal.</p>
        <p>Mais alors, pourquoi un sous-traitant devrait-il s'assurer ?</p>
        <p>Si un problème survient après la construction ou la rénovation d'un bâtiment, c'est
          à l'entrepreneur principal de mobiliser son assurance décennale. Cependant, si ce dernier
          prouve que le souci vient d'un sous-traitant, il peut lui demander des comptes. Le
          sous-traitant doit fournir un travail sans défaut, car il a une obligation de résultat envers le
          client final.</p>
        <blockquote>💡 Ce qu'il faut retenir : si l'entrepreneur principal établit que vous
          êtes en faute, en tant que sous-traitant, les coûts de réparation ou d'indemnisation
          pourraient vous incomber. Ces frais peuvent être très élevés, mais avec une assurance décennale,
          c'est votre assureur qui les prendra en charge.</blockquote>
      `,
    },
    {
      question: "Comment savoir si je dois souscrire une assurance décennale ou assurance responsabilité civile professionnelle en tant qu'artisan ?",
      answer: `
        <p>La nécessité d'une assurance décennale dépend de la durée et de la nature des travaux que
          vous réalisez.</p>
        <p>Chez nous, pas besoin d'assurance décennale si vous vous occupez de petits travaux qui ne
          prennent pas plus de deux heures. Par exemple, si vos tâches consistent à accrocher des tableaux
          ou à monter un meuble, une assurance décennale n'est pas nécessaire.</p>
        <p>En revanche, nous recommandons une assurance décennale si vos travaux sont plus conséquents et
          affectent la structure du bâtiment sur lequel vous travaillez. Des opérations telles que la
          rénovation électrique ou la peinture d'une maison entrent dans cette catégorie.</p>
      `,
    }
  ]);

  const activeIndex = ref(null);

  const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };

  const partners = ref([
    { name: 'AXA', logo: new URL('../assets/images/partenaires/partenaire1.png', import.meta.url).href },
    { name: 'MMA', logo: new URL('../assets/images/partenaires/partenaire2.png', import.meta.url).href },
    { name: 'Allianz', logo: new URL('../assets/images/partenaires/partenaire3.png', import.meta.url).href },
    { name: 'MIC', logo: new URL('../assets/images/partenaires/partenaire4.png', import.meta.url).href },
    { name: 'April', logo: new URL('../assets/images/partenaires/partenaire5.png', import.meta.url).href },
    { name: 'Fidelidade', logo: new URL('../assets/images/partenaires/partenaire6.png', import.meta.url).href },
    { name: 'ERGO', logo: new URL('../assets/images/partenaires/partenaire7.png', import.meta.url).href },
    { name: 'Proxia', logo: new URL('../assets/images/partenaires/partenaire8.png', import.meta.url).href },
    { name: 'QBE', logo: new URL('../assets/images/partenaires/partenaire9.png', import.meta.url).href },
    { name: 'VHV Asssurance', logo: new URL('../assets/images/partenaires/partenaire10.png', import.meta.url).href },
    { name: 'Axeria', logo: new URL('../assets/images/partenaires/partenaire11.png', import.meta.url).href },
    { name: 'wakam', logo: new URL('../assets/images/partenaires/partenaire12.png', import.meta.url).href },
  ]);

  onMounted(() => {
    const swiperContainer = document.querySelector(".swiper");

    if (swiperContainer) {
      new SwiperCore(swiperContainer, {
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
    } else {
      console.error("Swiper container not found!");
    }
  });
</script>

<style scoped>
.partners-carousel {
  text-align: center;
  padding: 20px 0;
}

.swiper {
  width: 90%;
  margin: 0 auto;
}

.swiper-slide img {
  height: 90px;
  object-fit: contain;
}
/**********************************************/
.landings-page-content {
  /* min-height: calc(100vh - 80px); */
  margin-bottom: 100px;
  padding-top: 84px;
  overflow: hidden;
}
.landings-page-content{
  .container {
      max-width: 1280px;
      width: 100%;
      margin: 24px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .content {
    background-color: #f0ece7 !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    border-radius: 32px;
    gap: 5px;
  }

  .text-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
  }

  .title {
    margin: 0 0 16px 0;
    span {
      font-size: 32px;
      line-height: 40px;
      font-weight: 700;
      font-family: "FilsonProAlan, Futura, Verdana, sans-serif";
    }
  }

  .spacer {
      height: 16px; /* Spacer height */
  }

  .description-container {
      display: flex;
      flex-direction: column;
      gap: 8px; /* Space between paragraphs */
  }

  .description {
      font-size: 16px; /* Adjust as needed */
      line-height: 24px; /* Adjust as needed */
      color: #666; /* Example text color */
      margin: 0;
  }

  .image-container {
      margin-top: 24px; /* Space above the image */
      text-align: center; /* Center the image */
      max-height: 631.5px;
  }

  .image-container img {
      max-width: 100%; /* Make the image responsive */
      height: auto; /* Maintain aspect ratio */
      border-radius: 32px; /* Match the border radius of the section */
  }
}

.button-container {
    display: flex;
    gap: 16px; /* Space between buttons */
}

.button {
    padding: 12px 24px;
    background-color: #007bff; /* Example button color */
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3; /* Darker shade on hover */
}
/*************************************************/
.hero {
    padding: 40px 0; /* Add padding to the hero section */
}
.top-margin {
    margin-top: 40px !important;
}

.hero-container {
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    position: relative;
}

.hero-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.hero-text {
    flex: 1;
    padding: 0 20px;
}

.mutuelle-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.hero-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
}

.hero-description {
    font-size: 16px;
    line-height: 24px;
    color: #666;
    margin-bottom: 24px;
}

.hero-image {
    flex: 0 0 336px; /* Fixed width for the image */
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 16px;
}

.background-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Send the SVG to the back */
}
.bullet-points-and-media {
    padding: 40px 0; /* Add padding to the bullet points section */
}

.bullet-points-and-media .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
}

.bullet-points-and-media .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 20px;
}

.image-column {
    flex: 1;
    padding: 20px;
}

.image-column img {
    width: 100%;
    height: auto;
    border-radius: 16px; /* Match the border radius */
}

.text-column {
    flex: 2;
    padding: 20px;
}

.text-column h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
}

.text-column p {
    font-size: 16px;
    line-height: 24px;
    color: #666;
    margin-bottom: 16px;
}

.bullet-points {
    display: flex;
    flex-direction: column;
    gap: 12px; /* Space between bullet points */
}

.bullet-point {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 24px;
    color: #666;
}

.bullet-point svg {
    margin-right: 8px;
    margin-bottom: 16px;
}

.nav-button-primary {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #b0e2fd;
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: #b0e2fd;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #b0e2fd;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: #b0e2fd;
    background-color: #007bff;
    color: var(--color--text--base--color-text-base-primary);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: .4375rem 1.25rem;
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.455, .03, .515, .955);
    display: flex;
    box-shadow: 0 2px 2px #00006308, 0 1px 2px #00006308
}

.nav-button-primary:hover {
    border-color: #b0e2fd;
    background-color: #0056b3;
}
</style>

<template>

  <div class="page-wrapper">
    <div class="main-wrapper">
      <div class="header">
        <header class="nav">
          <div class="padding-page">
            <div class="nav-container d-flex justify-content-between">
              <div class="nav_items-wrapper">
                <a aria-label="Logo " href="/" class="nav_logo-link w-inline-block">
                  <img src='../assets/media/logo.png' width="300" height="75" alt="" class="img-fluid" />
                </a>
              </div>
              <div class="nav-button-group">
                <a href="/devis" @click="clearLocalStorage"
                  class="nav-button-primary plausible-event-name--startquote w-inline-block">
                  <div class="button-text hide-mobile-landscape">Mon devis en 2 minutes</div>
                  <div class="button-text show-mobile-landscape">Devis</div>
                </a>
              </div>
            </div>
          </div>
        </header>
        <section id="landings-page-content" class="landings-page-content">
          <div class="container">
            <div class="content">
                <div class="text-container">
                    <h1 role="heading" aria-level="1" class="title">
                        <span>Votre santé, notre priorité !</span>
                    </h1>
                    <div class="spacer"></div>
                    <div class="description-container">
                        <p class="description">
                          Une couverture complète, une sérénité assurée. Vivez pleinement, on s’occupe du reste !"
                        </p>
                        <p class="description">
                          Optez pour une mutuelle senior de qualité, à prix accessible !
                        </p>
                        <p class="description">
                          NÉ ENTRE 1920 ET 1966 : Vous êtes éligible à une nouvelle mutuelle senior adaptée <br>selon vos besoins.
                        </p>
                        <p class="description">
                          Grâce à la loi n° 2019-733 du 14 juillet 2019, Les personnes de plus de 55 ans, <br>vous pouvez résilier gratuitement votre mutuelle santé
                        </p>
                    </div>
                    <div class="spacer"></div>
                    <div class="button-container">
                        <a href="/fr-company-discovery-dispatch" rel="nofollow" class="button">Mon devis en 2 min</a>
                        <a href="/fr-fr/contact" rel="nofollow" class="button">Être rappelé</a>
                    </div>
                    <div class="spacer"></div>
                </div>
                <div></div>
                <div class="image-container">
                    <img src="../assets/media/old.png" alt="prioritesantemutuelle-santé" width="400"/>
                    <!-- <img src="https://6vvt7k9n.twic.pics/v1/image:prismic/ZnP9BZm069VX16TE_Asset.png" alt="Descriptive Alt Text" /> -->
                </div>
            </div>
          </div>
        </section>
      </div>

      <section id="hero" class="hero">
          <div class="hero-container">
              <div class="hero-content">
                  <div class="hero-text">
                      <p class="mutuelle-title">Mutuelle santé</p>
                      <h1 class="hero-title">Quelle est la meilleure mutuelle santé ?</h1>
                      <p class="hero-description">
                          Il n’y a pas de bonne ou de mauvaise complémentaire santé. La meilleure mutuelle santé est celle qui s’adapte en tous points au profil de l’assuré et de ses besoins (soins courants, dentaires, optiques, hospitalisation, médecine généraliste, spécialiste et douce...). On vous explique comment choisir la meilleure mutuelle parmi les offres de complémentaire, adaptée à vos besoins et votre budget.
                      </p>
                      <div class="button-container">
                          <a href="/fr-company-discovery-dispatch" rel="nofollow" class="button">Demander un devis</a>
                      </div>
                  </div>
                  <div class="hero-image">
                      <img src="https://6vvt7k9n.twic.pics/v1/image:prismic/Zg69YTskWekewDxa_professions-liberales.jpg" alt="Mutuelle Santé" />
                  </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 1037 831" fill="none" aria-hidden="true" class="background-svg">
                  <g opacity="0.64" filter="url(#filter)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M246.519 412.718C266.543 370.757 296.115 332.895 329.931 301.732C354.596 278.906 381.781 262.367 408.568 250.475C508.82 205.917 625.516 218.218 714.895 282.733C738.764 299.955 762.104 321.824 781.862 349.297C808.782 386.885 843.26 493.498 764.093 539.97C685.058 586.443 595.016 524.799 556.427 519.468C517.838 514.274 479.381 528.352 456.44 539.834C450.605 542.294 380.057 598.334 343.324 604.895C311.498 610.636 273.439 605.305 249.702 580.565C208.859 538.057 223.578 460.694 246.519 412.718Z" fill="url(#gradient)"></path>
                  </g>
                  <defs>
                      <filter id="filter" x="0" y="0" width="1037" height="831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feGaussianBlur stdDeviation="72"></feGaussianBlur>
                      </filter>
                      <linearGradient id="gradient" x1="518.5" y1="199.105" x2="501.564" y2="607.413" gradientUnits="userSpaceOnUse">
                          <stop offset="0.05" stop-color="#82C0FF"></stop>
                          <stop offset="0.41" stop-color="#BEAAFF"></stop>
                          <stop offset="0.9" stop-color="#FF8FD8"></stop>
                      </linearGradient>
                  </defs>
              </svg>
          </div>
      </section>

      <section id="bullet-points-and-media" class="bullet-points-and-media">
        <div class="spacer"></div>
        <div class="container">
            <div class="content">
                <div class="image-column">
                    <img src="../assets/media/giphy.gif" alt="Relaxed Marmot" />
                </div>
                <div class="text-column">
                    <h2>Jamais seul avec Nous, l'assurance santé qui fait simple.</h2>
                    <div class="bullet-points">
                        <div class="bullet-point">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="32" height="32" class="" aria-hidden="true" style="vertical-align: text-bottom;"><defs><linearGradient x1="0" x2="0" y1="33%" y2="99%" id="green-to-blue-:rt:"><stop offset="0" stop-color="#7AF0C5"></stop><stop offset="0.6363636363636365" stop-color="#83D9E2"></stop><stop offset="1" stop-color="#82C0FF"></stop></linearGradient></defs><g clip-path="url(#hourglass_svg__a_:r32:)"><path fill="url(#green-to-blue-:rt:)" fill-rule="evenodd" d="M19 7.168c0 2.326-2.112 4.617-4.181 5.832C16.889 14.215 19 16.506 19 18.832c0 2.729-3.5 3.178-7 3.168s-7-.478-7-3.168c0-2.366 2.085-4.63 4.156-5.832C7.085 11.798 5 9.533 5 7.168 5 4.478 8.5 4.01 12 4s7 .439 7 3.168m-7 12.93c-2.467 0-4-.216-4-1.39 0-1.37 2.285-2.61 4-2.61s4 1.261 4 2.61c0 1.192-1.495 1.39-4 1.39" clip-rule="evenodd"></path></g><defs><clipPath id="hourglass_svg__a_:r32:"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                            <p>Une mutuelle sans carence : inscrivez-vous en 5 minutes, vous êtes couverts immédiatement !</p>
                        </div>
                        <div class="bullet-point">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="32" height="32"  aria-hidden="true" style="vertical-align: text-bottom;"><defs><linearGradient x1="0" x2="0" y1="16%" y2="97%" id="yellow-to-green-:ru:"><stop offset="0" stop-color="#8EEA7B"></stop><stop offset="0.5185185185185185" stop-color="#22E39E"></stop><stop offset="1" stop-color="#82F2CA"></stop></linearGradient></defs><path fill="url(#yellow-to-green-:ru:)" fill-rule="evenodd" d="M15.837 7A.8.8 0 0 0 16 6.519c0-1.065-1.57-2.519-4-2.519-2.392 0-4 1.47-4 2.519Q8 6.78 8.155 7h-.946a4 4 0 0 0-3.921 3.211l-1.207 6A4 4 0 0 0 6 21h11.998a4 4 0 0 0 3.921-4.789l-1.207-6A4 4 0 0 0 16.793 7zM14 7.26c0 .456-.766.74-2 .74-1.252 0-2-.277-2-.74 0-.525.804-1.26 2-1.26 1.215 0 2 .727 2 1.26m-3.25 4.49a1.25 1.25 0 1 1 2.5 0v1.5h1.5a1.25 1.25 0 0 1 0 2.5h-1.5v1.5a1.25 1.25 0 1 1-2.5 0v-1.5h-1.5a1.25 1.25 0 0 1 0-2.5h1.5z" clip-rule="evenodd"></path></svg>
                            <p>Des remboursements à la vitesse de l'éclair : 90 % des remboursements sont traités en moins de 24h.</p>
                        </div>
                        <div class="bullet-point">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="32" height="32"  aria-hidden="true" style="vertical-align: text-bottom;"><defs><linearGradient x1="0" x2="0" y1="-3%" y2="97%" id="pink-to-blue-:r10:"><stop offset="0" stop-color="#FF8FD8"></stop><stop offset="0.68" stop-color="#8D71FF"></stop><stop offset="1" stop-color="#8C99FA"></stop></linearGradient></defs><path fill="url(#pink-to-blue-:r10:)" d="M5.5 6a1.5 1.5 0 1 0-1.306-2.238C2.854 4.49 2 5.706 2 7.292c0 1.424.56 3.283 1.516 4.794.788 1.245 1.972 2.44 3.518 2.803l.02.282c.053.686.16 1.614.378 2.555.215.926.556 1.944 1.118 2.752.58.832 1.462 1.522 2.7 1.522.804 0 1.499-.239 2.071-.682.555-.43.941-1.009 1.225-1.612.54-1.15.81-2.632 1.048-3.945l.015-.082c.257-1.417.488-2.647.906-3.535.2-.428.416-.709.638-.88.205-.159.464-.264.847-.264.709 0 1.001.242 1.168.492.215.322.332.837.332 1.508q0 .25-.02.5h.02c.704 0 1.366.182 1.942.502.035-.322.058-.66.058-1.002 0-.83-.133-1.814-.668-2.617C20.25 9.508 19.292 9 18 9c-.804 0-1.498.239-2.071.682-.555.43-.941 1.009-1.225 1.612-.54 1.15-.81 2.632-1.048 3.945l-.015.082c-.257 1.417-.488 2.647-.905 3.535-.202.428-.417.708-.639.88-.205.159-.464.264-.847.264-.387 0-.724-.185-1.058-.665-.351-.505-.62-1.237-.812-2.061a15.6 15.6 0 0 1-.343-2.406c1.498-.388 2.654-1.575 3.429-2.795.959-1.51 1.534-3.37 1.534-4.78 0-1.607-.844-2.836-2.211-3.56a1.5 1.5 0 1 0-.504 2.045c.493.395.715.903.715 1.514 0 .966-.43 2.46-1.223 3.71C9.97 12.272 8.983 13 8 13c-1.012 0-1.998-.726-2.794-1.984C4.421 9.776 4 8.283 4 7.292c0-.59.226-1.101.733-1.503.224.134.487.211.767.211"></path><path fill="url(#pink-to-blue-:r10:)" d="M21.146 15.618a2.5 2.5 0 0 0-1.91-.604 2.5 2.5 0 1 0 1.91.604"></path></svg>
                            <p>Une gestion de votre santé simplifiée : inscription, garanties, devis, remboursements, tout se passe en ligne, facilement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
    </section>

      <section id="hero" class="hero top-margin">
          <div class="hero-container">
              <div class="hero-content">
                  <div class="hero-image">
                      <img src="https://6vvt7k9n.twic.pics/v1/image:prismic/Zg69YTskWekewDxa_professions-liberales.jpg" alt="Mutuelle Santé" />
                  </div>
                  <div class="hero-text">
                      <p class="mutuelle-title">Mutuelle santé</p>
                      <h1 class="hero-title">Quelle est la meilleure mutuelle santé ?</h1>
                      <p class="hero-description">
                          Il n’y a pas de bonne ou de mauvaise complémentaire santé. La meilleure mutuelle santé est celle qui s’adapte en tous points au profil de l’assuré et de ses besoins (soins courants, dentaires, optiques, hospitalisation, médecine généraliste, spécialiste et douce...). On vous explique comment choisir la meilleure mutuelle parmi les offres de complémentaire, adaptée à vos besoins et votre budget.
                      </p>
                      <div class="button-container">
                          <a href="/fr-company-discovery-dispatch" rel="nofollow" class="button">Demander un devis</a>
                      </div>
                  </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 1037 831" fill="none" aria-hidden="true" class="background-svg">
                  <g opacity="0.64" filter="url(#filter)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M246.519 412.718C266.543 370.757 296.115 332.895 329.931 301.732C354.596 278.906 381.781 262.367 408.568 250.475C508.82 205.917 625.516 218.218 714.895 282.733C738.764 299.955 762.104 321.824 781.862 349.297C808.782 386.885 843.26 493.498 764.093 539.97C685.058 586.443 595.016 524.799 556.427 519.468C517.838 514.274 479.381 528.352 456.44 539.834C450.605 542.294 380.057 598.334 343.324 604.895C311.498 610.636 273.439 605.305 249.702 580.565C208.859 538.057 223.578 460.694 246.519 412.718Z" fill="url(#gradient)"></path>
                  </g>
                  <defs>
                      <filter id="filter" x="0" y="0" width="1037" height="831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                          <feGaussianBlur stdDeviation="72"></feGaussianBlur>
                      </filter>
                      <linearGradient id="gradient" x1="518.5" y1="199.105" x2="501.564" y2="607.413" gradientUnits="userSpaceOnUse">
                          <stop offset="0.05" stop-color="#82C0FF"></stop>
                          <stop offset="0.41" stop-color="#BEAAFF"></stop>
                          <stop offset="0.9" stop-color="#FF8FD8"></stop>
                      </linearGradient>
                  </defs>
              </svg>
          </div>
      </section>
      
      <section class="section">
        <div class="hero-container">
          <div class="padding-section-small">
            <div class="container">
              <div class="lp-features_wrapper">
                <div class="lp-feature_image-wrapper">
                  <div data-format="portrait" class="lp-feature_image-wrap">
                    <img loading="lazy" alt="L&#x27;assurances décennale obligatoire des artisans"
                      src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65ef164cb8d6991caf764e28_65d61113ff25d679554ec21c_pexels-yan-krukau-8837715-1.webp"
                      class="lp-feature_image is-lp" />
                  </div>
                </div>
                <div class="lp_features_content-wrapper">
                  <h2 class="h3">Qu’est-ce qu’une assurance décennale artisan ?</h2>
                  <div class="features_rich-text w-richtext">
                    <p>
                      Pour les pros du bâtiment et de la construction, l'<strong>assurance décennale</strong>
                      est incontournable. Elle vous assure avant, pendant, et après votre chantier. Elle
                      comprend :
                    </p>
                    <ul start="" role="list">
                      <li>
                        <strong>La RC décennale (RCD)</strong>
                        : elle prend en charge les dommages survenant après la livraison du chantier, pour une période de
                        10 ans.
                      </li>
                      <li>
                        <strong>La RC professionnelle (RCP)</strong>
                        : cette garantie couvre les dommages causés à autrui lors de vos travaux, vous protégeant surtout
                        avant et pendant le chantier.
                      </li>
                      <li>
                        <strong>La garantie biennale pour l'équipement</strong>
                        : valable 2 ans, elle couvre les équipements installés sur le chantier.
                      </li>
                    </ul>
                    <p>Donc, que ce soit pour des dommages survenant après la fin des travaux ou pour ceux causés pendant
                      les travaux, l'assurance décennale est votre bouclier ! </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="padding-section-small">
            <div class="container">
              <div class="lp-features_wrapper">
                <div class="lp_features_content-wrapper">
                  <h2 class="h3">L’assurance décennale artisan est-elle obligatoire ?</h2>
                  <div class="features_rich-text w-richtext">
                    <p>Si vous êtes un artisan et que vous réalisez des travaux de construction ou de rénovation, le Code
                      civil vous qualifie de constructeur. Autrement dit vous, ou toute autre personne physique ou morale
                      dans une telle situation, devez obligatoirement souscrire à une assurance décennale.</p>
                    <p>Peu importe votre métier dans le domaine de la construction, que vous soyez architecte impliqué
                      dans la conception, maçon travaillant sur le gros œuvre, ou plombier s'occupant des
                      installations plus fines, cette règle s'applique à vous. En clair, dès que vous entrez dans un
                      contrat de prestation de construction avec un client, l'assurance décennale devient une
                      nécessité légale pour vous.</p>
                    <blockquote>💡Si vous ne souscrivez pas une assurance décennale et n’êtes pas en mesure de présenter
                      une attestation décennale sur un chantier, vous risquez des sanctions : jusqu’à 6 mois de prison et
                      75 000 € d’amende. Et surtout, en cas de sinistre responsable, vous devrez payer les réparations de
                      votre poche… Pensez à y souscrire dès le début de votre activité !</blockquote>
                  </div>
                </div>
                <div class="lp-feature_image-wrapper">
                  <div data-format="portrait" class="lp-feature_image-wrap">
                    <img loading="lazy" alt="L&#x27;assurance RC Decennale des artisans"
                      src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65ef164cb8d6991caf764e24_65d6110cbff9197e3c641ebe_pexels-tim-samuel-5838215-1.webp"
                      class="lp-feature_image is-lp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-medium">
          <div class="container">
            <div class="text-align-center">
              <h2 class="h2">L'assurance décennale artisan vous couvre avant, pendant et après le chantier</h2>
              <div class="margin-top margin-medium1-5">
                <div class="subtitle-persona">
                  <p class="subtitle_blue">Si elle est obligatoire, c’est parce que les métiers du btp, de la
                    construction et du bâtiment sont très risqués. Avec la décennale, vous êtes protégé tout au long de
                    votre activité.</p>
                </div>
              </div>
            </div>
            <div class="spacer-large"></div>
            <a href="#" class="lightbox_component w-inline-block w-lightbox">
              <img
                src="https://cdn.prod.website-files.com/6256799c3b49378c9309d264/65ca3bb429f61cbb14ab15a1_Imagery%20RCDA%20timeline.webp"
                loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 89vw, 798px"
                srcset="https://cdn.prod.website-files.com/6256799c3b49378c9309d264/65ca3bb429f61cbb14ab15a1_Imagery%20RCDA%20timeline-p-500.webp 500w, https://cdn.prod.website-files.com/6256799c3b49378c9309d264/65ca3bb429f61cbb14ab15a1_Imagery%20RCDA%20timeline-p-800.webp 800w, https://cdn.prod.website-files.com/6256799c3b49378c9309d264/65ca3bb429f61cbb14ab15a1_Imagery%20RCDA%20timeline-p-1080.webp 1080w, https://cdn.prod.website-files.com/6256799c3b49378c9309d264/65ca3bb429f61cbb14ab15a1_Imagery%20RCDA%20timeline.webp 1600w"
                alt="RCDA Timeline" class="lightbox_image" />
            </a>
            <div class="spacer-large"></div>
            <div class="button_center">
              <a href="tel:0972880101" class="button-secondary w-inline-block">
                <div class="iconx16 w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <g clip-path="url(#a)">
                      <path fill="#030222"
                        d="m15.01 10.01-3.07-1.317a1.632 1.632 0 0 0-1.912.468l-.857 1.046a9.324 9.324 0 0 1-3.375-3.346L6.844 6c.56-.456.753-1.24.47-1.907L5.99.985A1.641 1.641 0 0 0 4.12.042L1.268.7A1.626 1.626 0 0 0 0 2.293C0 9.853 6.147 16 13.706 16c.768 0 1.423-.521 1.566-1.266l.658-2.855a1.585 1.585 0 0 0-.92-1.869Zm-.513 1.53-.66 2.857c-.014.034-.065.102-.131.102C6.975 14.5 1.5 9.024 1.5 2.293a.13.13 0 0 1 .104-.131l2.855-.659a.14.14 0 0 1 .156.078l1.317 3.073a.136.136 0 0 1-.04.158L4.37 6.034a.75.75 0 0 0-.199.91 10.69 10.69 0 0 0 4.86 4.86c.284.153.69.071.911-.198l1.25-1.527c.035-.044.1-.06.154-.036l3.07 1.316c.06.053.094.119.082.181Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="button-text">09 72 88 01 01</div>
              </a>
              <a data-property-ctaText="Mon devis en 5 minutes" data-analytics="Cta Subscription Start Clicked"
                data-property-position="Hero" data-property-pageName="Home" href="/devis"
                class="button-primary plausible-event-name--startquote w-inline-block">
                <div class="button-text">Mon devis en 3 minutes</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="arrow_cta">
                  <path fill="#fff"
                    d="m8.935 2.207 5.5 5.25a.75.75 0 0 1 0 1.086l-5.5 5.25A.75.75 0 0 1 7.9 12.707l4.147-3.956H1.417a.75.75 0 0 1 0-1.5h10.628L7.898 3.295a.753.753 0 0 1-.025-1.063c.287-.3.734-.31 1.062-.025Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="section overflow-hidden w-condition-invisible">
        <div class="padding-section-small-medium">
          <div class="container">
            <div class="text-align-center">
              <h2 class="h3 w-dyn-bind-empty"></h2>
              <div class="margin-top margin-medium1-5">
                <div class="subtitle-persona">
                  <p class="subtitle_blue">Parce que chaque activité professionnelle est unique, vous pouvez ajuster les
                    garanties de nos contrats d’assurance
                    à vos besoins tout au long de l’année. Pour vous concentrer sur ce qui compte vraiment : votre
                    travail.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="margin-top margin-large">
              <div class="company_cards_wrapper">
                <div class="swiper company_cards_collection w-dyn-list">
                  <div class="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="margin-top margin-large">
              <div class="navigation_cards_wrapper">
                <div class="company_button-wrapper">
                  <a aria-label="Button Slider" href="#" class="company_button swiper-prev w-inline-block">
                    <div class="company_button_icon w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                        <g id="icon/arrow-left">
                          <path id="Vector" fill="#fff"
                            d="M23 12c0 .412-.347.75-.778.75H4.537l6.595 6.998a.731.731 0 0 1-.053 1.059.812.812 0 0 1-.524.193.785.785 0 0 1-.576-.247l-7.776-8.25a.729.729 0 0 1 0-1.007l7.776-8.25a.8.8 0 0 1 1.1-.052.731.731 0 0 1 .052 1.06l-6.594 6.995h17.686c.43 0 .777.338.777.75Z" />
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a aria-label="Button Slider" href="#" class="company_button swiper-next w-inline-block">
                    <div class="company_button_icon w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
                        <g id="icon/arrow-right">
                          <path id="Vector" fill="#fff"
                            d="m22.798 12.506-7.776 8.25a.86.86 0 0 1-.577.244.792.792 0 0 1-.523-.195.731.731 0 0 1-.052-1.059l6.594-6.996H2.778c-.43 0-.778-.336-.778-.708 0-.373.348-.792.778-.792h17.686l-6.596-7a.731.731 0 0 1 .053-1.059.8.8 0 0 1 1.099.052l7.777 8.25a.736.736 0 0 1 .001 1.012Z" />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-small">
          <div class="container">
            <div class="lp-features_wrapper">
              <div class="lp_features_content-wrapper">
                <h2 class="h3">Que couvre l’assurance décennale artisan ?</h2>
                <div class="features_rich-text w-richtext">
                  <p>L’assurance décennale artisan du bâtiment s’applique par exemple, en cas de :</p>
                  <ul start="" role="list">
                    <li>Fissures importantes causant un défaut d’étanchéité</li>
                    <li>Glissement de terrain dû à un vice de sol</li>
                    <li>Fondations, toiture ou charpente défectueuse</li>
                    <li>Défaut de conformité sur un élément d’équipement, comme le dysfonctionnement d’une pompe à
                      chaleur</li>
                    <li>Défaut d’isolation phonique</li>
                  </ul>
                  <blockquote>💡Depuis la loi n°2014-626 du 18 juin 2014 dite Macron, les professionnels qui doivent
                    s’assurer en décennale doivent indiquer les coordonnées de leur assureur sur leurs devis et
                    factures. Doivent être mentionnés le nom et les coordonnées de l’assureur, le numéro du contrat
                    d’assurance et la territorialité (zone géographique couverte par la garantie).</blockquote>
                </div>
              </div>
              <div class="lp-feature_image-wrapper">
                <div data-format="portrait" class="lp-feature_image-wrap">
                  <img loading="lazy" alt="L&#x27;assurances décennale des artisans"
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65ef164cb8d6991caf764e20_65d61103badcce181f12f27f_pexels-cottonbro-studio-7480448-1.webp"
                    class="lp-feature_image is-lp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-small">
          <div class="container">
            <div class="button_center">
              <a href="tel:0972880101" class="button-secondary w-inline-block">
                <div class="iconx16 w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <g clip-path="url(#a)">
                      <path fill="#030222"
                        d="m15.01 10.01-3.07-1.317a1.632 1.632 0 0 0-1.912.468l-.857 1.046a9.324 9.324 0 0 1-3.375-3.346L6.844 6c.56-.456.753-1.24.47-1.907L5.99.985A1.641 1.641 0 0 0 4.12.042L1.268.7A1.626 1.626 0 0 0 0 2.293C0 9.853 6.147 16 13.706 16c.768 0 1.423-.521 1.566-1.266l.658-2.855a1.585 1.585 0 0 0-.92-1.869Zm-.513 1.53-.66 2.857c-.014.034-.065.102-.131.102C6.975 14.5 1.5 9.024 1.5 2.293a.13.13 0 0 1 .104-.131l2.855-.659a.14.14 0 0 1 .156.078l1.317 3.073a.136.136 0 0 1-.04.158L4.37 6.034a.75.75 0 0 0-.199.91 10.69 10.69 0 0 0 4.86 4.86c.284.153.69.071.911-.198l1.25-1.527c.035-.044.1-.06.154-.036l3.07 1.316c.06.053.094.119.082.181Z" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="button-text">09 72 88 01 01</div>
              </a>
              <a data-property-ctaText="Mon devis en 5 minutes" data-analytics="Cta Subscription Start Clicked"
                data-property-position="Hero" data-property-pageName="Home" href="/devis"
                class="button-primary plausible-event-name--startquote w-inline-block">
                <div class="button-text">Mon devis en 3 minutes</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="arrow_cta">
                  <path fill="#fff"
                    d="m8.935 2.207 5.5 5.25a.75.75 0 0 1 0 1.086l-5.5 5.25A.75.75 0 0 1 7.9 12.707l4.147-3.956H1.417a.75.75 0 0 1 0-1.5h10.628L7.898 3.295a.753.753 0 0 1-.025-1.063c.287-.3.734-.31 1.062-.025Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-small">
          <div class="container">
            <div class="text-align-center">
              <h2 class="h3">Tableau de garanties</h2>
            </div>
            <div class="margin-top margin-large w-dyn-list">
              <div role="list" class="warranties_wrapper w-dyn-items">
                <div role="listitem" class="warranties_item w-dyn-item">
                  <img
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65e893361d2c9df28ce7cbd7_image%20(2).webp"
                    loading="lazy" alt="" class="warranties_item_image" />
                  <div class="warranties_item_content">
                    <h3 class="text-size-subtitle">Responsabilité civile générale avant et/ou après Réception des
                      travaux</h3>
                    <p class="text-size-regular">Dommages corporels, matériels et immatériels consécutifs causés à des
                      tiers pendant le chantier</p>
                  </div>
                </div>
                <div role="listitem" class="warranties_item w-dyn-item">
                  <img
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65e893210002255c318f9780_Warranty%2064x64.webp"
                    loading="lazy" alt="" class="warranties_item_image" />
                  <div class="warranties_item_content">
                    <h3 class="text-size-subtitle">RC Décennale pour travaux de construction non soumis à l’obligation
                      d’assurance</h3>
                    <p class="text-size-regular">Dommages pour les ouvrages liés aux travaux publics.</p>
                  </div>
                </div>
                <div role="listitem" class="warranties_item w-dyn-item">
                  <img
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65e8931317ea8fdd5f0ce4e8_image%20(1).webp"
                    loading="lazy" alt="" class="warranties_item_image" />
                  <div class="warranties_item_content">
                    <h3 class="text-size-subtitle">RC Décennale en tant que sous-traitant en cas de dommages de nature
                      décennale</h3>
                    <p class="text-size-regular">Dommages pour des ouvrages à usage d’habitation ou non en tant que
                      sous-traitant.</p>
                  </div>
                </div>
                <div role="listitem" class="warranties_item w-dyn-item">
                  <img
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65e892ef3d30885ae94fac66_house.webp"
                    loading="lazy" alt="" class="warranties_item_image" />
                  <div class="warranties_item_content">
                    <h3 class="text-size-subtitle">RC Décennale pour travaux de construction soumis à l’obligation
                      d’assurance</h3>
                    <p class="text-size-regular">Dommages pour des ouvrages à usage d’habitation ou non.</p>
                  </div>
                </div>
                <div role="listitem" class="warranties_item w-dyn-item">
                  <img
                    src="https://cdn.prod.website-files.com/625fd2b3d45f6f53bf77e077/65e892cc93e1b4be641995ca_image%20(3).webp"
                    loading="lazy" alt="" class="warranties_item_image" />
                  <div class="warranties_item_content">
                    <h3 class="text-size-subtitle">Bon fonctionnement des éléments d’équipement dissociables des
                      ouvrages soumis à l’assurance obligatoire</h3>
                    <p class="text-size-regular">La prise en charge des coûts de réparation ou de remplacement des
                      éléments d'équipement dissociables.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-medium">
          <div class="container">
            <div class="text-align-center">
              <h2 class="h3">Nous répondons à vos questions</h2>
            </div>
            <div class="margin-top margin-large w-dyn-list">
              <div role="list" class="faq_wrapper">
                <div v-for="(item, index) in faqItems" :key="index" role="listitem" class="faq_item">
                  <div class="faq_header" @click="toggle(index)">
                    <h3 class="faq_title">{{ item.question }}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"
                      class="iconx32" :style="{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }">
                      <path fill="#030222"
                        d="m22.384 13.588-5.759 5.463a.816.816 0 0 1-.625.282.906.906 0 0 1-.625-.25l-5.758-5.495a.925.925 0 0 1-.035-1.298.903.903 0 0 1 1.285-.035L16 17.153l5.133-4.902a.903.903 0 0 1 1.286.036.93.93 0 0 1-.035 1.3Z" />
                    </svg>
                  </div>
                  <div class="faq_answer"
                    :style="{ height: activeIndex === index ? 'auto' : '0px', overflow: 'hidden' }">
                    <div class="rich_text_faq" v-html="item.answer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background_linear is-vw">
          <div
            style="-webkit-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
            class="circle_background_linear"></div>
        </div>
      </section>
      <section class="section overflow-hidden">
        <section class="section overflow-hidden">
          <div class="padding-section-small">
            <div class="container">
              <div class="text-align-center">
                <div class="h3">Une question ? Nous sommes là pour vous.</div>
                <div class="margin-top margin-custom1">
                  <div class="subtitle-wrapper">
                    <p class="subtitle_blue">
                      Nous sommes disponibles par téléphone, chat, SMS ou mail<br />
                      du lundi au vendredi, de 9h à 18h depuis la France Métropolitaine.<br />En moyenne, nos équipes
                      vous répondent en 3 minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="margin-top margin-large">
                <div class="button_center">
                  <button @click="showModal = true" type="button" aira-label="Open modal" class="button-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" class="iconx16">
                      <g clip-path="url(#a)">
                        <path fill="#030222"
                          d="m15.01 10.01-3.07-1.317a1.632 1.632 0 0 0-1.912.468l-.857 1.046a9.324 9.324 0 0 1-3.375-3.346L6.844 6c.56-.456.753-1.24.47-1.907L5.99.985A1.641 1.641 0 0 0 4.12.042L1.268.7A1.626 1.626 0 0 0 0 2.293C0 9.853 6.147 16 13.706 16c.768 0 1.423-.521 1.566-1.266l.658-2.855a1.585 1.585 0 0 0-.92-1.869Zm-.513 1.53-.66 2.857c-.014.034-.065.102-.131.102C6.975 14.5 1.5 9.024 1.5 2.293a.13.13 0 0 1 .104-.131l2.855-.659a.14.14 0 0 1 .156.078l1.317 3.073a.136.136 0 0 1-.04.158L4.37 6.034a.75.75 0 0 0-.199.91 10.69 10.69 0 0 0 4.86 4.86c.284.153.69.071.911-.198l1.25-1.527c.035-.044.1-.06.154-.036l3.07 1.316c.06.053.094.119.082.181Z">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    <div class="button-text">Contacter un conseiller</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div v-if="showModal" class="modal_contact">
        <div @click="closeModal" class="modal-shadow"></div>
        <div class="modal-contact_card">
          <div class="modal-contact_header">
            <div class="h2">
              Contacter un <br />conseiller
            </div>
            <img src="https://cdn.prod.website-files.com/6256799c3b49378c9309d264/62c3ffccafc02d6d47ea31ec_close.webp"
              loading="lazy" width="24" data-w-id="e73cc6ba-b999-741b-8e07-1f90b32ad45f" alt=""
              class="modal-contact_close" @click="closeModal" />
          </div>
          <div class="o-content-contact">
            <div class="contact_item">
              <div class="flex-contact o-top-content">
                <div class="garantie_illu bg_moss">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path id="Vector" fill="#02200E"
                      d="m22.716 15.497-4.772-2.047a2.141 2.141 0 0 0-2.473.613l-1.553 1.897a14.748 14.748 0 0 1-5.874-5.873l1.9-1.555a2.111 2.111 0 0 0 .601-2.477L8.503 1.283A2.13 2.13 0 0 0 6.075.054L1.649 1.081A2.109 2.109 0 0 0 0 3.146C0 14.644 9.356 24 20.855 24c.995 0 1.847-.677 2.07-1.647l1.022-4.428a2.132 2.132 0 0 0-1.231-2.428Zm-1.252 6.52a.63.63 0 0 1-.608.483C10.182 22.5 1.5 13.82 1.5 3.146c0-.29.198-.538.485-.604L6.41 1.515a.627.627 0 0 1 .714.36l2.043 4.768a.628.628 0 0 1-.177.73L6.623 9.314a.749.749 0 0 0-.196.91 16.236 16.236 0 0 0 7.354 7.354.75.75 0 0 0 .912-.198l1.94-2.367a.632.632 0 0 1 .726-.18l4.763 2.042c.277.12.429.42.361.713l-1.019 4.43Z"
                      class="Vector"></path>
                  </svg>
                </div>
                <div class="contact_title">Appelez un conseiller</div>
                <p class="contact_text">
                  Appel non surtaxé<br />Un conseiller disponible maintenant
                </p>
              </div>
              <a id="contact-modal-call-button" data-clipboard-text="09 72 88 01 01"
                data-w-id="e73cc6ba-b999-741b-8e07-1f90b32ad46a" href="tel:0972880101"
                class="button-call w-inline-block">
                <p class="button-call-text">09 72 88 01 01</p>
                <div class="flex is--clipboard w-embed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16">
                    <g clip-path="url(#copie)">
                      <path fill=currentColor
                        d="M15.956 2.207 14.042.293A.997.997 0 0 0 13.334 0H8.222a2 2 0 0 0-2 2v8c.028 1.106.925 2 2.028 2h6c1.1 0 2-.9 2-2V2.914a1 1 0 0 0-.294-.707ZM14.75 10a.5.5 0 0 1-.5.5H8.222a.5.5 0 0 1-.5-.5V2.004a.5.5 0 0 1 .5-.5h4L12.25 3a1 1 0 0 0 1 1h1.472v6h.028Zm-6 4a.5.5 0 0 1-.5.5H2.222a.5.5 0 0 1-.5-.5l.027-7.997a.5.5 0 0 1 .5-.5h3V4h-3a2 2 0 0 0-2 2v8c0 1.103.896 2 2 2h6c1.1 0 2-.9 2-2v-1h-1.47l-.028 1Z" />
                    </g>
                    <defs>
                      <clipPath id="copie">
                        <path fill="#fff" d="M0 0h16v16H0z" transform="translate(.25)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div class="o-tooltips">
                  <p class="o-span-tooltips">Copier dans le presse-papier</p>
                </div>
              </a>
            </div>
            <div class="contact_item">
              <div class="flex-contact o-top-content">
                <div class="garantie_illu bg_hazy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
                    <path fill="#270406"
                      d="M19.855 4.552a10.328 10.328 0 0 0-7.36-3.052C6.758 1.5 2.09 6.169 2.09 11.906c0 1.833.478 3.624 1.388 5.203L2 22.5l5.517-1.448c1.519.83 3.23 1.265 4.974 1.265h.004C18.228 22.317 23 17.648 23 11.911c0-2.78-1.181-5.39-3.145-7.36Zm-7.36 16.012A8.634 8.634 0 0 1 8.09 19.36l-.314-.187-3.272.858.872-3.193-.206-.328a8.62 8.62 0 0 1-1.322-4.603c0-4.767 3.881-8.648 8.653-8.648 2.31 0 4.481.9 6.113 2.536 1.63 1.636 2.634 3.806 2.63 6.117 0 4.772-3.98 8.653-8.748 8.653Zm4.744-6.478c-.258-.131-1.537-.76-1.777-.844-.239-.089-.412-.131-.585.131-.174.263-.67.844-.825 1.022-.15.174-.305.197-.563.066-1.528-.764-2.531-1.364-3.539-3.094-.267-.46.267-.426.764-1.42.084-.174.042-.324-.023-.455-.066-.131-.586-1.41-.802-1.931-.21-.506-.426-.436-.586-.445-.15-.01-.323-.01-.497-.01a.963.963 0 0 0-.693.324c-.24.262-.91.89-.91 2.17 0 1.28.933 2.517 1.06 2.69.13.174 1.832 2.8 4.443 3.929 1.65.712 2.297.773 3.122.651.502-.075 1.538-.628 1.753-1.237.216-.61.216-1.13.15-1.238-.06-.117-.234-.182-.492-.31Z">
                    </path>
                  </svg>
                </div>
                <div class="contact_title">Nous écrire</div>
                <p class="contact_text">Nous répondons à vos questions du lundi au vendredi de 09h00 à 18h00.</p>
              </div>
              <a id="contact-modal-book-a-slot"
                href="https://wa.me/33767779822?text=Bonjour,%20Je%20souhaite%20%C3%A9changer%20au%20sujet%20d'une%20assurance%20professionnelle.%20Pour%20l'activit%C3%A9%20suivante%20:%20Ma%20question%20est%20:%20"
                target="_blank" class="button-secondary w-inline-block">
                <div class="button-text">Échanger sur Whatsapp</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer class=" o-bg-blue900 p-4 text-center" style="padding: 20px;text-align: center;">
        <p class="footer-copyright m-0">© 2025 DECENNALE EXPRESS tous droits réservés.</p>

      </footer>
    </div>
  </div>
</template>
