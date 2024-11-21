import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from '../assets/data/carData';
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import FeaturedVoitureList from "../components/UI/FeaturedVoitureList";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg='4' md='4'>
              <div className="find__cars-left">
                <h3>Réservez votre voiture en 3 minutes</h3>
              </div>
              </Col>

              <Col lg='8' md='8' sm='12'>
              <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
            <h6 className="section__subtitle">Consultez nos</h6>
            <h2 className="section__title">Services populaires</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
            <h6 className="section__subtitle">Venez avec</h6>
            <h2 className="section__title">Offres exceptionnelles</h2>
            </Col>
            {/* {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))} */}
          <FeaturedVoitureList />
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-4 text-center">
            <h6 className="section__subtitle">Nos clients disent</h6>
            <h2 className="section__title">Témoignages</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5 text-center">
            <h6 className="section__subtitle">Découvrez nos blogs</h6>
            <h2 className="section__title">Derniers blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;