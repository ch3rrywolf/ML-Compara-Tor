import React from "react";
import CarItem from "./CarItem";
import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedVoitureList = () => {
    const {data: featuredVoiture } = useFetch(`${BASE_URL}/voitures/search/getFeaturedVoitures`);

  return (
    <>
    {featuredVoiture?.map(voiture => (
        <Col key={voiture._id}>
        <CarItem voiture={voiture} />
        </Col>
    ))}
    </>
  );
};

export default FeaturedVoitureList;