import React from "react";
import Navbar from "./Navbar";
import LP_PG_0 from "./Page0_info";
import TechCrunch from "./TechCrunch";
import LP_PG_1 from "./Page1_info";
import Three_easy_steps from "./Page3_info";
import Get_Started_Address from "./Page4_info";

function App(){
    return <div>
                <div class="blue_grad_sec_pos">
                    <Navbar />
                    <LP_PG_0 />
                </div>
                <div className="gray_div">
                        <TechCrunch />
                        <LP_PG_1 />
                </div>
                <Three_easy_steps />
                <Get_Started_Address />


                <div className="gray_div_v2">
                    <h1 className="dont_take_our_word">Don’t take our word for it</h1>
                    <h1 className="see_for_yourself">See For Yourself</h1>
                    <img className="blog_1_pos" src="./logo/Blog_img_1.png"></img>
                        <span className="blog_1_pos blog_text_h1" style={{top : "430px"}}>Smart Building Energy Management systems can lower energy consumption by 30%</span>
                        <span className="blog_1_pos blog_text_h2" style={{top : "660px"}}>Learn more about how IoT building systems can have a payback period of 10 months</span>
                    <img className="blog_2_pos" src="./logo/Blog_img_2.png"></img>
                        <span className="blog_2_pos blog_text_h1" style={{top : "310px"}}>Geotagging with an address</span>
                        <span className="blog_2_pos blog_text_h2" style={{top : "420px"}}>Maximize your solar investment</span>
                    <img className="blog_3_pos" src="./logo/Blog_img_3.png"></img>
                        <span className="blog_3_pos blog_text_h1" style={{top : "310px"}}>High performance buildings</span>
                        <span className="blog_3_pos blog_text_h2" style={{top : "420px"}}>No Capital Costs</span>
                    <img className="blog_4_pos" src="./logo/Blog_img_4.png"></img>
                        <span className="blog_4_pos blog_text_h1" style={{top : "710px"}}>The story lies in the Data</span>
                        <span className="blog_4_pos blog_text_h2" style={{top : "950px"}}>Whether it’s increase in NOI or reducing emissions, data is paramount   </span>
                    <img className="blog_5_pos" src="./logo/Blog_img_5.png"></img>
                        <span className="blog_5_pos blog_text_h1" style={{top : "830px"}}>Profitable ESG, done right</span>
                        <span className="blog_5_pos blog_text_h2" style={{top : "960px"}}>Learn about how we enable enterprises to measure, report and take action with ease  </span>
                </div>

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

export default App;
