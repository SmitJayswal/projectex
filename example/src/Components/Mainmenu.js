import React from "react";
import Images from "./Header";
import Image from "./Footer";
import './Mainmenu.css';

function Mainm() {

    return(
        <div>
            <div><Images/></div>
          <center><h1><u>Main Menu</u></h1></center>
          <div className="Register">
          <div>
            
                <br />
                </div>
                <center>              
                    <div className="button-container">
                        <button >Food</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>Decoration</button>

                    </div>
                </center>
            </div>
      <Image/>  </div>
    )

}

export default Mainm;