import React, { useState } from 'react';

import One from './Images/1.jpg';
import Two from './Images/2.jpg';
import Three from './Images/3.jpg';
import Four from './Images/4.jpg';
import Five from './Images/5.jpg';
import Six from './Images/6.jpg';

const AdminPanel = () => {

    const [formdata,setFormData] = useState({
        createdfor:"", formtitle:"", description:"", selectedFile:""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setFormData({...formdata, [name]:value})
    }



    const PostData = async (e) => {
        e.preventDefault();
        const { createdfor, formtitle, description, selectedFile } = formdata;
        
        const res = await fetch("/AdminPanel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ 
                // name: name doesnt need to be written because its the same name
                createdfor, formtitle, description, selectedFile
            })
        });


        
        const data = await res.json();

        if(data.status === 422 || !data) {
            window.alert("Invalid - If error persists, contact admin");
            console.log("Invalid - If error persists, contact admin");
        } else {
            window.alert("Form Posted Successfully!");
            console.log("Form Posted Successfully!");
        }
}

    return (
        <>
            <div className="form-body" style={{border:'none'}}>
                        <div className="form-content" style={{border:'none'}}>
                            <div className="form-items" style={{border:'none'}}>

                                <form>
                                    <div class="container" style={{border:'none'}}>
                                    
                                    
                                        <div class="row" style={{border:'none'}}>

                                                        <div class="col" style={{border:'none'}}>
                                                            <h3>Rooms</h3>
                                                            <p>Add, edit, or delete a room.</p>
                                                            <div class="container" style={{border:'none'}}>
                                                                <div class="row" style={{border:'none'}}>
                                                                <div className='rower' style={{display: 'flex', border: 'none', textAlign: 'center', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
    
                                                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                                                                        <div id='One' className="content content-1" style={{padding: '0', margin: '10px'}}>
                                                                            <img src={One} alt="Logo" style={{width: '20vh', padding: '20px'}}/>
                                                                            <p style={{fontSize: '10px', color:'white'}}>Luxury Room</p>
                                                                        </div>
                                                                    </div>

                                                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                                                        <div id='Two' className="content content-1" style={{padding: '0', margin: '10px'}}>
                                                                            <img src={Two} alt="Logo" style={{width: '20vh', padding: '20px'}}/>  
                                                                            <p style={{fontSize: '10px', color:'white'}}>VIP Room</p>
                                                                        </div>
                                                                    </div>

                                                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                                                        <div id='Three' className="content content-1"  style={{padding: '0', margin: '10px'}}>
                                                                            <img src={Three} alt="Logo" style={{width: '20vh', padding: '20px'}}/>  
                                                                            <p style={{fontSize: '10px', color:'white'}}>Couple Room</p>
                                                                        </div>
                                                                    </div>

                                                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                                                                        <div id='Four' className="content content-1" style={{padding: '0', margin: '10px'}}>
                                                                            <img src={Four} alt="Logo" style={{width: '20vh', padding: '20px'}}/>  
                                                                            <p style={{fontSize: '10px', color:'white'}}>Deluxe Room</p>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>

                                                                </div>
                                                            </div>
                                                        </div>



                                                        <form method="POST" className="requires-validation" novalidate class="col" id="createform">
                                                            <h3>Create Room</h3>
                                                            <p>Dear Admin, fill in the details below to publish a room</p>

                                                            <div class="col">
                                                                <input type="text" name="createdfor" value={formdata.createdfor} class="form-control" onChange={handleInputs} placeholder="Created For Which Hotel"/>
                                                            </div>
                                                            
                                                            <div class="col">
                                                                <input type="text" name="formtitle" value={formdata.formtitle} class="form-control" onChange={handleInputs} placeholder="Room Title"/>
                                                            </div>
                                                            
                                                            <div class="form-group">
                                                                <label for="exampleFormControlTextarea1"></label>
                                                                <textarea class="form-control" name="description" value={formdata.description} onChange={handleInputs} placeholder="Description (optional)" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                            </div>

                                                            <div class="form-group">
                                                                <label for="exampleFormControlFile1">Room Image Thumbnail: </label>
                                                                <input type="file" name="selectedFile" value={formdata.selectedFile} class="form-control-file" onChange={handleInputs} color="white" id="exampleFormControlFile1"/>
                                                            </div>

                                                            <div className="form-button mt-3">
                                                                <button id="signup" name="signup" type="submit"  onClick={PostData} className="btn btn-primary">Publish</button>
                                                            </div>
                                                        </form>

                                        </div>

                                    </div>
                                </form>


                        </div>
                    </div>
                </div>

        </>
    )
};

export default AdminPanel;