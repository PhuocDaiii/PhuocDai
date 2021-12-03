import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'

import './QLCB.css'
import QLCBMain from '../QLCBMain/QLCBMain'

export default function QLCB() {
    return (
        <div className="QLCB1">
            <Topbar />
            <div className="QLCB2">
                <Sidebar />
                <QLCBMain />
            </div>
        </div>
    )
}
