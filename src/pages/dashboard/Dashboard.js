import React from "react";
import {AppBar} from '../../components/appbar';
import {SideBar} from '../../components/sidebar';
import {Panels} from '../../components/panels';

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