import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';

const CarDetails = () => {
  const { _id } = useParams();
  const { data: voiture, loading, error } = useFetch(`${BASE_URL}/voitures/${_id}`);

  const {
    carName,
    agenceLogo,
    imgUrl,
    transmistion,
    price,
    toit,
    reviews = [], // Default to an empty array
    category,
    agence,
    local,
    brand,
    description,
    carburant,
    featured,
  } = voiture || {}; // Handle cases where `voiture` is undefined

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1) 
    : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [voiture]);

  return (
    <Helmet title={carName || "Car Details"}>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.......</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="6">
                <img src={agenceLogo} alt="" className="logo-agence" />
                <img src={imgUrl} alt="" className="w-100" />
              </Col>

              <Col lg="6">
                <div className="car__info">
                  <h2 className="section__title">{carName}</h2>

                  <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                    <h6 className="rent__price fw-bold fs-4">
                      {price}.00 DT/Jour
                    </h6>

                    <span className="d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      ({averageRating} ratings)
                    </span>
                  </div>

                  <p className="section__description">{description}</p>

                  <div
                    className="d-flex align-items-center mt-3"
                    style={{ columnGap: "4rem" }}
                  >
                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-roadster-line" style={{ color: "#f9a826" }}></i>{" "}
                      {category}
                    </span>

                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-settings-2-line" style={{ color: "#f9a826" }}></i>{" "}
                      {transmistion}
                    </span>

                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>{" "}
                      {toit}
                    </span>
                  </div>

                  <div
                    className="d-flex align-items-center mt-3"
                    style={{ columnGap: "2.8rem" }}
                  >
                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                      {local}
                    </span>

                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-wheelchair-line" style={{ color: "#f9a826" }}></i>{" "}
                      Siège Auto 
                    </span>

                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-building-2-line" style={{ color: "#f9a826" }}></i>{" "}
                      {brand}
                    </span>
                  </div>
                </div>
              </Col>

              <Col lg="7" className="mt-5">
                <div className="booking-info mt-5">
                  <h5 className="mb-4 fw-bold">Booking Information</h5>
                  <BookingForm />
                </div>
              </Col>

              <Col lg="5" className="mt-5">
                <div className="payment__info mt-5">
                  <h5 className="mb-4 fw-bold">Payment Information</h5>
                  <PaymentMethod />
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
