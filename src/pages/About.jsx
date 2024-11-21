import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driverImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (<Helmet title="About">
    <CommonSection title="À propos" />
    <AboutSection aboutClass="aboutPage" />

    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
          <div className="about__page-img">
            <img src={driverImg} alt="" className="w-100 rounded-3" />
          </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
          <div className="about__page-content">
            <h2 className="section__title">Nous nous engageons à fournir des solutions de transport sécuritaires</h2>

            <p className="section__description">
            Modifications et annulations Gratuites si nécessaire
            </p>
            <p className="section__description">
            Une équipe agréable qui parle votre langue
            </p>
            <p className="section__description">
            Tarifs Tout Compris Sans Supplément
            </p>
            <p className="section__description">
            Pas de Limitation kilométrique
            </p>
            <p className="section__description">
            Conditions claires et précises
            </p>
            <p className="section__description">
            Assistance téléphonique
            </p>
            <p className="section__description">
            Assurance Tout Risque
            </p>
            <p className="section__description">
            Service après-vente
            </p>
            <p className="section__description">
            Voitures Neuves
            </p>

            <div className="d-flex align-items-center gap-3 mt-4">
              <span className="fs-4">
                <i class="ri-phone-line"></i>
              </span>

              <div>
                <h6 className="section__subtitle">Besoin d'aide ?</h6>
                <h4>+216 27 932 190</h4>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
{/* 
    <BecomeDriverSection />

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5 text-center">
          <h6 className="section__subtitle">Experts</h6>
          <h2 className="section__title">Our Members</h2>
          </Col>
          <OurMembers />
        </Row>
      </Container>
    </section> */}
  </Helmet>
  );
};

export default About;