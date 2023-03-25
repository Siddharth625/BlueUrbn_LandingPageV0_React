import React from "react";

function Navbar(){
    return <div>
             <nav class="navbar navbar-expand-lg" style={{paddingTop : '20px'}}>
                <div class="navbar-header">
                    <a>
                        <img class="BU_Logo_img" src="./logo/BULOGO_COLORONWHITE.jpg" alt=""></img>
                    </a>
                    <a class="navbar-brand BU_logo_text" style={{color: 'white'}} href="#"> BLUEURBN</a>
                </div>
                <ul class="navbar-nav" style={{marginright: '60px'}}>
                    <li>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style={{color: 'white'}} href="">About</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" style={{color: 'white'}} href="">How It Works</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" style={{color: 'white'}} href="">Partnerships</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" style={{color: 'white'}} href="">Contact</a>
                    </li>
                    <li class="nav-item" style={{marginRight: '10px'}}>
                        <a class="nav-link " href=""><span class="gsbtn">Get Started</span></a>
                    </li>
                </ul>
                </nav>
            <hr style={{width : '86%', margin : 'auto', marginTop: '15px', color: 'white'}}></hr>
        </div>
};

export default Navbar;