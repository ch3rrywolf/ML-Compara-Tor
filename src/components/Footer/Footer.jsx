import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Politique de confidentialité'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer__logo">
            <h1><Link to='/home' className="d-flex align-items-center gap-3">
            <i class="ri-car-line"></i>
            <span>MyLoc <br /> Comparator</span>
            </Link>
            </h1>
          </div>
          <p className="footer__logo-content">
          Location de voiture, longue et courte durée
          Livraison possible dans toute la Tunisie 
          </p>
        </Col>
        <Col lg='2' md='4' sm='6'>
        <div className="mb-4">
          <h5 className="footer__link-title">
          Liens rapides</h5>
          <ListGroup>
            {
              quickLinks.map((item,index)=>(
                <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </div>
        </Col>
        <Col lg="3" md="4" sm="6">
        <div className="mb-4">
          <h5 className="footer__link-title mb-4">Siège Social</h5>
          <p className="office__info">Les berges du lac 2, Tunis, Tunisia</p>
          <p className="office__info">Téléphone: +216 27 932 190</p>
          <p className="office__info">Email: myloclac2@gmail.com</p>
          <p className="office__info">Ouvert: 9am - 8pm</p>
        </div>
        </Col>
        <Col lg="3" md="4">
        <div className="mb-4">
          <h5 className="footer__link-title">Newsletter</h5>
          <p className="section__description"></p>
          <div className="newsletter">
            <input type="email" placeholder="Email" />
            <span>
              <i class="ri-send-plane-line"></i>
            </span>
          </div>
        </div>
        </Col>
        <Col lg='12'>
        <div className="footer__bottom">
          <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
            <i class="ri-copyright-line"></i>Copyright {year}, Developed by Ch3rrywolf.exe. All rights reserved.
          </p>
        </div>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;