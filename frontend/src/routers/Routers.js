import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import CarSearch from "../pages/CarSearch";


const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home' />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/cars' element={<CarListing/>} />
    <Route path='/cars/:_id' element={<CarDetails/>} />
    <Route path='/blogs' element={<Blog/>} />
    <Route path='/blogs/:slug' element={<BlogDetails/>} />
    <Route path='*' element={<NotFound/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/voitures/search' element={<CarSearch />} />
  </Routes>
};

export default Routers;