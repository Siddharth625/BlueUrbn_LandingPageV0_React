import React from "react";
import Navbar from "./Navbar";
import LP_PG_0 from "./Page0_info";
import TechCrunch from "./TechCrunch";

function App(){
    return <div>
                <div class="blue_grad_sec_pos">
                    <Navbar />
                    <LP_PG_0 />
                </div>
                <div class="gray_div">
                    <TechCrunch />
                    <span class="white_box ">
                        <span>
                            <img src="./logo/"></img>
                        </span>
                        <span class="white_heading">Save Energy</span>
                        <span class="white_text_styl">Understand how your building benchmarks against others, identify tailored energy efficiency and clean energy projects, and implement at no capital cost</span></span>
                    <span class="white_box " style={{left : '455px'}}> 
                        <span>
                            <img src="./logo/"></img>
                        </span>
                        <span class="white_heading">Cut Costs</span>
                        <span class="white_text_styl">Lower your energy consumption while deploying capital efficient projects with a payback period in less than 2 years. Customers we work with have the potential to save 20% on their operating expenses from Day 1</span></span>
                    <span class="white_box " style={{left : '850px'}}>
                        <span>
                            <img src="./logo/"></img>
                        </span>
                        <span class="white_heading">Reduce Emissions</span>
                        <span class="white_text_styl">Do good for the environment while being profitable yourself. Lower emissions, meet local mandates, all while making progress on your ESG action plan</span></span>
                </div>

            </div>
};

export default App;
