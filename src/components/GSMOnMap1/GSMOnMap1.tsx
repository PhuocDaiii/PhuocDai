import React from 'react'
import './GSMOnMap1.css'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import GSMOnMap1Main from '../GSMOnMap1Main/GSMOnMap1Main'


export default function GSMOnMap1() {
    return (
        <div className="GSMONMap1">
            <Topbar/>
            <div className="GSMOnmap2">
            <Sidebar/>
            <GSMOnMap1Main/>
            </div>
            
        </div>
    )
}
