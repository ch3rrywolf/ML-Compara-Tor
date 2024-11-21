import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const settings = {
    fade:true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll:1,
    pauseOnHover: false,
};

const HeroSlider = () => {
  return (<Slider {...settings} className="hero__slider">

    <div className="slider__item slider__item-01 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Les principales agences de location de voitures en un seul endroit</h4>
                <h1 className="text-light mb-4">entrez et vérifiez !</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to="/cars">Réservez maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-02 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Explorez notre gamme de véhicules, conçue pour répondre à toutes vos envies et besoins.</h4>
                <h1 className="text-light mb-4">Les prix les plus bas de l'univers...</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to="/cars">Réservez maintenant</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider__item slider__item-03 mt0">
        <Container>
            <div className="slider__content">
                <h4 className="text-light mb-3">Les principales agences de location de voitures en un seul endroit</h4>
                <h1 className="text-light mb-4">Meilleur prix garanti</h1>

                <button className="btn reserve__btn mt-4">
                    <Link to="/cars">Réservez maintenant</Link>
                </button>
            </div>
        </Container>
    </div>
  </Slider>
  );
};

export default HeroSlider