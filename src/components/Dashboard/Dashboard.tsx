import React from 'react'
import DashboardContent from '../DashboardContent/DashboardContent';
import DashBroadHeader from '../DashBroadHeader/DashBroadHeader';
import DashboardFooter from '../Dashboardfooter/Dashboardfooter';

import './Dashboard.css';


export default function Dashboard() {
    return (
        <div className="dashboard">
            <DashBroadHeader/>
            <DashboardContent/>
            <DashboardFooter />
        </div>
    )
}
