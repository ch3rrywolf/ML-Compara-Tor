import React, {useState, useContext} from 'react';

import { Container, Row, Col, Form,  Button, FormGroup } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css'
import registerImg from '../assets/all-images/register.jpg';
import userIcon from "../assets//all-images/agns-img/agns-logo.jpg";

import { AuthContext } from './../context/AuthContext.js';
import { BASE_URL } from './../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined,
});

const {dispatch} = useContext(AuthContext);
const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
};

const handleClick = async e =>{
e.preventDefault();

try {
  const res = await fetch(`${BASE_URL}/auth/register`,{
    method:'post',
    headers:{
      'content-type':'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const result = await res.json();

  if(!res.ok) alert(result.message);

  dispatch({type:'REGISTER_SUCCESS'});
  navigate('/login');
} catch (err) {
  alert(err.message);
}
};

  return <section>
    <Container>
      <Row>
        <Col lg='8' className="m-auto">
        <div className="login__container d-flex justify-content-between">
          <div className="login__img">
            <img src={registerImg} alt="" />
          </div>

          <div className="login__form">
            <div className="user">
              <img src={userIcon} alt="" />
            </div>
            <h2>Register</h2>
            <Form onSubmit={handleClick}>
              <FormGroup>
                <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
              </FormGroup>
              <Button className="btn secondary__btn auth__btn" type="submit">
                <p>Créer</p>
              </Button>
            </Form>
            <p >Vous avez déjà un compte <Link to='/login' className='text-black'>Se connecter</Link></p>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register