import React from "react";
import './DecorItem.css';
import Images from "./Header";
import Image from "./Footer";
import { Router, Route, Routes,useNavigate } from 'react-router-dom'

const Item = () => {    
    

    return (
        <div className="pad">
            <div>
                <Images/>
            </div>
         
            <center><h1>Our Types of Theme</h1></center>
            <div class="row1">
                <div class="column1">
                    <div className="box">
                    </div>
                </div>


                <div class="column2">
                    <div className="box">
                    </div>
                </div>

                <div class="column3">
                    <div className="box">
                    </div>
                </div>

            </div>

            <>
                <div class="rowt1">
                    <div class="columnt1">
                        <div><b style={{color: 'red'}}>Lotus Theme 1</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        </div>
                    </div>
                    <div class="columnt2">
                        <div><b style={{color: 'red'}}>Lotus Theme 2</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                    <div class="columnt3">
                        <div><b style={{color: 'red'}}>Lotus Theme 3</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </>
            <div class="row2">
                <div class="column4">
                    <div className="box">
                    </div>
                </div>

                <div class="column5">
                    <div className="box">
                    </div>
                </div>

                <div class="column6">
                    <div className="box">
                    </div>
                </div>
            </div>

            <>
                <div class="rowt2">
                    <div class="columnt4">
                        <div><b style={{color: 'red'}}>Lotus Theme 4</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                    <div class="columnt5">
                        <div><b style={{color: 'red'}}>Lotus Theme 5</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                    <div class="columnt6">
                        <div><b style={{color: 'red'}}>Lotus Theme 6</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </>

            <div class="row3">
                <div class="column7">
                    <div className="box">
                    </div>
                </div>


                <div class="column8">
                    <div className="box">
                    </div>
                </div>

                <div class="column9">
                    <div className="box">
                    </div>
                </div>
            </div>  

            <>
                <div class="rowt3">
                    <div class="columnt7">
                        <div><b style={{color: 'red'}}>Lotus Theme 7</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                    <div class="columnt8">
                        <div><b style={{color: 'red'}}>Lotus Theme 8</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                    <div class="columnt9">
                        <div><b style={{color: 'red'}}>Lotus Theme 9</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </>
            <center><button type="button">Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button">Back</button></center>
        <Images/></div>

    )
};

export default Item;