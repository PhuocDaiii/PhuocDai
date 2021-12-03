import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import AuditLogMain from '../AuditLogMain/AuditLogMain'
import './AuditLog.css'

export default function AuditLog() {
    return (
        <div className="AuditLog1">
            <Topbar />
            <div className="AuditLog2">
             <Sidebar />
             <AuditLogMain/>
            </div>
            
        </div>
    )
}
