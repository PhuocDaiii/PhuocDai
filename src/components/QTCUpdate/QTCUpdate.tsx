import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import './QTCUpdate.css'
import QTCUpdateMain from '../QTCUpdateMain/QTCUpdateMain'

export default function QTCUpdate() {
    return (
        <div className="QTCUpdate1">
            <Topbar/>
            <div className="QTCUpdate2">
                <Sidebar/>
                <QTCUpdateMain/>
            </div>
            
        </div>
    )
}
