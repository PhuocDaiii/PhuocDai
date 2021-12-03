import React from 'react'
import './QLNDAddContent.css'
import DropDown from '../../assets/bentrai/Down.png';
import chedau from '../../assets/2icon/chedau.png';

export default function QLNDAddContent() {
    return (
        <div className="QLNDAddmain">
            <p className="tdn">Tên đăng nhập  :</p>
            <input  type="text" className="namelogin1" name="Uname" />
            <p className="ntdn5">Nhập tên đăng nhập</p>
            <p className="email5">Email  :</p>
            <input  type="text" className="nameemail5" name="Uname" />
            <p className="nemail5">Nhập email</p>
            <p className="cdvql5">Chọn đơn vị quản lý</p>
            <div className="aaaa">
            <input  type="text" className="vlc5" name="Uname" />
            <p className="vlc8">Vui lòng chọn</p>
            <img src={DropDown} className="dropdown69"/>
            </div>
            <p className="matkhau69">Mật khẩu :</p>
            <input  type="text" className="chedau55" name="Uname" />
            <p className="bacham">●●●●●●●●●●</p>
            <img src={chedau} className="chedau1"/>
            <div className="QLNDAddmainright">
            <p className="fullname">Họ và Tên  :</p>
                <input  type="text" className="nhvt5" name="Uname" />
                <p className="nhvt6">Nhập họ và tên</p>
                <p className="sdt6">Số điện thoại :</p>
                <input  type="text" className="nsdt6" name="Uname" />
                <p className="nsdt7">Nhập số điện thoại</p>
                <p className="qtc7">Quyền truy cập :</p>
                <input  type="text" className="vlc10" name="Uname" />
                <p className="vlc11">Vui lòng chọn</p>
                <img src={DropDown} className="dropdown70"/>
                <p className="xnmk10">Xác nhận mật khẩu :</p>
                <input  type="text" className="chedau49" name="Uname" />
                <p className="bacham09">●●●●●●●●●●</p>
                <img src={chedau} className="chedau2"/>
                <p className="officialinfor">là những thông tin bắt buộc</p>

                <button className="tim552">
                    <p className="tim662">Hủy</p>

                </button>
                
               
                <button className="tim772">
                    <p className="tim882">Lưu</p>

                </button>





            </div>

        </div>
    )
}
