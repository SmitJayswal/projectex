import React from "react";
import './Registration.css';
import Images from './Header.js';
import Image from './Footer.js';

function Registration() {

    return(
        <div className="pad">
          <div>
            <Images />
          </div>
          <center><h1><u>Register Customer</u></h1></center>
          <div className="Register">
          <div>
            <ul>
              <form className="Personal-form" id="Personal-form">
                <li>    
                  <h2>Personal Details</h2>
                </li>
                  <div class="row">
                    <div class="column">
                      <div className="form-group">
                        <label className="firstname">First Name : </label>
                        <input type="text" name="firstname" id="firstname" autoComplete="off" placeholder="First Name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact">Contact Number : </label>
                        <input type="text" name="contact" id="contact" autoComplete="off" placeholder="Contact Number"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address : </label>
                        <div className="form-group">
                          <textarea id = "address" name = "name" placeholder="Write Your Address"></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="column">
                      <div className="form-group">
                        <label className="lastname">Last Name : </label>
                        <input type="text" name="lastname" id="lastname" autoComplete="off" placeholder="Last Name"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number : </label>
                        <input type="text" name="phone" id="phone" autoComplete="off" placeholder="Phone Number"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Refrence Name : </label>
                        <input type="text" name="name" id="name" autoComplete="off" placeholder="Refrence Name"/>
                      </div>
                    </div>
                  </div>
                </form>
                
                <br />
              
                <form className="Event-form" id="Event-form">
                  <li>
                    <h2>Event Details</h2>
                  </li>
                
                  <div class="row">
                    <div class="column">
                      <div className="form-group">
                        <label htmlFor="name">Event Name : </label>
                        <input type="text" name="name" id="name" autoComplete="off" placeholder="Event Name"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">Venue : </label>
                      </div>
                      <div className="form-group">
                        <textarea id = "address" name = "name" placeholder="Write Your Venue"></textarea>
                      </div>

                      <div className="form-group">
                        <label htmlFor="days">Total Days : </label>
                        <input type="number" name="days" id="days" autoComplete="off" placeholder="Total Days"/>
                      </div>
                


                    </div>
                    
                    <div class="column">
                      <div className="form-group">
                        <label htmlFor="sdate">Start Date : </label>
                        <input type="date" name="sdate" id="sdate" autoComplete="off" placeholder="Start Date"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="edate">End Date : </label>
                        <input type="date" name="edate" id="edate" autoComplete="off" placeholder="End Date"/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="product">Product : </label><br />
                        <input type="radio" name="product" id="food" autoComplete="off" /> <label>Food</label><br />
                        <input type="radio" name="product" id="decoration" autoComplete="off"/> <label>Decoration</label><br />
                        <input type="radio" name="product" id="both" autoComplete="off"/> <label>Both</label><br />
                      </div>
                    </div>

                  </div>
                </form>
              </ul>    
              </div>
              <center>  
                    <div className="button-container">
                      <input type="submit" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="reset" />
                    </div>
                </center>
            </div>
            <div>
            <Image />
          </div>
        </div>
    )

}

export default Registration;