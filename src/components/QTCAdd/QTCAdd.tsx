import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import './QTCAdd.css'
import QTCAddMain from '../QTCAddMain/QTCAddMain'

export default function QTCAdd() {
    return (
        <div className="QTCadd">
            <Topbar/>
            <div className="QTCadd1">
                <Sidebar/>
                <QTCAddMain/>
            </div>            
        </div>
    )
}
