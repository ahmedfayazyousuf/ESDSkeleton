import Logo from '../Logo.png';
import { Link } from 'react-router-dom';
import Bar from './Icons/Bar.png';
import CarBike from './Icons/CarBike.png';
import Food from './Icons/Food.png';
import Spa from './Icons/Spa.png';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const Services = () => { 
    const location = useLocation();
    const navigate = useNavigate();

    const [car, setCar] = useState('');

    function Handleclick(v){
        if(car === ''){
            return;
        }
        
    navigate(v, {state:{uid:location.state.uid,count:location.state.count}});
    }

    function carClick(e){

        if(e === 'Bar'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            // document.getElementById('CarBike').style.background = "transparent";
            // document.getElementById('Spa').style.background = "transparent";
            // document.getElementById('Food').style.background = "transparent";
        }
        if(e === 'CarBike'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            // document.getElementById('Bar').style.background = "transparent";
            // document.getElementById('Spa').style.background = "transparent";
            // document.getElementById('Food').style.background = "transparent";
        }
        if(e === 'Spa'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            // document.getElementById('Bar').style.background = "transparent";
            // document.getElementById('CarBike').style.background = "transparent";
            // document.getElementById('Food').style.background = "transparent";
        }
        if(e === 'Food'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            // document.getElementById('Bar').style.background = "transparent";
            // document.getElementById('CarBike').style.background = "transparent";
            // document.getElementById('Spa').style.background = "transparent";
        }
        
    }

    // useEffect(()=>{
    //     document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL + '/desktop2.png'})` 
    // },[])

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

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0'}} >
                <p style={{fontSize: '15px', marginBottom: '0', marginTop: '10px', color: 'white'}} >Choose Services</p>
            </div>



            <div className="rower" style={{display: 'flex',textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Bar' className="content content-1" onClick={()=>{carClick('Bar')}}>
                            <img src={Bar} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Bar</p>    
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div id='CarBike' className="content content-1" onClick={()=>{carClick('CarBike')}}>
                            <img src={CarBike} alt="Logo" style={{width: '20vh'}}/>  
                            <p style={{color:'white', margin: '0', padding: '0'}}> Rent Vehicle</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Spa' className="content content-1" onClick={()=>{carClick('Spa')}}>
                            <img src={Spa} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Spa</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Food' className="content content-1" onClick={()=>{carClick('Food')}}>
                            <img src={Food} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Restaurant</p>    
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}} >
            <Link to="/dashboard">
                <button className="grab" style={{color:"black", background:"white",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
            </Link>
            </div>

              
        </>
    )
}

export default Services

