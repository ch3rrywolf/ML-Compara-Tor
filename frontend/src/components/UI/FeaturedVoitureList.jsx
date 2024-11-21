import React from "react";
import CarItem from "./CarItem";
// import { Col } from "reactstrap";


import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedVoitureList = () => {
    const {data: featuredVoiture, loading, error } = useFetch(`${BASE_URL}/voitures/search/getFeaturedVoitures`);

  return (
    <>
    {loading && <h4>Loading...</h4>}
    {error && <h4>{error}</h4>}
    {!loading && !error &&
    featuredVoiture.slice(0, 6).map(voiture => (
        
        <CarItem voiture={voiture} key={voiture._id} />
        
    ))}
    </>
  );
};

export default FeaturedVoitureList;
