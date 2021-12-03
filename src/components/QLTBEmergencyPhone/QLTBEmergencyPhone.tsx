import React from 'react'
import QLTBEmergencyPhoneMain from '../QLTBEmergencyPhoneMain/QLTBEmergencyPhoneMain'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../topbar/topbar'
import './QLTBEmergencyPhone.css'

export default function QLTBEmergencyPhone() {
    return (
        <div className="leomessi">
            <Topbar/>
            <div className="leomessi1">
            <Sidebar/>
            <QLTBEmergencyPhoneMain/>
            </div>
            
        </div>
    )
}
