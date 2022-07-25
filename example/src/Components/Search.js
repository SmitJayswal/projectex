import React from "react";
import '../Components/Search.css';

function Cust() {

    return (
        <>
            <center><h1><u>Search Customer</u></h1></center>
            <div className="search">
                <div>
                    <center>
                    <label className="Entercustomer">Enter Customer Name : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="search" name="Entercustomer" id="Entercustomer" autoComplete="off" placeholder="Enter Customer" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button>Search</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button>Back</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <table className="aaa">
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Name</th>
                                            <th>Contact Number</th>
                                            <th>Venue</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>ID</th>
                                        </tr>
                                        <tr>
                                            <td>111</td>
                                            <td>111</td>
                                            <td>111</td>
                                            <td>111</td>
                                            <td>111</td>
                                            <td>111</td>
                                            <td>111</td>
                                        </tr>
                                    </table>
                    </center>
                </div>

            </div>
        </>
    )
}

export default Cust;