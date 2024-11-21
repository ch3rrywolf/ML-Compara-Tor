// import all images from assets/images directory
import img01 from "../all-images/cars-img/seat-ibiza-fr.png";
// import img02 from "../all-images/cars-img/offer-toyota.png";
// import img03 from "../all-images/cars-img/bmw-offer.png";
// import img04 from "../all-images/cars-img/nissan-offer.png";
// import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-cla.png";
import img07 from "../all-images/cars-img/audi-a3.png";
// import img08 from "../all-images/cars-img/mercedes-offer.png";
import imgLogoAg01 from "../all-images/logo.jpg";

const carData = [
  {
    id: 1,
    brand: "Seat",
    agence:"MyLoc",
    local: "Les berges du lac 2, Tunis",
    agenceLogo: imgLogoAg01,
    rating: 112,
    carName: "Seat Ibiza Fr",
    imgUrl: img01,
    category: "Citadines",
    price: 150,
    toit: "Toit ouvrant",
    transmistion: "Auto",
    description:"Prenez le volant avec style! Louez votre voiture dès maintenant et explorez la ville sans limites."  },

  // {
  //   id: 2,
  //   brand: "Toyota",
  //   agence:"MyLoc",
  //   local: "Les berges du lac 2, Tunis",
  //   agenceLogo: imgLogoAg01,
  //   rating: 102,
  //   carName: "Toyota Aventador",
  //   imgUrl: img02,
  //   category: "Berline",
  //   price: 50,
  //   toit: "Toit ouvrant",
  //   transmistion: "Auto",
  //   description:""  },

  // {
  //   id: 3,
  //   brand: "BMW",
  //   agence:"MyLoc",
  //   local: "Les berges du lac 2, Tunis",
  //   agenceLogo: imgLogoAg01,
  //   rating: 132,
  //   carName: "BMW X3",
  //   imgUrl: img03,
  //   category: "Luxe",
  //   price: 65,
  //   toit: "Toit ouvrant",
  //   transmistion: "Auto",
  //   description:""  },

  // {
  //   id: 4,
  //   brand: "Nissan",
  //   agence:"MyLoc",
  //   local: "Les berges du lac 2, Tunis",
  //   agenceLogo: imgLogoAg01,
  //   rating: 102,
  //   carName: "Nissan Mercielago",
  //   imgUrl: img04,
  //   category: "Berline",
  //   price: 70,
  //   toit: "Toit ouvrant",
  //   transmistion: "Auto",
  //   description:""  },
  

  {
    id: 6,
    brand: "Mercedes-Benz",
    agence:"MyLoc",
    local: "Les berges du lac 2, Tunis",
    agenceLogo: imgLogoAg01,
    rating: 119,
    carName: "Mercedes CLA 180",
    imgUrl: img06,
    category: "Luxe",
    price: 700,
    toit: "Toit panoramique",
    transmistion: "Auto",
    description:"Prenez la route en toute liberté avec My Loc ✨Louez la voiture parfaite pour chaque aventure !"  },

  {
    id: 7,
    brand: "Audi",
    agence:"MyLoc",
    local: "Les berges du lac 2, Tunis",
    agenceLogo: imgLogoAg01,
    rating: 82,
    carName: "Audi A3",
    imgUrl: img07,
    category: "Luxe",
    price: 350,
    toit: "Toit panoramique",
    transmistion: "Auto",
    description:"Roulez en style avec notre AUDI A3."  },

  
];

export default carData;
