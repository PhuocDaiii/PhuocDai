import React from 'react'
import './QLND.css'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import QLNDMain from '../QLNDMain/QLNDMain'

export default function QLND() {
    return (
        <div className="QLND1">
            <Topbar/>
            <div className="QLND2">
            <Sidebar/>
            <QLNDMain/>
            </div>
            
        </div>
    )
}
