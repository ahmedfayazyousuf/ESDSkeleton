import React from 'react';

const Contact = () => { 
    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <form className="requires-validation" novalidate class="col" id="createform">
                                    <h3>Contact Us</h3>
                                    <p>We are excited to hear from you!</p>

                                    <div class="col">
                                        <input type="text" name="createdfor" class="form-control" placeholder="Name"/>
                                    </div>
                                    
                                    <div class="col">
                                        <input type="text" name="formtitle" class="form-control" placeholder="Email"/>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1"></label>
                                        <textarea class="form-control" name="description" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className="form-button mt-3">
                                        <button id="signup" name="signup" type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact