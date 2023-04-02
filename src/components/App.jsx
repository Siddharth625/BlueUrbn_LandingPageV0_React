import React from "react";
import Navbar from "./Navbar";
import LP_PG_0 from "./Page0_info";
import TechCrunch from "./TechCrunch";
import LP_PG_1 from "./Page1_info";
import LP_PG_2 from "./Page2_info";
import LP_PG_3 from "./Page3_info";
import LP_PG_4 from "./Page4_info";
import LP_PG_5 from "./Page5_info";

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
                        <LP_PG_2 />
                        <LP_PG_3 />
                        <LP_PG_4 />
                        <LP_PG_5 />
            </div>
};

export default App;
