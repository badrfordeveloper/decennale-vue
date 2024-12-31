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
        spaceBetween: 20,
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
                  <img src='../assets/logo.png' width="300" height="75" alt="" />
                </a>
              </div>
              <div class="nav-button-group">
                <a href="/devis" @click="clearLocalStorage"
                  class="nav-button-primary plausible-event-name--startquote w-inline-block">
                  <div class="button-text hide-mobile-landscape">Mon devis en 3 minutes</div>
                  <div class="button-text show-mobile-landscape">Devis en 3 minutes</div>
                </a>
              </div>
            </div>
          </div>
        </header>
        <section class="hero">
          <div class="padding-hero-section">
            <div class="container">
              <div class="lp-hero_component">
                <div class="lp-hero_content">
                  <div class="hero_title">
                    <h1 class="h1">ATTESTATION EXPRESS</h1>
                  </div>
                  <div class="text-size-regular">Assurez votre activité en ligne en 3 minutes et concentrez-vous sur ce
                    qui compte vraiment : votre travail de artisan. On s’occupe du reste.</div>
                  <div class="hero_subtitle-wrapper ">
                    <div class="hero-list_item-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 16 16"
                        class="iconx16">
                        <path fill="#01044A"
                          d="M14.753 3.219c.319.294.319.769 0 1.034l-8.25 8.25c-.266.319-.74.319-1.034 0l-4.25-4.25c-.292-.265-.292-.74 0-1.034a.754.754 0 0 1 1.061 0L6 10.94l7.719-7.722c.293-.292.769-.292 1.034 0Z">
                        </path>
                      </svg>
                      <div class="text-size-regular">Votre devis en 3 minutes</div>
                    </div>
                    <div class="hero-list_item-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 16 16"
                        class="iconx16">
                        <path fill="#01044A"
                          d="M14.753 3.219c.319.294.319.769 0 1.034l-8.25 8.25c-.266.319-.74.319-1.034 0l-4.25-4.25c-.292-.265-.292-.74 0-1.034a.754.754 0 0 1 1.061 0L6 10.94l7.719-7.722c.293-.292.769-.292 1.034 0Z">
                        </path>
                      </svg>
                      <div class="text-size-regular">Des conseillers disponibles par téléphone, mail et SMS</div>
                    </div>
                    <div class="hero-list_item-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 16 16"
                        class="iconx16">
                        <path fill="#01044A"
                          d="M14.753 3.219c.319.294.319.769 0 1.034l-8.25 8.25c-.266.319-.74.319-1.034 0l-4.25-4.25c-.292-.265-.292-.74 0-1.034a.754.754 0 0 1 1.061 0L6 10.94l7.719-7.722c.293-.292.769-.292 1.034 0Z">
                        </path>
                      </svg>
                      <div class="text-size-regular">Sans engagement et sans frais cachés</div>
                    </div>
                  </div>
                  <div class="button-group">
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
                  </div>
                </div>
                <div class="lp-hero_image-wrapper">
                  <div data-format="landscape" class="lp-feature_image-wrap">
                    <img loading="lazy" alt="" src="../assets/images/decennale.png" class="lp-feature_image is-lp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="background_linear is-vw">
          <div
            style="-webkit-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-50%, -20%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
            class="circle_background_linear"></div>
        </div>
      </div>
      <section class="section">
        <div class="spacer-large"></div>
        <div class="spacer-large"></div>
        <div class="container">
          <div class="text-align-center">
            <h2 class="h3">Nos partenaires</h2>
          </div>
          <div class="">
            <div class="partners-carousel">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(partner, index) in partners" :key="index">
                    <img :src="partner.logo" :alt="partner.name" min-height="150"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="padding-section-64">
          <div class="container">
            <div class="text-align-center">
              <h2 class="h3">L'assurance décennale que les artisans attendaient</h2>
            </div>
            <div class="margin-top margin-large">
              <div class="garantie_wrapper">
                <div id="w-node-d9bbea03-d608-8058-95c5-9fe62bb9fbc2-d9d1c075" class="garantie_item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 48 48" fill="none"
                    class="garantie_illu">
                    <g id="Avatar">
                      <rect width="48" height="48" rx="24" fill="url(#paint0_radial_1664_34465)"></rect>
                      <g id="icon/receipt" clip-path="url(#clip0_1664_34465)">
                        <path id="Vector"
                          d="M28.5 18.708c.413 0 .75.38.75.75 0 .455-.337.75-.75.75h-9c-.414 0-.75-.295-.75-.75 0-.37.336-.75.75-.75h9ZM18.75 28.5a.75.75 0 0 1 .75-.75h9c.413 0 .75.337.75.75s-.337.75-.75.75h-9a.751.751 0 0 1-.75-.75Zm9.75-5.292c.413 0 .75.38.75.75 0 .455-.337.75-.75.75h-9c-.414 0-.75-.295-.75-.75 0-.37.336-.75.75-.75h9Zm-9.784-8.86 2.13-2.128a.748.748 0 0 1 1.059 0L24 14.314l2.095-2.094a.748.748 0 0 1 1.06 0l2.128 2.128 2.475-2.162a.746.746 0 0 1 .801-.119.752.752 0 0 1 .441.683v22.5c0 .295-.173.52-.44.684a.74.74 0 0 1-.802-.121l-2.475-2.161-2.128 2.128a.744.744 0 0 1-1.06 0L24 33.684l-2.095 2.096a.744.744 0 0 1-1.06 0l-2.13-2.128-2.47 2.16a.745.745 0 0 1-.805.122c-.268-.164-.44-.389-.44-.684v-22.5a.75.75 0 0 1 1.244-.564l2.472 2.162Zm-.46 17.672a.795.795 0 0 1 1.024.075l2.095 2.096 2.095-2.096a.744.744 0 0 1 1.06 0l2.095 2.096 2.095-2.096a.792.792 0 0 1 1.022-.075l1.758 1.575V14.403l-1.758 1.536a.747.747 0 0 1-1.022-.034l-2.095-2.094-2.095 2.094a.748.748 0 0 1-1.06 0l-2.095-2.094-2.095 2.094a.75.75 0 0 1-1.024.034L16.5 14.403v19.192l1.756-1.575Z"
                          fill="#070042"></path>
                      </g>
                    </g>
                    <defs>
                      <radialGradient id="paint0_radial_1664_34465" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(48 0 0 191.2 0 48)">
                        <stop stop-color="#C9F0FC"></stop>
                        <stop offset="1" stop-color="#CDEFFA"></stop>
                      </radialGradient>
                      <clipPath id="clip0_1664_34465">
                        <path fill="#fff" d="M12 12h24v24H12z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="garantie_content-wrapper">
                    <div class="items-title">Votre devis gratuit
                      en 3 minutes</div>
                    <p class="point_p">Enfin un devis rapide et transparent pour savoir combien coûte votre assurance
                      decennale.</p>
                  </div>
                </div>
                <div id="w-node-d9bbea03-d608-8058-95c5-9fe62bb9fbd3-d9d1c075" class="garantie_item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" class="garantie_illu">
                    <g id="Avatar">
                      <rect width="48" height="48" rx="24" fill="url(#paint0_radial_1664_34473)"></rect>
                      <g id="icon/thumbs-up">
                        <path id="Vector"
                          d="M25.538 15.83a1.124 1.124 0 1 1 2.17.595l-.211.769a10.248 10.248 0 0 1-1.158 2.667.747.747 0 0 0 .638 1.144H33c.83 0 1.5.67 1.5 1.5 0 .53-.277.998-.694 1.265a.744.744 0 0 0-.248.999 1.505 1.505 0 0 1-.619 2.072.75.75 0 0 0-.248 1.125 1.492 1.492 0 0 1-.722 2.34.754.754 0 0 0-.502.87c.024.104.033.212.033.324 0 .83-.67 1.5-1.5 1.5h-4.195a3.78 3.78 0 0 1-2.082-.628l-1.804-1.205a3.706 3.706 0 0 1-1.05-1.06.754.754 0 0 0-1.04-.215.753.753 0 0 0-.216 1.04c.38.577.876 1.084 1.471 1.482l1.805 1.205a5.234 5.234 0 0 0 2.911.881H30c1.655 0 3-1.345 3-3v-.028a3 3 0 0 0 1.27-3.755 2.994 2.994 0 0 0 .849-3.093A2.994 2.994 0 0 0 36 22.5c0-1.655-1.345-3-3-3h-4.762c.29-.614.53-1.252.707-1.917l.211-.769a2.632 2.632 0 0 0-1.842-3.225 2.628 2.628 0 0 0-3.225 1.842l-.21.77a6.38 6.38 0 0 1-2.729 3.702l-.145.094a4.897 4.897 0 0 0-1.383 1.322.748.748 0 0 0 .187 1.045.747.747 0 0 0 1.046-.187c.253-.361.572-.675.956-.914l.145-.094a7.863 7.863 0 0 0 3.37-4.57l.212-.77ZM13.5 22.5h3V33h-3V22.5Zm-1.5 0V33c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5V22.5c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5Z"
                          fill="#433A00"></path>
                      </g>
                    </g>
                    <defs>
                      <radialGradient id="paint0_radial_1664_34473" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(48 0 0 191.52 0 48)">
                        <stop stop-color="#FFECA8"></stop>
                        <stop offset="1" stop-color="#FFF1BE"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <div class="garantie_content-wrapper">
                    <div class="items-title">Attestation en 24h</div>
                    <p class="point_p">Vous recevez un accord principe immédiat et votre attestation en moins de 24 h.
                    </p>
                  </div>
                </div>
                <div id="w-node-d9bbea03-d608-8058-95c5-9fe62bb9fbe2-d9d1c075" class="garantie_item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" class="garantie_illu">
                    <g id="Avatar">
                      <rect width="48" height="48" rx="24" fill="url(#paint0_radial_1664_34482)"></rect>
                      <g id="icon/piggy-bank">
                        <path id="Vector"
                          d="M19.28 17.658c-.4-.062-.61-.404-.55-.768A4.67 4.67 0 0 1 23.332 13c2.034 0 3.763 1.3 4.4 3.111.125.31-.058.728-.404.851a.664.664 0 0 1-.85-.407 3.337 3.337 0 0 0-6.433.555.668.668 0 0 1-.767.548ZM28.666 24c0-.554.445-1 1-1 .554 0 1 .446 1 1s-.446 1-1 1c-.555 0-1-.446-1-1Zm3.687-5.758L32 19.629c.88.725 1.65 1.642 2.112 2.704h.555c.737 0 1.333.596 1.333 1.334v4c0 .737-.596 1.333-1.333 1.333h-1.334c-.687.88-1.604 1.65-2.666 2.113v1.22a2 2 0 0 1-2 2h-1.334a2 2 0 0 1-2-2v-.666h-2.666v.666a2 2 0 0 1-2 2h-1.334a2 2 0 0 1-2-2v-2A6.66 6.66 0 0 1 14.667 25a2.728 2.728 0 0 1-1.16-5.167l.195-.095a.664.664 0 0 1 .894.295.668.668 0 0 1-.298.896l-.194.096c-.472.238-.808.72-.808 1.25 0 .767.661 1.392 1.43 1.392h.074a6.623 6.623 0 0 1 6.496-5.334h6.387A4.004 4.004 0 0 1 30.667 17h.72c.65 0 1.126.613.967 1.242Zm-11.02 1.425a5.333 5.333 0 0 0-3.2 9.6l.533.4v2.666c0 .367.3.667.666.667h1.334c.366 0 .666-.3.666-.667v-2h5.334v2c0 .367.3.667.666.667h1.334c.366 0 .666-.3.666-.667v-2.095l.8-.346a5.342 5.342 0 0 0 2.134-1.692l.4-.533h2v-4h-1.43l-.345-.8a5.342 5.342 0 0 0-1.692-2.134l-.708-.533.466-1.867h-.291a2.66 2.66 0 0 0-1.988.888l-.4.446h-6.946Z"
                          fill="#063519"></path>
                      </g>
                    </g>
                    <defs>
                      <radialGradient id="paint0_radial_1664_34482" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(48 0 0 190.88 0 48)">
                        <stop stop-color="#E1F5A8"></stop>
                        <stop offset="1" stop-color="#E4F5B5"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                  <div class="garantie_content-wrapper">
                    <div class="items-title">Sans frais de dossier</div>
                    <p class="point_p">Et sans primo comptant. Avec nous, pas de frais cachés.</p>
                  </div>
                </div>
                <div id="w-node-d9bbea03-d608-8058-95c5-9fe62bb9fbf1-d9d1c075" class="garantie_item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" class="garantie_illu">
                    <g id="Avatar">
                      <rect width="48" height="48" rx="24" fill="url(#paint0_radial_1664_34491)"></rect>
                      <g id="icon/circle-euro" clip-path="url(#clip0_1664_34491)">
                        <path id="Vector"
                          d="M34.5 24a10.5 10.5 0 1 0-21 0 10.5 10.5 0 0 0 21 0ZM12 24a12 12 0 1 1 24 0 12 12 0 0 1-24 0Zm6 .75h1.134a5.464 5.464 0 0 1 .01-1.5H18a.752.752 0 0 1-.75-.75c0-.413.337-.75.75-.75h1.603a5.284 5.284 0 0 1 4.767-3h1.927c.412 0 .75.337.75.75s-.338.75-.75.75H24.37a3.79 3.79 0 0 0-3.018 1.5H25.5c.413 0 .75.337.75.75s-.337.75-.75.75h-4.833a3.933 3.933 0 0 0-.014 1.5H25.5c.413 0 .75.337.75.75s-.337.75-.75.75h-4.2a3.78 3.78 0 0 0 3.07 1.57h1.927c.412 0 .75.338.75.75 0 .413-.338.75-.75.75H24.37a5.285 5.285 0 0 1-4.8-3.07H18a.752.752 0 0 1-.75-.75c0-.413.337-.75.75-.75Z"
                          fill="#070042"></path>
                      </g>
                    </g>
                    <defs>
                      <radialGradient id="paint0_radial_1664_34491" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="matrix(48 0 0 189.44 0 48)">
                        <stop stop-color="#DED1F9"></stop>
                        <stop offset="1" stop-color="#E1D8F8"></stop>
                      </radialGradient>
                      <clipPath id="clip0_1664_34491">
                        <path fill="#fff" d="M12 12h24v24H12z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="garantie_content-wrapper">
                    <div class="items-title">Des tarifs plus justes</div>
                    <p class="point_p">Nous récompensons votre savoir-faire et expérience avec des prix plus
                      accessibles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="spacer-large"></div>
          </div>
        </div>
      </section>
      <section class="section">
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
                href="https://wa.me/33972880101?text=Bonjour,%20Je%20souhaite%20%C3%A9changer%20au%20sujet%20d'une%20assurance%20professionnelle.%20Pour%20l'activit%C3%A9%20suivante%20:%20Ma%20question%20est%20:%20"
                target="_blank" class="button-secondary w-inline-block">
                <div class="button-text">Échanger sur Whatsapp</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer class=" o-bg-blue900 p-4 text-center" style="padding: 20px;text-align: center;">
        <p class="footer-copyright m-0">© 2025 DECENNALE EXPRESS tous droits réservés. STE GLS LASSURANCES.</p>

      </footer>
    </div>
  </div>
</template>
