import React from 'react'
import './QLTBGSMInstallHeader.css'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import './QLTBGSMInstallHeader.css'

export default function QLTBGSMInstallHeader() {
    return (
        <div className="hit">
            <div className="qlhta99">
                <p className="qlhta100">Quản lý hệ thống</p>
                <img src={nutsuyra} className="suyracc1"/>
                <p className="qlhta101">Quản lý thiệt bi - GSM</p>
                <img src={nutsuyra} className="suyracc2"/>
                <p className="qlhta102">Cài đặt thiết bị</p>

            </div>
            
        </div>
    )
}
