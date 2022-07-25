import React, { useState } from 'react'
import "../Components/Navbar.css"
import { BsBoxArrowRight, BsCardChecklist, BsFillHouseDoorFill, BsFillMenuButtonWideFill, BsLayoutTextSidebar, BsTextLeft, BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Images from './Header';
import jQuery from 'jquery';
import $ from 'jquery';

const Navbar = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }

    return (
        <div className={active ? 'navbar' : 'navbar-mobile'}>

            <div className='menu-icon' onClick={activateNav}>

                {!active ? <BsTextLeft className='menu' /> : <BsTextLeft className='close-icon' />}

            </div>
            
            <nav>
                <ul className={active ? 'ul-item' : 'ul-item oicon'}>

                    <li>
                        <BsFillHouseDoorFill className='icon' />
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <BsFillMenuButtonWideFill className='icon' />
                        <Link to='/'>Menu</Link>
                    </li>

                    <li>
                        <BsCardChecklist className='icon' />
                        <Link to='/'>Product List</Link>
                    </li>

                    <li>
                        <BsLayoutTextSidebar className='icon' />
                        <Link to='/'>Stock</Link>
                    </li>

                    <li>
                        <BsCardChecklist className='icon' />
                        <Link to='/'>Hold List</Link>
                    </li>

                    <li>
                        <BsCardChecklist className='icon' />
                        <Link to='/'>Reject List</Link>
                    </li>

                    <li>
                        <BsBoxArrowRight className='icon' />
                        <Link to='/'>Logout</Link>
                    </li>

                </ul>
            </nav>
            
        </div>
        
    )
}

export default Navbar;