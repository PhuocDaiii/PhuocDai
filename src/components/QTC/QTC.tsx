import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import './QTC.css'
import QTCMain from '../QTCMain/QTCMain'

export default function QTC() {
    return (
        <div className="QuyenTruyCap">
            <Topbar/>
            <div className="QTC87">
            <Sidebar />
            <QTCMain/>
            </div>
            
        </div>
    )
}
