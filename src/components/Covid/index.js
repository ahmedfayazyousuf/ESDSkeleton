import Logo from '../Logo.png';
import Covidd from '../Covid.png';
import { Link } from 'react-router-dom';

import React from 'react';
const Covid = () => { 

    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <img src={Logo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <img src={Covidd} alt="Logo" style={{width: '80vh'}}/>
            </div>

           

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px', marginBottom:'50px'}} >
            <Link to="/bookroom">
                <button className="grab" style={{color:"black", background:"white",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained">Return</button> 
            </Link>
            </div>

              
        </>
    )
}

export default Covid

