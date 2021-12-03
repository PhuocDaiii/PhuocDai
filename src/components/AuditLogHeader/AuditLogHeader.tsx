import React from 'react'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import './AuditLogHeader.css'

export default function AuditLogHeader() {
    return (
        <div className="AL">
             <div className="TittleTop">
            <p className="QLHT10">Quản lý hệ thống</p>
            <img src={nutsuyra} alt="" className="suyra10"/>
            <p className="Audit10">Audit Log</p>
            <p className="DVQL88">Đơn vị quản lý :</p>
            <div className="DVQL89">
                <p className="DVQL90">Đơn vị quản lý ,điểm giám sát</p>
            </div>
            <button type="button" className="btnlogin20">
            <p className="btntim20">Tìm</p>
            </button>

        </div>
        </div>
    )
}
