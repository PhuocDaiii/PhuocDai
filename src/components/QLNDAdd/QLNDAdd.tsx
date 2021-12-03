import React from 'react'
import QLNDAddMain from '../QLNDAddMain/QLNDAddMain';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../topbar/topbar';
import './QLNDAdd.css'

export default function QLNDAdd() {
    return (
        <div className="qlndadd">
            <Topbar/>
            <div className="qlndadd2">
            <Sidebar/>
            <QLNDAddMain/>

            </div>
            
        </div>
    )
}
