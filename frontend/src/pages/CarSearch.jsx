import React, {useState} from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
// import carData from "../assets/data/carData";
import { useLocation } from 'react-router-dom';
// import FindCarForm from "../components/UI/FindCarForm";

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
              
                <CarItem voiture={voiture} key={voiture._id}/>
              
            ))
          )}
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

export default CarSearch;
