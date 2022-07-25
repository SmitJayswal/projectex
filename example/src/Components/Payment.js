import React from "react";
import Image from "./Footer";
import Images from "./Header";
import './Payment.css';

function Pay() {

    return(
        <div>
          <div><Images/></div>
          <center><h1><u>Payment</u></h1></center>
          <div className="Payed">
          <div>
            <center>
              <form className="Personal-form" id="Personal-form">
                  <div class="row10">
                    <div class="column10">
                      <div className="form-group">
                        <input type="textbox" name="Curamt" id="Curamt" autoComplete="off" placeholder="Current Amount (Paid)"/>
                      </div>
                      </div>
                      <div class="column10">
                      <div className="form-group">
                        <input type="textbox" name="totamt" id="totamt" autoComplete="off" placeholder="Total Amount"/>
                      </div>
                      </div>
                    </div>
                </form>
                  
                  <div class="row20">
                    <div class="column20">
                      <div className="form-group">
                      <input type="checkbox" name="product" id="cash" autoComplete="off" /> <label>Cash</label>
                      </div>

                        </div>
                      <div class="column20">
                      <div className="form-group">
                      <input type="checkbox" name="product" id="online" autoComplete="off"/> <label>Online</label>
                      </div>

                        </div>
                      <div class="column20">
                      <div className="form-group">
                      <input type="checkbox" name="product" id="card" autoComplete="off"/> <label>Card</label>
                      </div>
    
                    </div>
                    
                  </div>
      
                </center>
              </div>
              <center>  
                    <div className="button-container">
                      <button>Select</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button>Clear</button>
                    </div>
                </center>
            </div>
        <div><Image/></div></div>
    )

}

export default Pay;