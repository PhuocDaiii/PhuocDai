import React from 'react'
import Topbar from '../topbar/topbar'
import Sidebar from '../Sidebar/Sidebar'
import GSMMain from '../GSMMain/GSMMain'
import './GSM.css'
import BCPGDMain from '../BCPGDMain/BCPGDMain'
import QLCBMain from '../QLCBMain/QLCBMain'

export default function GSM() {
    return (
        <div className="GSM1" >
            <Topbar />


            <div className="GSM2">
                <Sidebar />
                <GSMMain />
            </div>


        </div>


    )
}
