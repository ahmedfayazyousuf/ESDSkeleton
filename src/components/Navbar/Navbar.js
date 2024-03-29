import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import thhlogoo from "./thhlogoo.png";
import { UserContext } from '../../App';

const Navbar = () => {
    // eslint-disable-next-line
    const {state, dispatch} = useContext(UserContext);
    const RenderMenu = () => {
        if(state) {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/choosecontienent">Book</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">ContactUs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/choosecontienent">Book</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">ContactUs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                    </li>
                </>
            )
        }
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>   
        <NavLink className="navbar-brand" to="/">
            <img src={thhlogoo} style={{marginLeft: '15px',height:'40px', width: '120px'}} alt="the hanging house logo"/>
            <p style={{fontSize:'10px', marginLeft: '40px', marginTop: '5px', marginBottom: '0'}}>Book My Hotel</p>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <RenderMenu />
            </ul>
        </div>
    </nav>
  )
}

export default Navbar