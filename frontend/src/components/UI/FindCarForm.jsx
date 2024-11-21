import React, {useRef} from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const FindCarForm = () => {

    const localRef = useRef('');
    // const dateDepRef = useRef('');
    // const timeDepRef = useRef('');
    // const dateFinRef = useRef('');
    // const timeFinRef = useRef('');
    const navigate = useNavigate();

    const serachHandler = async ()=>{
        const local = localRef.current.value
        // const dateDep = dateDepRef.current.value
        // const timeDep = timeDepRef.current.value
        // const dateFin = dateFinRef.current.value
        // const timeFin = timeFinRef.current.value

        if (local === ""){
            return alert("All fields are required!");
        }

        const res = await fetch(
            `${BASE_URL}/voitures/search/getVoitureBySearch?local=${local}`
        );

        if (!res.ok) alert("Something went wrong");

        const result = await res.json();

        navigate(
            `/voitures/search?local=${local}`,
            { state: result.data}
        );
    };




  return (<Form className="form">
    <div className="d-flex align-items-center justify-content-between flex-wrap">

        <FormGroup className="form__group">
            <input type="text" placeholder="Votre déstination" ref={localRef} required />
        </FormGroup>
        <FormGroup className="form__group">
            <input type="date" placeholder="Date de début"  required />
            <input className="journey__time" type="time" placeholder="Journey time"  required />
        </FormGroup>
        <FormGroup className="form__group">
            <input type="date" placeholder="Date de retour"  required />
            <input className="journey__time" type="time" placeholder="Journey time"  required />
        </FormGroup>
        {/* <FormGroup className="select__group">
            <select>
                <option value="ac">AC Car</option>
                <option value="non-ac">Non AC Car</option>
            </select>
        </FormGroup> */}

        <FormGroup className="form__group">
            <button className="btn find__car-btn" onClick={serachHandler}>Rechercher</button>
        </FormGroup>
    </div>
  </Form>
  );
};

export default FindCarForm;