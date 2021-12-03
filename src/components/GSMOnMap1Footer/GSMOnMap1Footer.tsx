import React from 'react'
import './GSMOnMap1Footer.css'
import dauchamxanh from '../../assets/Google Maps/onedot.png';
import nhiet from '../../assets/Google Maps/nhiet.png';
import rung from '../../assets/Google Maps/rung.png';
import cuamayatm from '../../assets/Google Maps/Frame 917.png';
import cuangoaimayatm from '../../assets/Google Maps/Frame 918.png';
import cuaketmayatm from '../../assets/Google Maps/Frame 919.png';
import duphong from '../../assets/Google Maps/duphong.png';
import dichchuyen from '../../assets/Google Maps/dichchuyen.png';
import rodien from '../../assets/Google Maps/rodien.png';
import khoi from '../../assets/Google Maps/khoi.png';
import pinduphong from '../../assets/Google Maps/pinduphong.png';
import Frame from '../../assets/Google Maps/Frame.png';
import baohieu from '../../assets/Google Maps/F.png';








export default function GSMOnMap1Footer() {
    return (
        <div>
          <p className="informationATM">Thông tin ATM</p>
          <div className="informationATMleft">
                <p className="ID0999">ID :</p>
                <p className="Unknown99">8628822201212 to SIM number: Unknown</p>
                <p className="TTTT999">Trạng thái :</p>
                <img src={dauchamxanh } className="dauchamxanhle"/>
                <p className="connecting123">Đang kết nối</p>
                <p className="typeconnecting">Loại kết nối :</p>
                <p className="nguonacmang">Nguồn AC-Mạng Wan</p>
                <p className="typedevice">Loại thiết bị:</p>
                <p className="TBCB9999">Thiết bị cảnh báo</p>
                <p className="AddressFollow">Địa chỉ theo dõi :</p>
                <p className="Address100000">86/33 Âu Cơ, phường 9, quận Tân Bình, TP.HCM</p>
                <p className="ngaykichhoat98987">Ngày kích hoạt :</p>
                <p className="ngaykichhoat98986">12/05/2021 16:15:00</p>
                <p className="thoigiantruyvan9898">Thời gian truy vấn :</p>
                <p className="thoigiantruyvan98987">16:20:00 22/06/2021</p>
          </div>
        <p className="lilwuyn">Trạng thái cảm biến</p>
          <div className="informationATMCenter">
              <img src={nhiet} className="temprature"/>
              <p className="thirtysix">Nhiệt 36.5:</p>
              <p className="high">Cao</p>
              <img src={rung} className="rung108"/>
              <p className="rung1090">Rung 1700:</p>
              <p className="normal">Bình thường</p>
              <img src={cuamayatm} className="ATMxanhnhe"/>
              <p className="cuamayatm">Cửa máy ATM :</p>
              <p className="turnon">Bật</p>
              <img src={cuangoaimayatm} className="atmhongnhe"/>
              <p className="cuangoaimayatm">Cửa ngoài máy ATM:</p>
              <p className="turnon1">Bật</p>
              <img src={cuaketmayatm} className="cuaketmayatmvang"/>
              <p className="cuaketmay">Cửa két máy ATM:</p>
              <p className="turnon2">Bật</p>
              <img src={duphong} className="DUPHONG"/>
              <p className="duphong11">Dự phòng :</p>
              <p className="turnoff">Tắt</p>
              <img src={rung} className="rungqua"/>
              <p className="rungquatroi">Rung 2 : </p>
              <p className="normal2">Bình thường</p>
          </div>
          <p className="Caution9"> Cảnh báo </p>
                <div className="informationATMRight">
                  <img src={dichchuyen} className="tele"/>
                  <p className="tele1">Dịch chuyển :</p>
                  <p className="turoff3">Tắt</p>
                  <img src={rodien} className="rodien999"/>
                  <p className="rodien888">Rò điện :</p>
                  <p className="turoff4">Tắt</p>
                  <img src={khoi} className="khoi11"/>
                  <p className="khoi22">Khói :</p>
                  <p className="turnon5">Bật</p>
                  <img src={pinduphong} className="pinduphong11"/>
                  <p className="pinduphong22">Pin dự phòng :</p>
                  <p className="turnon6">Bật</p>
                  <img src={Frame} className="Frame99"/>
                  <p className="DAN">Điện áp nguồn :</p>
                  <p className="DAN11">90 – 265 ± 5% VAC/50/60hz</p>
                  <img src={baohieu} className="baohieu"/>
                  <p className="baohieu1">Báo hiệu :</p>
                  <p className="coihu">Còi hụ</p>
              </div>
        </div>
    )
}
