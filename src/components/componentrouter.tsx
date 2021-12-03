import React from 'react'
import Topbar from '../components/topbar/topbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import DashboardContent from './DashboardContent/DashboardContent';
import './componentrouter.css'



export default function componentrouter() {
    return (
        <div className="Wrapper1">
            <Topbar />
                <Sidebar/>
                <Dashboard/>
        </div>
    )
}
