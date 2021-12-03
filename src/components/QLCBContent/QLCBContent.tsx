import React from 'react'
import './QLCBContent.css'
import {Table ,Tag,Space} from 'antd'
import chamthang from '../../assets/2icon/Infor.png';
import line from '../../assets/2icon/Line 7.png';
import vongxoay from '../../assets/2icon/Solid.png';
import pin from '../../assets/2icon/Vectdor.png';
import pinvang from '../../assets/2icon/Vector.png';
import songdo from '../../assets/2icon/Vectord.png';
import chuong from '../../assets/2icon/Warrning.png';
import chuongdo from '../../assets/2icon/Warrningg.png';
import songxanh from '../../assets/2icon/Vector5.png';
import { render } from '@testing-library/react';
import 'antd/dist/antd.css';
import './QLCBContent.css'


const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:<>
      <div className="so1">
          0000001
      </div>
      </>,
      LDGS:'ATM',
      TDGS:'Cảnh báo dịch chuyển&gia tốc :Mất kết nối',
      Address:'...',
      Status: '10/06/2021 20:00:00'
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:<>
      <div className="so2">
          0000002
      </div>
      </>,
      LDGS:'ATM',
      TDGS:'Cảm biến cửa trên máy ATM:báo động',
      Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
      Status:'10/06/2021 20:00:00'
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:<>
      <div className="so3">
          0000003
      </div>
      </>,
      LDGS:'ATM',
      TDGS:'Cảm biến điều khiển tại chỗ RF:bật',
      Address:'1063 Nguyễn Ái Quốc,Khu Phố 5 Phường Tân Tiến Thành phố Biên Hòa Tỉnh Đồng Nai',
      Status:'10/06/2021 20:03:00'
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:<>
        <div className="so4">
            0000004
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'cảm biến nhiệt độ :cao',
        Address:'Số 3 Nguyễn Thanh Đằng Phường Phước Hiệp Tp Bà Rịa Tình Vũng Tàu',
        Status:'10/06/2021 20:20:00'
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:<>
      <div className="so5">
          0000005
      </div>
      </>,
        LDGS:'ATM',
        TDGS:'cảm biến nhiệt độ :thấp',
        Address:'Số 3 Nguyễn Thanh Đằng Phường Phước Hiệp Tp Bà Rịa Tình Vũng Tàu',
        Status:'10/06/2021 20:21:00'
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:<>
        <div className="so6">
            0000006
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'cảm biến dịch chuyển :biến động',
        Address:'Số 13 Đường tỉnh 868 Kp 01 Thị Xã Cai Lậy Tỉnh Tiền Giang',
        Status:'10/06/2021 20:12:00'
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:<>
        <div className="so7">
            0000007
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'cảm biến rò điện :Báo động',
        Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội ',
        Status:'10/06/2021 20:54:00'
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:<>
        <div className="so8">
            0000008
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Cảm biến khói:Báo động',
        Address:'Số 13 Đường tỉnh 868 Kp 01 Thị Xã Cai Lậy Tỉnh Tiền Giang ',
        Status:'10/06/2021 20:22:00'
           
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:<>
        <div className="so9">
            0000009
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Pin dự phòng :không sạc pin',
        Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội ',
        Status:'10/06/2021 20:44:00'
      },
    

      {
        key :' 10',
        Stt:'10',
        seriesNumber:<>
        <div className="so10">
            0000010
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Điện áp nguồn :Bình thường',
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'10/06/2021 20:54:00'
          


      }, 


      {
        key :' 11',
        Stt:'11',
        seriesNumber:<>
        <div className="so11">
            0000011
        </div>
        </>,
        LDGS:'ATM',
        TDGS:'Cảm biến rung :Báo động',
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'10/06/2021 20:12:00'
            


      }, 

      {
        key :' 12',
        Stt:'12',
        seriesNumber:<>
        <div className="so12">
            0000012
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Cảm biến ngoài máy ATM:Báo động',
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị Trấn Cờ Đỏ Huyện Cờ Đỏ Tỉnh Cần Thơ',
        Status:'10/06/2021 20:12:00'
           


      }, 

      {
        key :' 13',
        Stt:'13',
        seriesNumber:<>
        <div className="so13">
            0000013
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Cảm biến nhiệt:Thấp',
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'10/06/2021 20:12:00'
              


      }, 

      {
        key :' 14',
        Stt:'14',
        seriesNumber:<>
        <div className="so14">
            0000014
        </div>
        </>,
        LDGS:'Phòng giao dịch',
        TDGS:'Cảm biến rò điện:Báo động',
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị Trấn Cờ Đỏ Huyện Cờ Đỏ Tỉnh Cần Thơ',
        Status:'10/06/2021 20:00:00'
           


      }, 



  ]
  const colums =[
    {
      title:<>
      <div className="TT1201">
      STT
      </div>
      </>,
      dataIndex:'Stt',
    
    
    },
  
    {
      title:<>
      <div className="TT1201">
      GSM ID
      </div>
      </>,
      dataIndex:'seriesNumber',
      width :90,
      
   
     
    },
  
    {
      title:<>
      <div className="TT1201">
      Loại GSM
      </div>
      </>,
      dataIndex:'LDGS',
      width:90
    },
  
    {
      title:<>
      <div className="TT1201">
      Nội dung cảnh báo
      </div>
      </>,
      dataIndex:'TDGS',
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Địa chỉ
      </div>
      </>,
      dataIndex:'Address',
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Ngày giờ
      </div>
      </>,
      dataIndex:'Status',
      width:100,
    },

  ]

export default function QLCBContent() {
    return (
        <div className="table5">
            <Table dataSource={data} columns={colums} pagination={false}></Table>
        </div>
    )
}
