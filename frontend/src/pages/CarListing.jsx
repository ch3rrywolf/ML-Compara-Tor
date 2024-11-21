import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import FindCarForm from "../components/UI/FindCarForm";

import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from "../utils/config.js";

const CarListing = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {data:voitures, loading, error} = useFetch(`${BASE_URL}/voitures?page=${page}`);
  const {data:voitureCount} = useFetch(`${BASE_URL}/voitures/search/getVoitureCount`);

  useEffect(() => {
    const pages = Math.ceil(voitureCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, voitureCount, voitures,pageCount]);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
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
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {
            !loading && !error && <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
              
            {voitures.map((voiture) => (
              <CarItem voiture={voiture} key={voiture._id} />
            ))}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                    >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
          }
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
