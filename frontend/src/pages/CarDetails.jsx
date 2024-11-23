import React, {useEffect, useRef, useState, useContext}  from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import avatar from "../assets/all-images/ava-1.jpg";
import calculateAvgRating from '../utils/avgRating';
import { AuthContext } from './../context/AuthContext';
import "../styles/voiture-details.css";

const CarDetails = () => {
  const { _id } = useParams();
  const reviewMsgRef = useRef();
  const [voitureRating, setVoitureRating] = useState(null);
  const {user} = useContext(AuthContext);

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

  const {totalRating, avgRating} = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric"};

  const submitHandler = async e=>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    
    
    try {

      if(!user || user === undefined || user === null){
        alert('Please sign in')
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:voitureRating
      }

      const res = await fetch(`${BASE_URL}/review/${_id}`, {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if(!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[voiture]);
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

                    {/* <span className="d-flex align-items-center gap-2">
                      <span style={{ color: "#f9a826" }}>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      ({avgRating} ratings)
                    </span> */}

                    <span className="d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{color: "#F7A600"}}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        "Not rated"
                    ) : (
                        <span>({reviews?.length})</span>
                    )}
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
                  <h5 className="mb-4 fw-bold">Informations de réservation</h5>
                  <BookingForm voiture={{ price, carName }}/>
                </div>
              </Col>

              <Col lg="5" className="mt-5">
                <div className="payment__info mt-5">
                  <h5 className="mb-4 fw-bold">Informations de paiement</h5>
                  <PaymentMethod />
                </div>
              </Col>
              <Col lg='12'>
              <div className="voiture__reviews mt-4">
                <h4>Avis ({reviews?.length} avis)</h4>
                <Form onSubmit={submitHandler}>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={()=> setVoitureRating(1)}>1<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(2)}>2<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(3)}>3<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(4)}>4<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setVoitureRating(5)}>5<i class="ri-star-s-fill"></i></span>
                  </div>
                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder="partagez vos pensées" required />
                    <button className="btn text-black" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                  {
                    reviews?.map(review=>(
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US", options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
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
