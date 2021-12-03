import React from 'react'
import BCPGDMain from '../BCPGDMain/BCPGDMain'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import './BCPGD.css'

export default function BCPGD() {
    return (
        <div className="BCPGD1">
              <Topbar />
            <div className="BCPGD2">
            <Sidebar />
            <BCPGDMain/>
            </div>
            
        </div>
    )
}
