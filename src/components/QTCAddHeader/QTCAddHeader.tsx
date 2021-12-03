import React from 'react'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import './QTCAddHeader.css'

export default function QTCAddHeader() {
    return (
        <div>
            <p className="QLHTa11">Quản lý hệ thống</p>
            <img src ={nutsuyra} className="suyra8871"/>
            <p className="QLNDa1">Quản lý người dùng</p>
            <img src ={nutsuyra} className="suyra8881"/>
            <p className="Capnhat551">Thêm mới</p>
        </div>
    )
}
