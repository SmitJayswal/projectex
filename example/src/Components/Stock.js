import React from "react";
import '../Components/Stock.css';

function Stock() {

    return (
        <>
            <center><h1><u>Stock</u></h1></center>
            <div className="stock">
                <div>
                    <center>
                    <label className="stocks">Enter Item : </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="search" name="stocks" id="stocks" autoComplete="off" placeholder="Enter Item" />
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
                                            <th>Item ID</th>
                                            <th>Name of Item</th>
                                            <th>Quantity</th>
                                        </tr>
                                        <tr>
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

export default Stock;