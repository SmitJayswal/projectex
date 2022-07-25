import React from 'react';
import "./App.css";
import Images from './Components/Header'
import Image from './Components/Footer'
import Editd from './Components/Editdecor';
import SecondaryHeader from './Components/SecondaryHeader';
import Registration from './Components/Registration';
import ADecor from './Components/CustomerDecorMenu';
import Item from './Components/DecorItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cal from './Components/Calendar';
import {useNavigate} from 'react-router-dom';
import Menu from './Components/Menu';
import Foodmenu from './Components/Foodmenu';
import Login from './Components/Login';
import Mainm from './Components/Mainmenu';
import Accept from './Components/AcceptList';
import { Calendar } from 'react-big-calendar';
import Editf from './Components/Editfood';
import Estimate from './Components/Estimate';
import Hold from './Components/HoldList';
import Order from './Components/Ordersummary';
import Reject from './Components/RejectList';
import Pay from './Components/Payment';

const App = () => {
  return (
    <div className='App'>
      <div>
        <Login/> 
       </div>
       </div>
     
  )
}

export default App;
