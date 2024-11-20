import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css"
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";


const AboutSection = ({aboutClass}) => {
  return (<section
    className="about__section"
    style={
        aboutClass === "aboutPage"
        ? { marginTop: "0px"}
        : { marginTop: "280px"}
    }
  >
    <Container>
        <Row>
            <Col lg='6' md='6'>
            <div className="about__section-content">
                <h4 className="section__subtitle">À propos de nous</h4>
                <h2 className="section__title">Bienvenue sur MyLoc</h2>
                <p className="section__description">Chez « My Loc », nous mettons à votre disposition une large gamme de voitures pour répondre à tous.</p>
            
            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-1">
                    <i class="ri-checkbox-circle-line"></i> Voitures impeccables et bien entretenues
                </p>
                <p className="section__description d-flex align-items-center gap-1">
                    <i class="ri-checkbox-circle-line"></i> Tarifs compétitifs
                </p>
            </div>
            <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-1">
                    <i class="ri-checkbox-circle-line"></i>Service convivial, professionnel et dévoué.
                </p>
                <p className="section__description d-flex align-items-center gap-1">
                    <i class="ri-checkbox-circle-line"></i>Options de location flexibles avec des remises et des formules selon vos besoins.
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