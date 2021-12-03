import React from 'react'
import './QTCHeader.css'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import { Link } from 'react-router-dom';
export default function QTCHeader() {
    return (
        <div className ="QLHT100">
            <p className="QLHT99">Quản lý hệ thống</p>
            <img src={nutsuyra} className="suyra55" />
            <p className="QLHT98">Quyền Truy Cập</p>
            <p className="QTC50">Quyền truy cập :</p>
            <div className="NQTC">
                <p className="NQTC1">Nhập quyền truy cập</p>
            </div>
            <button type="button" className="btnlogin25">
            <p className="btntim25">Tìm</p>
            </button>
            <Link to="/themmoi1">
            <button type="button" className="btnlogin26">
            <p className="btntim26"> + Thêm</p>
            </button>
            </Link>

        </div>
    )
}
