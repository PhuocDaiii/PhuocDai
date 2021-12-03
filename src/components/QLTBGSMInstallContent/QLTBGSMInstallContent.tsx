import React from 'react'
import './QLTBGSMInstallContent.css'
import DropDown from '../../assets/bentrai/Down.png';
import daucong from '../../assets/2icon/daucong.png';
import { Link } from 'react-router-dom';


export default function QLTBGSMInstallContent() {
    return (
        <div className="informationmain">
            <p className="infordevice">Thông tin thiết bị</p>
           <label className="IMEI11">IMEI :</label>
           <p className="number999">4895482646960</p>
           <label className="datekichhoat">Ngày kích hoạt :</label>
           <p className="datepicker99">19/02/2021 22:00:00</p>
           <label className="namedevice">Tên thiết bị :</label>
           <input className="ATM1001"/>
           <p className="qwertyui">ATM - 1294345324</p>
           <label className="typedevice">Loại thiết bị :</label>
           <input className="ATM10011"/>
           <p className="qwertyuio">Thiết bị cảnh báo dành cho máy ATM </p>
           <img src={DropDown} className="tiktoptop"/>
           <label className="simso">SIM:</label>
           <input className="unknow"/>
           <p className="unknow1">Unknow</p>
           <label className="addressbuild">Địa chỉ lắp đặt :</label>
           <input className="addressbuild1"/>
           <p className="addressbuild2">86/33 Âu cơ, Phường 9, quận Tân Bình, TP.HCM</p>
                


                <div className="center10101">
                    <p className="InstallNumberphone">Cài đặt số điện thoại</p>
                        <p className="emergencyphone">Số điện thoại</p>
                        <p className="emergencyphone1">khẩn cấp :</p>
                        <input className="NUMBERPHONE99"/>

                        <p className="pone11">093 025 0645</p>
                        <Link to="/phone11">
                        <img src={daucong} className="daucong99"/>
                        </Link>
                        <p className="addnumberphone">Thêm số khẩn cấp</p>
                        <p className="sdt99">Số điện thoại</p>
                        <p className="emergency45">Nhận cuộc gọi</p>
                        <input className="NUMBERPHONE100"/>
                        <p className="sdt100">079 359 3535</p>
                        <Link to="/phone22">
                        <img src={daucong} className="daucong101"/>
                        </Link>
                        <p className="addnumberphone1">Thêm số điện thoại nhận cuộc gọi</p>
                        <p className="sdt71">Số điện thoại</p>
                        <p className="sendmess">Gửi tin nhắn</p>
                        <input className="NUMBERPHONE500"/>
                        <p className="sdt78">092 046 0505</p>

                </div>

                <div className="righthand">
                    <p className="Caution">Cài đặt ngưỡng cảnh báo</p>
                    <p className="Caution1">Ngưỡng cảnh báo rung</p>
                    <input className="Caution11"/>
                    <p className="Caution111">1.500</p>
                    <p className="Caution2">Ngưỡng cảnh báo rò điện (dòng)</p>
                    <input className="Caution22"/>
                    <p className="Caution222">70</p>
                    <p className="Caution3">Ngưỡng cảnh báo khói(mật độ)</p>
                    <input className="Caution33"/>
                    <p className="Caution333">80</p>
                    <p className="Caution4">Ngưỡng cảnh báo nhiệt (độ C)</p>
                    <input className="Caution44"/>
                    <p className="Caution444">70</p>
                    <p className="Caution5">Cảnh báo PIN (%)</p>
                    <input className="Caution55"/>
                    <p className="Caution555">15</p>

                   <button className="BTNCancel">
                        <p className="search10189">Hủy </p>
                   </button>


                   <button className="BTNsave">
                        <p className="search1018910">Lưu </p>

                   </button>







                </div>

        </div>

        
    )
}
