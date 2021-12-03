import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import GSMOnMap2Main from '../GSMOnMap2Main/GSMOnMap2Main'
import './GSMOnMap2.css'

export default function GSMOnMap2() {
    return (
        <div className="Gsmonmap2">
            <Topbar/>
            <div className="Gsmonmao22">
            <Sidebar/>
            <GSMOnMap2Main/>
            </div>
        </div>
    )
}
