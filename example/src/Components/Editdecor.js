import React from "react";
import '../Components/Editdecor.css';
import Images from "./Header";
import Image from "./Footer";


function Editd() {

    return (
        <>
        <div><Images/></div>
        <div className="col">
            
            <center><h1>Edit decoration Items</h1><h1 style={{ color: 'white' }}><u>Edit Decoration Menu</u></h1></center>
            <center>
                <div>
                    <label for="selectf" style={{ color: 'white' }} >Choose a Category : </label>
                    <select name="selectf" id="selectf" className="com">
                        <option value="-">-</option>
                        <option value="Mandap">Mandap</option>
                        <option value="Seating">Seating</option>
                        <option value="Chori">Chori</option>
                        <option value="Entrygate">Entry Gate</option>
                        <option value="Tables">Tables</option>
                        <option value="Stages">Stages</option>
                        <option value="Photobooth">Photo Booth</option>
                        <option value="Matteresses">Matteresses</option>
                        <option value="Lighting">Lighting</option>
                    </select>
                    &nbsp;
                    <input type="search" name="Enteritem" id="Enteritem" autoComplete="off" placeholder="Enter Item" className="comp" />
                    <br/>
                </div>
            </center>
            <br/>
            <center>
            <div className="sbutton">
            <button  className="but">Search</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button  className="but">Back</button>
            </div>
            </center>
            <br/>
            <center>
                <button  className="but">Add Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button  className="but">Delete Item</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button  className="but">Update Item</button>
            </center>
            <br/>
            <br/>
            <br/>
        <Image/></div>
        </>
    )
}

export default Editd;
