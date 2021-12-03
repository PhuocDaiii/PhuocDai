import React from 'react'
import QLTBGSMAddPhoneMain from '../QLTBGSMAddPhoneMain/QLTBGSMAddPhoneMain'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../topbar/topbar'
import './QLTBGSMAddPhone.css'

export default function QLTBGSMAddPhone() {
    return (
        <div className="addphone99">
            <Topbar/>
            <div className="addphone100">
            <Sidebar/>
            <QLTBGSMAddPhoneMain/>


            </div>
            
        </div>
    )
}
