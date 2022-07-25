import React from "react";
import '../Components/Estimate.css';
import Images from "./Header";
import Image from "./Footer";
function Estimate() {

    return (
        <>
        <div className="pad"><div><Images/></div>
            <center><h1 STYLE="color: #black"><u>ESTIMATE</u></h1></center>
            <div className="Estimate">
                <div>
                    <div class="row">
                        <div class="column">
                            <center>
                            <div className="form-group">
                                <label className="Customerid" STYLE="color: #black">Customer ID : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="number" name="customerid" id="customerid" autoComplete="off" placeholder="Customer ID" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="customername" STYLE="color: #black">Customer Name : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="customername" id="customername" autoComplete="off" placeholder="Customer Name" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="contact" STYLE="color: #black">Contact No. : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="number" name="contact" id="contact" autoComplete="off" placeholder="Contact" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="Eventdate" STYLE="color: #black">Event Date : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="date" name="Eventdate" id="Eventdate" autoComplete="off" placeholder="DATE" />
                            </div>
                            </center>
                        </div>

                        <div class="column">
                            <center>
                            <div className="form-group">
                                <label className="Email" STYLE="color: #black">Email : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="address" STYLE="color: #black">Address : </label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <textarea id="address" name="address" placeholder="Write Your Address"></textarea>
                            </div>
                            </center>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <center>
                            <div className="ooo"><h2>Decoration</h2>
                            </div>
                            <div className="aaa">
                                <div className="form-group">
                                    <h4>Item 1</h4>
                                </div>
                                <div className="form-group">
                                    <h4>Item 2</h4>
                                </div>
                            
                            </div>
                        </center>
                    </div>

                    <div>
                        <div class="column">
                            <center>
                                <div className="ooo"><h2>Food</h2>
                                </div>
                                <div className="aaa">
                                    <div className="form-group">
                                        <h4>Item 1</h4>
                                    </div>
                                    <div className="form-group">
                                        <h4>Item 2</h4>
                                    </div>
                                    
                                </div>
                            </center>
                        </div>

                    </div>
                </div>

                <center>
                    <button className="button " STYLE="color: black">Accept</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="button " STYLE="color: black">Hold</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="button " STYLE="color: black">Reject</button>
                </center>
                <br />
                <center>
                    <button className="button button1" STYLE="color: black" > Print</button>
                </center>
            </div>
            <Image/></div>
        </>
    )
}

export default Estimate;