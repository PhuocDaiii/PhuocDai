import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import BCATMMain from '../BCATMMain/BCATMMain'
import './BCATM.css'

export default function BCATM() {
    return (
        <div className="BCATM1">
            <Topbar />
            <div className="BCATM2">
                <Sidebar />
                <BCATMMain/>
            </div>

            
        </div>
    )
}
