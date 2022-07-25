import React from "react";
import '../Components/HoldList.css';
import Images from "./Header";
import Image from "./Footer";
function Hold() {

    return (
        <><div><Images/></div>
            <center><h1><u>Hold List</u></h1></center>
            <div className="Hlist">
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
          <Image/>  </div>
        </>
    )
}

export default Hold;