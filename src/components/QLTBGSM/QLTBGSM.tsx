import React from 'react'
import QLTBGSMMain from '../QLTBGSMMain/QLTBGSMMain'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from'../topbar/topbar'
import './QLTBGSM.css'

export default function QLTBGSM() {
    return (
        <div className="qltbgsm">
            <Topbar/>
            <div className="qltbgsm1">
                <Sidebar/>
                <QLTBGSMMain/>


            </div>
            
        </div>
    )
}
