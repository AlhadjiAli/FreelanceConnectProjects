import Link from "next/link";
import React, { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import TestimoinalSlider2 from "../src/components/Slider/TestimonialSlider2";
import Layout from "../src/layouts/Layout";
import alhalig from "../public/assets/images/team/alhalig.png";
import Image from 'next/image';
import Team from "./team";
import Teams from "./teams";
import ClientSection from "../src/components/clients";

   /* public\assets\images\team\alhalig.png */

const logos = [
  {src: "https://globallogistics.cm/assets/img/logo-2.png", alt: "Global Logistique"},
  {src: "./assets/images/client/logo-am.png", alt: "Accent Media"},
  {src: "./assets/images/client/logo-ga.png", alt: "VTI Global Academic"},
  {src: "./assets/images/client/logo-gb.png", alt: "Gambia Connect"},
  {src: "./assets/images/client/nsani-care.png", alt: "Nsani-Care"}
];

const Index3 = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const Isotope = require("isotope-layout");
        new Isotope(".masonry-place-row", {
          itemSelector: ".place-column",
          percentPosition: true,
          masonry: {
            columnWidth: ".place-column",
          },
        });
      }
    }, 1000);
  }, []);

  return (
    <Layout header={3}>
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-three bg_cover"
          style={{
            backgroundImage: "url(assets/images/hero/team-dev.webp)",
          }}
          >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="wow fadeInUp" data-wow-delay=".30s">
                  Réunir les meilleurs freelances d'Afrique pour réussir ensemble.
                  </h1><br/><br/><br/>
                  <h3 className="wow fadeInDown" data-wow-delay=".50s">
                  Rejoignez notre communauté de professionnels qualifiés et améliorez votre jeu en freelance.
                  </h3>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      
      {/* <Teams/> */}

      {/*====== Start Features Section ======*/}
      <div className={styles.whiteSpace}> {/* Création de d'une ssection vide */}
        <di>
          &nbsp;
        </di>
      </div>
      <section className="features-area">
        <div
          className="features-wrapper-two bg_cover pt-115 pb-80"
          style={{ backgroundImage: "url(assets/images/bg/features-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                  <span className="sub-title">LES SERVICES QUE NOUS OFFRONS</span>
                  <h2>Nos Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <div className="content">
                    <h4>Opportunités de mise en réseau</h4>
                    <p>
                    Rejoignez une communauté d'entrepreneurs, freelances
                     et innovateurs unis pour réussir grâce à l'entraide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-one mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <div className="content">
                    <h4>Développement professionnel</h4>
                    <p>
                    Développez votre potentiel et propulsez votre carrière 
                    avec notre programme complet de croissance professionnelle. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="fas fa-briefcase" />
                  </div>
                  <div className="content">
                    <h4>Opportunités d'emploi</h4>
                    <p>
                    Bénéficiez de notre réseau d'entreprises pour accéder à des 
                    opportunités de freelance correspondant à vos compétences.<br/>&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="fas fa-credit-card" />
                  </div>
                  <div className="content">
                    <h4>Traitement des paiements</h4>
                    <p>
                    Optez pour des paiements simplifiés grâce à
                     notre plateforme de freelancing flexible et fiable.<br/>&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                  <i className="fas fa-users-cog" />
                 </div>
                  <div className="content">
                    <h4>Coworking</h4>
                    <p>
                    Accédez à des espaces de travail premium grâce à nos partenaires 
                    exclusifs. Rejoignez une communauté professionnelle adaptée à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="fas fa-shield-alt" />
                  </div>
                  <div className="content">
                    <h4>Assurance</h4>
                    <p>
                    Bénéficiez d’une assurance adaptée pour freelances, 
                    incluant santé, et protégez votre avenir en toute sérénité.<br/>&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/*====== End Features Section ======*/}
      
      {/*====== Start Values Section ======*/}
      <div className={styles.whiteSpace}> {/* Création de d'une ssection vide */}
        <di>
          &nbsp;
        </di>
      </div>
      <section className="category-area">
        <div
          className="category-wrapper-bg bg_cover pt-75 pb-50"
          style={{ backgroundImage: "url(assets/images/bg/catgory-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                 <span className="sub-title">Communauté, inclusion, synergie.</span>
                  <h2>NOS VALEURS</h2><br/><br/>
                </div>
              </div>
            </div>
            <div className="row">
              
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                  <i className="fas fa-handshake" />
                 </div>
                  <div className="content">
                    <h4>Collaboration</h4>
                    <p>
                    Nous croyons en la collaboration pour atteindre des objectifs 
                    communs, en encourageant le soutien mutuel, 
                    le partage de connaissances et les projets ensemble.<br/>&nbsp;
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                  <i className="fas fa-shield-alt" />
                 </div>
                  <div className="content">
                    <h4>Intégrité</h4>
                    <p>
                    Nous valorisons l'intégrité, l'honnêteté et la transparence, en 
                    encourageant le respect et des normes éthiques élevées au sein de la communauté.<br/>&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                  <i className="fas fa-book-reader" />
                 </div>
                  <div className="content">
                    <h4>Apprentissage tout au long de la vie</h4>
                    <p>
                    L'apprentissage est un voyage continu ; nous encourageons le développement 
                    professionnel et l'adaptation aux tendances pour réussir en tant qu'indépendant.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div><br/><br/><br/>
        </div>
      </section>
      {/*====== End Values Section ======*/}
      
      {/*====== Start Création de d'une ssection vide  Section ======*/}
      <div className={styles.whiteSpace}> {/* Création de d'une ssection vide */}
        <di>
          &nbsp;
        </di>
      </div>
      {/*====== End Création de d'une ssection vide  Section ======*/}    

      {/*====== Start Team Section ======*/}
      <ClientSection
        title="Nos Clients"
        subtitle="Découvrez nos précieux partenaires"
        logos={logos}
      />
      <Teams/>
      {/*====== End Team Section ======*/}

    </Layout>
  );
};


const styles = {
  
  whiteSpace: {
    height: '50px', // hauteur de la zone blanche
    backgroundColor: '#fff', // couleur blanche
  }
};

export default Index3;
