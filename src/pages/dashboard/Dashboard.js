import React from "react";
import { Link } from "react-router-dom";
import App from '../../App';
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';

function Dashboard(props) {
    return(
        <>
        <header className="shadow">
            <AppBar/>  
        </header>
        {/* <nav>
            <ul>
                <li>
                    <Link to="/">Logout</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav> */}
        
    
        <div className="d-md-flex">
            <SideBar/>
            <Panels/> 
        </div> 
        </>
        
    );
};

export default Dashboard;