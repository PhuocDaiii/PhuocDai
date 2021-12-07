import React from 'react'
import './GSMOnMap2Header.css'
import Search from '../../assets/bentrai/Vector.png';

export default function GSMOnMap2Header() {
    return (
        <div>
             <p className="timdiemgiamsat99">Tìm điểm giám sát</p>
            <p className="diemgiamsat999">Điểm giám sát</p>
            <input className="nhapdiadiem99"/>
            <img src={Search} className="timkiemkiem1"/>
            <p className="nhapdiadiem999">Nhập địa điểm</p>
        </div>
    )
}
