import React from 'react'
import './GSMOnMap2Footer.css'
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
import Frame88uj6 from '../../assets/Google Maps/Frame 88uj6.png';
import Framerf886 from '../../assets/Google Maps/Frame rf886.png';
import GSM from '../../assets/Google Maps/GSM.png';
import F from '../../assets/Google Maps/Frame 9.png';



export default function GSMOnMap2Footer() {
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
              <img src={rung} className="temprature11"/>
              <p className="thirtysix">Rung:</p>
              <p className="high">Bình thường</p>
              <img src={duphong} className="rung108999"/>
              <p className="rung1090">Dự phòng:</p>
              <p className="normal">Tắt</p>
              <img src={dichchuyen} className="ATMxanhnhe"/>
              <p className="cuamayatm">Dịch chuyển:</p>
              <p className="turnon">Bật</p>
              <img src={khoi} className="atmhongnhe"/>
              <p className="cuangoaimayatm">Khói:</p>
              <p className="turnon1">Bật</p>
              <img src={Frame88uj6} className="cuaketmayatmvang"/>
              <p className="cuaketmay">Báo động tại chỗ:</p>
              <p className="turnon2">Bật</p>
              <img src={GSM} className="DUPHONG"/>
              <p className="duphong11">Báo động qua GSM:</p>
              <p className="turnoff">Bật</p>
              <img src={GSM} className="rungqua"/>
              <p className="rungquatroi">Báo động qua GSM 2 : </p>
              <p className="normal2">Bật</p>
          </div>
          <p className="Caution9"> Cảnh báo </p>
                <div className="informationATMRight">
                  <img src={rodien} className="tele"/>
                  <p className="tele1">Rò điện :</p>
                  <p className="turoff3">Bình thường</p>
                  <img src={Framerf886} className="rodien999"/>
                  <p className="rodien888">Khẩn cấp :</p>
                  <p className="turoff4">Báo động</p>
                  <img src={F} className="khoi11"/>
                  <p className="khoi22">Xâm nhập :</p>
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
                  <img src={Frame} className="Frame9999"/>
                  <p className="DAN222">Điện áp nguồn 2:</p>
                  <p className="DAN222222">90 – 265 ± 5% VAC/50/60hz</p>
              </div>

        </div>
    )
}
