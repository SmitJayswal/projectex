import React from "react";
import Item from "./DecorItem";
import Images from "./Header";
import Image from "./Footer";
import SecondaryHeader from "./SecondaryHeader";;

export default function Menu() {

    return (
        <>
            <div>
                <Images />
                
                <SecondaryHeader/>
                
            </div>
            <h1 style={{ color: 'white' }}><center>Our Types of Themes</center></h1>
            <div>
                <Item />
            </div>
            <Image />
        </>
    );
};


