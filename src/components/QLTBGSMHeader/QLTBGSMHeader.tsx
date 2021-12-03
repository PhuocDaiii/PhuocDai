import React from 'react'
import './QLTBGSMHeader.css'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import DropDown from '../../assets/bentrai/Down.png';

export default function QLTBGSMHeader() {
    return (
        <div className="Toptop">
            <p className="qlht22">Quản lý hệ thống</p>
            <img src={nutsuyra} className="nutsuyraa1"/>
            <p className="QlTbgsm11">Quản lý thiết bị-GSM</p>
            <div className="diemgiamsat99">Điểm giám sát</div>
            <input className="GSMIDAddress"></input>
            <p className="addressss">GSM ID,địa chỉ</p>
            <p className="ATMbPGD">ATM/Phòng giao dịch</p>
            <input className="GSMIDAddress11"></input>
            <p className="addressss1">Tất cả</p>
            <img src={DropDown} className="dropdowm1"/>
            <p className="knn14">Kết nối nguồn</p>
            <input className="GSMIDAddress111"></input>
            <p className="addressss11">Tất cả</p>
            <img src={DropDown} className="dropdowm11"/>
            <p className="knm14">Kết nối mạng</p>
            <input className="GSMIDAddress1111"></input>
            <p className="addressss111">Tất cả</p>
            <img src={DropDown} className="dropdowm111"/>
            <p className="cb58">Cảnh báo</p>
            <input className="GSMIDAddress11111"></input>
            <p className="addressss1111">Tất cả</p>
            <img src={DropDown} className="dropdowm1111"/>
            <button className="search998">
                <p className="search999">Tìm</p>
            </button>

            <button className="search9981">
                <p className="search9991">+ Thêm mới</p>
            </button>
            








            

        </div>
    )
}
