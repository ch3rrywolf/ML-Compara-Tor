import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = ({voiture}) => {
    const {_id, imgUrl, category, carName, transmistion, toit, price, agence, agenceLogo, local} =  voiture;
  return <Col lg='4' md='4' sm='6' className='mb-5'>
  <div className="car__item">
    <div className="car__img">
    <img src={agenceLogo} alt={agence} className="logo-agence"/>
    <img src={imgUrl} alt={carName} className="w-100" />
    </div>
    <div className="car__item-content mt-4">
        <h4 className="section__title text-center">{carName}</h4>
        <h6 className="rent__price text-center mt-">{price}.00 DT
            <span>/Jour</span>
        </h6>
        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 md-4">
            <span className='d-flex align-items-center gap-1'><i class="ri-car-line"></i>{category}</span>
            <span className='d-flex align-items-center gap-1'><i class="ri-settings-2--line"></i>{transmistion}</span>
            <span className='d-flex align-items-center gap-1'><i class="ri-timer-flesh-line"></i>{toit}</span>
            <span className='d-flex align-items-center gap-1'></span>
        </div>
        <div className="car__item-info d-flex align-items-center justify-content-between mt-3 md-4">
            <span className='d-flex align-items-center gap-1'><i class="ri-car-line"></i>{local}</span>
            <span className='d-flex align-items-center gap-1'><i class="ri-settings-2--line"></i>{transmistion}</span>
            
            <span className='d-flex align-items-center gap-1'><i class="ri-timer-flesh-line"></i>{agence}</span>
        </div>

        <button className="w-50 car__item-btn car__btn-rent">
            <Link to={`/voitures/${_id}`}>Louer</Link>
        </button>

        <button className="w-50 car__item-btn car__btn-details">
            <Link to={`/voitures/${_id}`}>Détails</Link>
        </button>
    </div>
  </div>
  </Col>
};

export default CarItem;