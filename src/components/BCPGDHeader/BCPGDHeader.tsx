import React from 'react'
import './BCPGDHeader.css'
import nutsuyra from '../../assets/2icon/nutsuyra.png';
import DropDown from '../../assets/bentrai/Down.png';
import { DatePicker } from 'antd';
import moment from 'moment';

export default function BCPGDHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="Top">
            <div className="TittleTop">
                <p className="BaoCao5">Báo Cáo</p>
                <img src={nutsuyra} alt="" className="suyra"/>
                <p className="BCTPGD">Báo Cáo theo phòng giao dịch</p>

            </div>
            <div className="Wordtop">
                <p className="DVQL">Đơn vị quản lý</p>
                <div className="NDVQL">
                    <p className="WriteNDVQl"> Nhập đơn vị quản lý </p>
                </div>
                <p className="LCB5">Loại cảnh báo</p>
                    <div className="TC8">
                    <img src={DropDown} alt="" className="dd"/>
                    <p className="TC11">Tất cả</p>

                    </div>
                <p className="TT18">Trạng thái</p> 
                <div className="TC30">
                    <p className="TC29">Tất cả</p>
                    <img src={DropDown} alt="" className="dd22"/>

                </div>   
                <p className="Thoigian22">Thời gian</p>
                <div className="Boxxtime">
                <DatePicker defaultValue={moment()} format={dateFormat} />
                <p className="TT10">Từ ngày đến ngày</p>
                </div>
                <button type="button" className="btnlogin15">
                <p className="btntim">Tìm</p>
                </button>
                <button type="button" className="btnlogin16">
                <p className="btnxuatfile">Xuất file Excel</p>
                </button>
            </div>

           
        </div>
    )
}
