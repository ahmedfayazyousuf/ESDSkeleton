import Logo from '../Logo.png';
import { Link } from 'react-router-dom';

import React from 'react';

const Success = () => { 
    
    return (
        <>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <img src={Logo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <h1 style={{fontSize: '28px', marginTop: '20px', marginBottom: '-4px'}} >GET READY TO</h1>
                <h1 className='explore' style={{fontSize: '46px', margin: '-8px'}}>EXPLORE</h1>
                <h1 style={{fontSize: '22px', marginTop: '-4px'}}>MORE. TOGETHER.</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '100px'}} >
                <p style={{fontSize: '35px',fontWeight: 600,  marginBottom: '0', marginTop: '10px', color: 'white'}} >Booking Successful!</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}} >
            <Link to="/">
                <button className="grab" style={{color:"black", marginRight:'20px', background:"white",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained">Return</button> 
            </Link>

            
            </div>

              
        </>
    )
}

export default Success

