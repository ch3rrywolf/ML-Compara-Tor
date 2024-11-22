import React, { useState, useContext, useEffect } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const BookingForm = ({ voiture = {} }) => {
  const { price, carName } = voiture;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: '',
    userEmail: '',
    carName: carName || '',
    username: '',
    phone: '',
    nbrJrs: '',
    description: '',
  });

  const [TVA, setTVA] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Ensure user is loaded before updating the booking state
  useEffect(() => {
    if (user) {
      setBooking(prev => ({
        ...prev,
        userId: user._id || '',
        userEmail: user.email || '',
        username: user.username || '',
      }));
    }
  }, [user]);

  useEffect(() => {
    // Calculate TVA
    const calculatedTVA = (Number(price) * 19) / 100;
    
    // Calculate initial total amount: TVA + Price per day
    const calculatedTotalAmount = Number(price) + calculatedTVA;
  
    setTVA(calculatedTVA);
    setTotalAmount(calculatedTotalAmount);
  }, [price]);
  

  useEffect(() => {
    if (booking.nbrJrs) {
      const calculatedTVA = (Number(price) * 19) / 100;
      const calculatedTotalAmount = Number(price) * Number(booking.nbrJrs) + calculatedTVA;
      setTVA(calculatedTVA);
      setTotalAmount(calculatedTotalAmount);
    }
  }, [booking.nbrJrs, price]);
  

  const handleChange = e => {
    setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    if (!user) {
      return alert('Please sign in');
    }

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(booking),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      navigate('/thank-you');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Form onSubmit={handleClick}>
      {/* Pre-filled fields */}
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          id="username"
          value={booking.username}
          readOnly
          className="form-control bg-light"
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          id="userEmail"
          value={booking.userEmail}
          readOnly
          className="form-control bg-light"
        />
      </FormGroup>
    
      {/* Editable fields */}
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Numéro de téléphone"
          id="phone"
          value={booking.phone}
          onChange={handleChange}
          className="form-control"
          required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Nombre de jours"
          id="nbrJrs"
          value={booking.nbrJrs}
          onChange={handleChange}
          className="form-control"
          required
        />
      </FormGroup>
    
      {/* Display price details */}
      <ListGroup className="mb-4">
        <ListGroupItem className="d-flex justify-content-between">
          <h6>Prix ​​(par jour)</h6>
          <span>{price} DT</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between">
          <h6>TVA (19%):</h6>
          <span>{TVA.toFixed(2)} DT</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between total">
          <h6>Montant total:</h6>
          <span>{totalAmount.toFixed(2)} DT</span>
        </ListGroupItem>
      </ListGroup>
    
      {/* Description field */}
      <FormGroup className="booking__form mb-4 w-100">
        <textarea
          rows={4}
          id="description"
          placeholder="Ajoutez des commentaires ou des détails"
          value={booking.description}
          onChange={handleChange}
          className="form-control"
        />
      </FormGroup>
    
      {/* Submit button */}
      <Button type="submit" className="btn primary__btn w-100">
        Réserver maintenant
      </Button>
    </Form>
  );
};

export default BookingForm;
