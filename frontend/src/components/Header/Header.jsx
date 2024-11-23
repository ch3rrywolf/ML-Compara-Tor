import React, { useRef, useEffect, useContext, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
import imgLogo from "../../assets/all-images/logo.jpg";
import { AuthContext } from './../../context/AuthContext';

const navLinks = [
  { path: '/home', display: 'Accueil' },
  { path: '/about', display: 'À propos' },
  { path: '/cars', display: 'Voitures' },
  { path: '/blogs', display: 'Blogs' },
  { path: '/contact', display: 'Contact' },
];

const navLinksMobile = [
  { path: '/home', display: 'Accueil' },
  { path: '/about', display: 'À propos' },
  { path: '/cars', display: 'Voitures' },
  { path: '/blogs', display: 'Blogs' },
  { path: '/contact', display: 'Contact' },
 
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(false); // State to track if it's mobile or desktop

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  useEffect(() => {
    // Check window size to determine mobile or desktop
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header" ref={headerRef}>
      <div className="header__top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <span>Besoin d'aide?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i>+216 27 932 190
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                  </>
                ) : (
                  <>
                    <Link to={`/login`} className="d-flex align-items-center gap-1">
                      <i className="ri-login-circle-line"></i> Se connecter
                    </Link>
                    <Link to={`/register`} className="d-flex align-items-center gap-1">
                      <i className="ri-user-line"></i> S'inscrire
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='4' md='3' sm='4'>
              <div className="logo">
                <h1><Link to='/home' className="d-flex align-items-center gap-3">
                  <img src={imgLogo} alt="" />
                  <span>Comparator</span>
                </Link></h1>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-earth-line"></i></span>
                <div className="header__location-content">
                  <h4>Tunisia</h4>
                  <h6>Les berges du lac 2, Tunis</h6>
                </div>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Ouvert 7j/7</h4>
                  <h6>9h - 20h</h6>
                </div>
              </div>
            </Col>
            <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
              <button className="header__btn btn">
                <Link to='/contact'>
                  <i className="ri-phone-line"></i> Demander un appel
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {/* Display links based on device type */}
                {(isMobile ? (
                  <>
                    <div className="mobile__auth-links">
                    {user ? (
      <>
        <h5 className="mb-0">{user.username}</h5>
        <Button className="btn btn-dark" onClick={logout}>Logout</Button>
      </>
    ) : (
      <>
        <Link to={`/login`} className="d-flex align-items-center gap-1">
          <i className="ri-login-circle-line"></i> Se connecter
        </Link>
        <Link to={`/register`} className="d-flex align-items-center gap-1">
          <i className="ri-user-line"></i> S'inscrire
        </Link>
      </>
    )}
                    </div>
                    <div className="mobile__nav-links">
                    <ul>
      {navLinksMobile.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            className={(navClass) => navClass.isActive ? "nav__active nav__item" : "nav__item"}
          >
            {item.display}
          </NavLink>
        </li>
      ))}
    </ul>
                    </div>
                  </>
                ) : (
                  navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) => navClass.isActive ? "nav__active nav__item" : "nav__item"}
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Recherche" />
                <span><i className="ri-search-line"></i></span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
