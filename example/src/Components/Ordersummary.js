import React from "react";
import '../Components/Ordersummary.css';
import Images from "./Header";
import Image from "./Footer";

function Order() {

    return (
        <>
        <div className="pad"><div><Images/></div>
            <center><h1><u>ORDER SUMMARY</u></h1></center>
            <div className="order">
                <div>
                    <ul>
                        <li>
                            <h2>Personal Details</h2>
                        </li>
                        <div class="row">
                            <div class="column">
                                <div className="form-group">
                                    <label className="Firstname">First Name : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" name="Firstname" id="Firstname" autoComplete="off" placeholder="Firstname" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="contact">Contact No. : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="phone" name="contact" id="contact" autoComplete="off" placeholder="Contact Number" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="refer">Reference Name : </label>
                                    &nbsp;
                                    <input type="text" name="refer" id="refer" autoComplete="off" placeholder="Reference" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="address">Address : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <textarea id="address" name="name" placeholder="Write Your Address"></textarea>
                                </div>
                            </div>

                            <div class="column">
                                <div className="form-group">
                                    <label className="Lastname">Last Name : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="text" name="Lastname" id="Lastname" autoComplete="off" placeholder="Lastname" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="phone">Phone No. : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="phone" name="phone" placeholder="phone number" />
                                </div>
                            </div>
                        </div>
                        <li id="list">
                            <h2>Order Details</h2>
                            
                        </li>
                        <ul> Food</ul>
                        <center>
                        <table className="ttt">
                            <tr>
                                <th>Sr. No.</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tr className="rrr">
                                <td>111</td>
                                <td>111</td>
                                <td>111</td>
                                <td>111</td>
                            </tr>
                            <tr>
                                <th className="www">Total Amount </th>
                                <th> </th>
                            </tr>
                            <tr>
                                <th className="www">Discount </th>
                                <th> </th>
                            </tr>
                            <tr>
                                <th className="www">Final Amount </th>
                                <th> </th>
                            </tr>
                        </table>
                        </center>
                        <br/>
                        <ul>Decoration</ul>
                        <center>
                        <table className="ttt">
                            <tr>
                                <th>Sr. No.</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tr className="rrr">
                                <td>111</td>
                                <td>111</td>
                                <td>111</td>
                                <td>111</td>
                            </tr>
                            <tr>
                                <th className="www">Total Amount </th>
                                <th> </th>
                            </tr>
                            <tr>
                                <th className="www">Discount </th>
                                <th> </th>
                            </tr>
                            <tr>
                                <th className="www">Final Amount </th>
                                <th> </th>
                            </tr>
                        </table>
                        </center>
                    </ul>
                    <br/>
                    <center>
                        <button>Print Bill</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>Payment</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>Reset</button>
                    </center>
                </div>
           <Image/></div> </div>
        </>
    )
}

export default Order;