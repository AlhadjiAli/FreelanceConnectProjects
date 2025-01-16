import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageBanner title={"Contact us"} />

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-115 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-title section-title-left mb-50">
                <span className="sub-title">CONTACT</span>
                <h2>Nous contacter</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-information-list">
              <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-mobile" />
                  </div>
                  <div className="info">
                    <h5>Appelez-nous</h5>
                    <p>
                      <a href="tel:+237671515042">(+237) 671-515-042</a>
                    </p>
                    <p>
                      {/* <a href="tel:+237620224288">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 620-224-288</a> */}
                    </p>
                  </div>
                </div>
              <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-time" />
                  </div>
                  <div className="info">
                    <h5>Heures ouvrables</h5>
                    <p>Lundi - Samédi</p>
                    <p>9h00 - 17h00</p>
                  </div>
                </div>
                
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-email" />
                  </div>
                  <div className="info">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:info@freelanceconnect.pro">info@freelanceconnect.cm</a>
                    </p>
                    <p>
                      <a href="mailto:jobs@freelanceconnect.cm">jobs@freelanceconnect.cm</a>
                    </p>
                  </div>
                </div>
                <div className="information-item mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="info">
                    <h5>Adresse</h5>
                    <p>Deido, entre Total Bonateki,
                    et Pharmacie Akwa Nord, Douala</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-wrapper-one mb-30 wow fadeInRight">
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Votre Nom"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Sujet"
                            name="subject"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Votre Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn">Envoyer le message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Map section ======*/}
      <section className="contact-page-map">
        <div className="map-box">
          <iframe src="https://maps.app.goo.gl/9NUu54EktbYhHHaQ6" />
        </div>
      </section>
      {/*====== End Map section ======*/}
    </Layout>
  );
};
export default Contact;
