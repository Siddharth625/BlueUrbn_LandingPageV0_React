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
                </div>
            </div>
};

export default App;
