import React from "react";
import '../Components/RejectList.css';
import Images from "./Header";
import Image from "./Footer";
function Reject() {

    return (
        <><div><Images/></div>
            <center><h1><u>Reject List</u></h1></center>
            <div className="Rlist">
                <div>
                    <center>
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
                        <br />
                        <br />
                        <button>Back</button>
                    </center>
                </div>
            </div>
            <Image/>
        </>
    )
}

export default Reject;