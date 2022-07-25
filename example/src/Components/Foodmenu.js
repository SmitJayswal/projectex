import React from "react";
import './Foodmenu.css';
import { Router, Route, Routes,useNavigate } from 'react-router-dom';
import Images from "./Header";
import Image from "./Footer";
const Foodmenu = () => {    
    return (
        <div>
            <div><Images/></div>
         
            <center><h1>Our Menu</h1></center>
            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>STARTER</th>
                </tr>
                <tr>
                    <td>Panjabi Kabab</td>
                    <td>Corn Palak Kabab</td>
                    <td className="img1" rowSpan={5}></td>
                </tr>
                <tr>
                    <td>Mini Chinese Samosa</td>
                    <td>Lilava Potaly</td>
                </tr>
                <tr>
                    <td>Macroni Cheese Ball</td>
                    <td>Paneer pakoda</td>
                </tr>
                <tr>
                    <td>Paneer Chilly Dry</td>
                    <td>Corn Basket</td>
                </tr>
                <tr>
                    <td>Paneer Lollipop</td>
                    <td>Veg. Lollipop</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>

            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>SOUP</th>
                </tr>
                <tr>
                    <td className="img2" rowSpan={5}></td>
                    <td>Tometo with Corn</td>
                    <td>Sweet Corn</td>
                </tr>
                <tr>
                    <td>Manchaw Soup</td>
                    <td>Lemon Coriander</td>
                </tr>
                <tr>
                    <td>Malabar Soup</td>
                    <td>Tometo Dhaniya Soup</td>
                </tr>
                <tr>
                    <td>Tometo with Pasta</td>
                    <td>Ministron</td>
                </tr>
                <tr>
                    <td>Bit root & Carrot</td>
                    <td>Spinach Corn</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>

            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>SWEET</th>
                </tr>
                <tr>
                    <td>Dry Fruit Halavo</td>
                    <td>Pure Ghee Lapsi</td>
                    <td className="img3" rowSpan={5}></td>
                </tr>
                <tr>
                    <td>Anjeer Barfi</td>
                    <td>Kopara Ghari</td>
                </tr>
                <tr>
                    <td>Gulabjamun</td>
                    <td>Blue Diamond Matho</td>
                </tr>
                <tr>
                    <td>Kaju Katri</td>
                    <td>Badam Pista Roll</td>
                </tr>
                <tr>
                    <td>Rasmalai</td>
                    <td>Halvasan</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>

            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>SABJI</th>
                </tr>
                <tr>
                    <td className="img4" rowSpan={5}></td>
                    <td>Paneer Butter Masala</td>
                    <td>Kaju Paneer Masala</td>
                </tr>
                <tr>
                    <td>Dum Aloo</td>
                    <td>Paneer Tufani</td>
                </tr>
                <tr>
                    <td>Kadhai Paneer</td>
                    <td>Veg. Kolhapuri</td>
                </tr>
                <tr>
                    <td>Ranguni Val</td>
                    <td>Green Gujarat</td>
                </tr>
                <tr>
                    <td>Flower Potato</td>
                    <td>Surti Undhiyu</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>

            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>ROTI</th>
                </tr>
                <tr>
                    <td>Butter Fulka Roti</td>
                    <td>Butter Rumali Roti</td>
                    <td className="img5" rowSpan={5}></td>
                </tr>
                <tr>
                    <td>Butter Tandoori Roti</td>
                    <td>Butter Nan</td>
                </tr>
                <tr>
                    <td>Butter Parotha</td>
                    <td>Butter Kulcha</td>
                </tr>
                <tr>
                    <td>Missi Roti</td>
                    <td>Live Puri</td>
                </tr>
                <tr>
                    <td>Palak Puri</td>
                    <td>Jira Masala Puri</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>
            
            
            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>RICE & DAL</th>
                </tr>
                <tr>
                    <td className="img6" rowSpan={5}></td>
                    <td>Plain Rice</td>
                    <td>Gujarati Dal</td>
                </tr>
                <tr>
                    <td>Jira Rice</td>
                    <td>Dal Fry</td>
                </tr>
                <tr>
                    <td>Kashmiri Pulav</td>
                    <td>Bundi Kadhi</td>
                </tr>
                <tr>
                    <td>Veg. Birayani</td>
                    <td>Gujarati Kadhi</td>
                </tr>
                <tr>
                    <td>Taj Laving Rice</td>
                    <td>Dal Tadka</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>

            <center>
            <table cellPadding={50} cellSpacing={30}>
                <tr>
                    <th colSpan={3}>DESSERT</th>
                </tr>
                <tr>
                    <td>Kesar Pista Icecream</td>
                    <td>Candy</td>
                    <td className="img7" rowSpan={5}></td>
                </tr>
                <tr>
                    <td>Rajhbhog Icecream</td>
                    <td>Butter Scotch Icecream</td>
                </tr>
                <tr>
                    <td>American Dry Fruit Icecream</td>
                    <td>Golden Parl Icecream</td>
                </tr>
                <tr>
                    <td>Cookies & Cream Icecream</td>
                    <td>Sitafal Icecream</td>
                </tr>
                <tr>
                    <td>Bombay Kulfi</td>
                    <td>Mix Kulfi</td>
                </tr>
            </table>
            <button className="button">
                Add
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="button">
                Delete
            </button>
            </center>


            <center><button className="button1">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="button1">Back</button></center>
        <Image/></div>

    )
};

export default Foodmenu;