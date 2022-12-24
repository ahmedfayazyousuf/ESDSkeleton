import '../UserChoose.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';
import Europe from './Europe.png';
import Asia from './Asia.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { useState } from 'react';

const ChooseContienent = () => { 
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

        if(e === 'Europe'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Asia').style.background = "transparent";

        }

        if (e === 'Asia'){
            document.getElementById(e).style.background = "rgb(142, 142, 1)";
            document.getElementById('Europe').style.background = "transparent";
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
                <p style={{fontSize: '15px', marginBottom: '0', marginTop: '10px', color: 'white'}} >Choose Hotel Continent</p>
            </div>



            <div className="rower" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0', gap:"50px"}} >
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                        <div id='Europe' className="content content-1" onClick={()=>{carClick('Europe')}}>
                            <img src={Europe} alt="Logo" style={{width: '20vh'}}/>
                            <p style={{color:'white', margin: '0', padding: '0'}}>Europe</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div id='Asia' className="content content-1" onClick={()=>{carClick('Asia')}}>
                            <img src={Asia} alt="Logo" style={{width: '20vh'}}/>  
                            <p style={{color:'white', margin: '0', padding: '0'}}>Asia</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}} >
                <Link to="/ChooseHotel">
                    <button className="grab" style={{color:"black", background:"white",width:"150px",borderRadius: '5px', padding: '10px'}} variant="contained" onClick= {() => Handleclick(car)}>Next</button> 
                </Link>
            </div>

              
        </>
    )
}

export default ChooseContienent

