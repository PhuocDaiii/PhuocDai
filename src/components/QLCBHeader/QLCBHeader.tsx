import React from 'react'
import './QLCBHeader.css'
import Search from '../../assets/bentrai/Vector.png';
import DropDown from '../../assets/bentrai/Down.png';
import { DatePicker } from 'antd';
import moment from 'moment';


export default function QLCBHeader() {
    const dateFormat='DD/MM/YY'
    return (
      <div>
          <div className="Header">
              Quản lý cảnh báo
          </div>
          <div className="gsm">
              GSM:
          </div>
          <div className="input">
          <input type="" name="" placeholder="GSM ID"></input>
          </div>
          <div className="khuvuc">
              khu vực:
          </div>
          <div className="input2">
          <p className="NDC"> Nhập địa chỉ</p>
          <img src={Search} alt="" className="searchicon"/>
          </div>
          <div className="input3">
          <p className="LCB"> Loại cảnh báo</p>
          <img src={DropDown} alt="" className="dropdown4"/>
          <p className="TC">Tất cả</p>
         
          </div>
          <div className="input4">
              <p className="TT">Trạng thái</p>
              <img src={DropDown} alt="" className="dropdown5"/>
                < p className="TC1">Tất cả</p>
          </div>
         
           
            <div className="time">
                <DatePicker defaultValue={moment()} format={dateFormat} />
                <p className="TT1">Từ ngày đến ngày</p>
                <p className="TG">Thời Gian</p>
            </div>
            <button type="button" className="btnlogin6">
                <p className="btntim">Tìm</p>
            </button>

           

          

          

      </div>
       
    )
}
