import { Link } from 'react-router-dom';
import '../UserChoose.css';
import Logo from '../Logo.png';
import Hilton from './Hilton.png';
import Hyatt from './Hyatt.png';
import FourSeasons from './FourSeasons.png';
import Marriott from './Mariott.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const ChooseHotel = () => { 
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

        if(e === 'Hilton'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Hyatt').style.background = "transparent";
            document.getElementById('Marriott').style.background = "transparent";
            document.getElementById('FourSeasons').style.background = "transparent";
        }
        if(e === 'Hyatt'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Hilton').style.background = "transparent";
            document.getElementById('Marriott').style.background = "transparent";
            document.getElementById('FourSeasons').style.background = "transparent";
        }
        if(e === 'Marriott'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Hilton').style.background = "transparent";
            document.getElementById('Hyatt').style.background = "transparent";
            document.getElementById('FourSeasons').style.background = "transparent";
        }
        if(e === 'FourSeasons'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Hilton').style.background = "transparent";
            document.getElementById('Hyatt').style.background = "transparent";
            document.getElementById('Marriott').style.background = "transparent";
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
                <p style={{fontSize: '15px', marginBottom: '0', marginTop: '10px', color: 'white'}} >Choose Hotel</p>
            </div>



            <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Hilton' className="content content-1" onClick={()=>{carClick('Hilton')}}>
                            <img src={Hilton} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Hilton</p>    
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div id='Hyatt' className="content content-1" onClick={()=>{carClick('Hyatt')}}>
                            <img src={Hyatt} alt="Logo" style={{width: '20vh'}}/>  
                            <p style={{color:'white', margin: '0', padding: '0'}}>The Hyatt</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Marriott' className="content content-1" onClick={()=>{carClick('Marriott')}}>
                            <img src={Marriott} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Marriott</p>    
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='FourSeasons' className="content content-1" onClick={()=>{carClick('FourSeasons')}}>
                            <img src={FourSeasons} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Four Seasons</p>    
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}} >
                <Link to="/BookRoom">
                    <button className="grab" style={{color:"black", background:"white",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
                </Link>
            </div>

              
        </>
    )
}

export default ChooseHotel

