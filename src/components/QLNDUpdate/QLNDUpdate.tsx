import React from 'react'
import QLNDUpdateMain from '../QLNDUpdateMain/QLNDUpdateMain'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../topbar/topbar'
import './QLNDUpdate.css'

export default function QLNDUpdate() {
    return (
        <div className="abc123">
            <Topbar/>
            <div className="156151">
                <Sidebar/>
                <QLNDUpdateMain/>
            </div>
            
        </div>
    )
}
