import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class TestimoinalSlider2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          dots={false}
          arrows={false}
          autoplaySpeed={1500}
          focusOnSelect={true}
          autoplay={true}
          slidesToShow={3}
          slidesToScroll={1}
          className="testimonial-thumb-slider-one"
        >
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-1.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-3.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          dots={false}
          arrows={false}
          infinite={true}
          autoplaySpeed={1500}
          autoplay={true}
          fade={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="testimonial-content-slider-one"
        >
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              Travailler avec cette agence a été une expérience incroyable. 
              Leur écoute et leur créativité ont transformé notre vision en
               un site web fonctionnel et esthétique. Je recommande vivement leurs services !{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Melisa Powels</h4>
                  <span className="position">Sr. Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              L&apos;équipe a fait preuve d&apos;un professionnalisme exemplaire tout au long de notre
               projet de refonte de site. Leur accompagnement et leurs conseils ont été précieux.
                Un grand merci pour ce travail de qualité !{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Guillaume P.</h4>
                  <span className="position">CEO TUGT</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
              Mon Agence du Web a su comprendre nos besoins spécifiques et nous a guidés
               à chaque étape du processus. Grâce à leur expertise, notre projet a pris forme 
               rapidement et efficacement. Je suis ravie du résultat !{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Christelle F.</h4>
                  <span className="position">Pharmacienne</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                Je suis très satisfaite du site internet qu&apos;ils ont créé pour moi. 
                Non seulement le design est conforme à mes attentes, mais j&apos;ai également 
                reçu une formation pour gérer mon référencement. Une équipe vraiment compétente !{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Delphine D.</h4>
                  <span className="position">Restaurateur</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
