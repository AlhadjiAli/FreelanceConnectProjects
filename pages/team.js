import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import alhalig from "../public/assets/images/team/alhalig.png";


const Team = () => {
  return (
    <div>
      {/*====== Start Team Section ======*/}
      <section className="team-area pt-115 pb-85">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Membre d'Equipe </span>
                <h2>Notre Equipe Interne</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQFYvdXuJfZO6w/profile-displayphoto-shrink_400_400/B4EZQXbCKYHkAg-/0/1735559755502?e=1741219200&v=beta&t=9J97Yy08EL7WcgELo52QSq5qA8umEXBFxcGazQqzIgs" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/abdoulayeTheCTO">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/njigouh-abdoulaye-razak/">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Njigouh Abdoulaye Razak</h3>
                  <span className="position">CTO #FreelanceConnect & Co-Founder #VTI Global Academy</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="team-item team-item-one mb-30 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="team-img">
                <Image src={alhalig} alt="Description" />
                  {/* <img src="assets/images/team/team-2.jpg" alt="Team Image" />  width={500} height={300}*/}
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/ali.garba.1441/">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="www.linkedin.com/in/alhadji-ali-garba-19a815243">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Alhadji Ali Garba</h3>
                  <span className="position">Développeur Frontend & Cloud</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item team-item-one mb-30 wow fadeInUp">
                <div className="team-img">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQGsLuPLF1xIsA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1666798908567?e=1741219200&v=beta&t=REaTKDiFX6Il1ZjhVsnOw7s4fEYAqjQ55MwVu1lpxWo" alt="Team Image" />
                  <div className="team-social">
                    <ul className="social-link">
                      <li>
                        <a href="https://www.facebook.com/share/19n85YehPu/?mibextid=wwXIfr">
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/youssefvpm/">
                          <i className="ti-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-info text-center">
                  <h3 className="title">Vepouyoum Youssef</h3>
                  <span className="position">UI & UX Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Team Section ======*/}
    </div>
  );
};
export default Team;
