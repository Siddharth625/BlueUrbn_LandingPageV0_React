import React from "react";

function LP_PG_5(){
    return <div>
            <div>
                    <h1 className="lets_connect_text">Let's Connect</h1>
                </div>
                <div className="lc_blue_section">
                    <h5 className="lc_location">Location</h5>
                    <h6 className="lc_loc_text">Understand how your building benchmarks against others, identify tailored energy</h6>

                    <h5 className="lc_location" style={{top:'160px'}}>Call Us</h5>
                    <h6 className="lc_loc_text" style={{top:'200px'}}>+91 9876543210</h6>
                    <h6 className="lc_loc_text" style={{top:'220px'}}>+91 9876543210</h6>

                    <h5 className="lc_location" style={{top:'270px'}}>Email</h5>
                    <h6 className="lc_loc_text" style={{top:'310px'}}>blueurbn@gmail.com</h6>
                    
                    <div>
                        <span className="form_box">
                            <span className="form_name" style={{top:'40px'}}><h4>Early Access Form</h4></span>
                            <hr className="form_top_line"></hr>
                            <span className="form_name"><h4>Name</h4></span>
                            <form action="">
                                <input type="text" id="form_name" className="form_input_box"></input>
                            </form>
                            <span className="form_name" style={{top:'280px'}}><h4>Email Address</h4></span>
                            <form action="">
                                <input type="text" id="form_email" className="form_input_box" style={{top:'340px'}}></input>
                            </form>
                        </span>
                    </div>
                    <span className="form_next" style={{zIndex : '-1'}}></span>
                    <div className="footer_blue_ribbon"></div>
                    <footer className="footer_bkg">

                    </footer>

                </div>
    </div>
};

export default LP_PG_5;