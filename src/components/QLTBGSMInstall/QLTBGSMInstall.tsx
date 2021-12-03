import React from 'react'
import QLTBGSMInstallMain from '../QLTBGSMInstallMain/QLTBGSMInstallMain'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../topbar/topbar'
import './QLTBGSMInstall.css'
export default function QLTBGSMInstall() {
    return (
        <div className="Qltbgsminstall">
                <Topbar/>
            <div className="Qltbgsminstall1">
                <Sidebar/>
                <QLTBGSMInstallMain/>

            </div>
            
        </div>
    )
}
