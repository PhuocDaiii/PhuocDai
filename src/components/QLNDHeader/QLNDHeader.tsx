import React from 'react'
import './QLNDHeader.css'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import { Link } from 'react-router-dom';

export default function QLNDHeader() {
    return (
        <div>
              <p className="QLHT991">Quản lý hệ thống</p>
            <img src={nutsuyra} className="suyra551" />
            <p className="QLHT981">Quản lý người dùng</p>
            <p className="QTC501">Thông tin người dùng :</p>
            <div className="NQTC1">
                <p className="NQTC11">Nhập thông tin người dùng</p>
            </div>
            <button type="button" className="btnlogin251">
            <p className="btntim251">Tìm</p>
            </button>
            <Link to="/themmoi55">
            <button type="button" className="btnlogin261">
            <p className="btntim261"> + Thêm mới</p>
            </button>
            </Link>
           
        </div>
    )
}
