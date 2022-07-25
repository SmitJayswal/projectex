import React from "react";
import '../Components/Editfood.css';
import Images from "./Header";
import Image from "./Footer";
function Editf() {

    return (
        <>
        <div><Images/></div>
        <div className="col">
            <center><h1>Edit Food Items</h1><h1 style={{ color: 'white' }}><u>Edit Food Menu</u></h1></center>
            <center>
                <div>
                    <label for="selectf" style={{ color: 'white' }}>Choose a Category : </label>
                    <select name="selectf" id="selectf">
                        <option value="-">-</option>
                        <option value="Starter">Starter</option>
                        <option value="Maincourse">Maincourse</option>
                        <option value="Desert">Desert</option>
                        <option value="Colddrink">Colddrink</option>
                    </select>
                    &nbsp;
                    <input type="search" name="Enteritem" id="Enteritem" autoComplete="off" placeholder="Enter Item" />
                    <br/>
                </div>
            </center>
            <br/>
            <center>
            <div className="sbutton">
            <button>Search</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button>Back</button>
            </div>
            </center>
            <br/>
            <center>
                <button>Add Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Delete Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button>Update Item</button>
            </center>
            <br/>
            <br/>
            <br/>
        <Image />
        </div>
        </>
    )
}

export default Editf;
