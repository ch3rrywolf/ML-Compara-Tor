import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css"
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";


const AboutSection = () => {
  return (<section className="about__section">
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="about__section-content">
                <h4 className="section__subtitle">About Us</h4>
                <h2 className="section__title">Welcome to MyLoc</h2>
                <p className="section__description">Location de voiture, longue et courte durée
                Livraison possible dans toute la Tunisie</p>
            
            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>dhfgsdgfuyzegf
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>dhfgsdgfuyzegf
                </p>
            </div>
            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>dhfgsdgfuyzegf
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i>dhfgsdgfuyzegf
                </p>
            </div>

            </div>
            </Col>
            <Col lg='6' md='6'>
            <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default AboutSection;