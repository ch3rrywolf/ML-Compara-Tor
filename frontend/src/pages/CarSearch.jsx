import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import { useLocation } from 'react-router-dom';

const CarSearch = () => {

    const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);
  return (
    <Helmet title="CarSearch">
      <CommonSection title="Car Search" />

      <section>
      <Container>
        <Row>
          {data.length === 0 ? (
            <h4 className="text-center">No Voiture found</h4>
          ) : (
            data?.map(voiture => (
              <Col lg="3" className="mb-4" key={voiture._id}>
                <CarItem voiture={voiture} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

export default CarSearch;
