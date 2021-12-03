import React from 'react'
import './GSMFooter.css'
import {Table} from 'antd'
import chamthang from '../../assets/2icon/Infor.png';
import line from '../../assets/2icon/Line 7.png';
import vongxoay from '../../assets/2icon/Solid.png';
import pin from '../../assets/2icon/Vectdor.png';
import pinvang from '../../assets/2icon/Vector.png';
import songdo from '../../assets/2icon/Vectord.png';
import chuong from '../../assets/2icon/Warrning.png';
import chuongdo from '../../assets/2icon/Warrningg.png';
import songxanh from '../../assets/2icon/Vector5.png';
import {Link} from'react-router-dom'

import 'antd/dist/antd.css';







const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'0000001' ,
      LDGS:'ATM',
      TDGS:'ATM-Giang Văn Minh',
      Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
      Status: <>
      <img src ={pin} alt="" />
        <img src ={songdo} alt="" />
        <img src ={chuong} alt="" />
        <img src ={line} alt="" />
        
            </>,
       anh2:  <>
       <Link to="/GSMOnthemove">
        <img src ={chamthang} alt="" />
        </Link>
        <Link to="/GSMOnthemove1">
        <img src ={vongxoay} alt="" />
        </Link>

       </>   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'0000002',
      LDGS:'ATM',
      TDGS:'ATM-Giang Văn Minh',
      Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
      Status:<>
      <img src ={pinvang} alt="" />
        <img src ={songxanh} alt="" />
        <img src ={chuong} alt="" />
        <img src ={line} alt="" />
        
            </>,
             anh2:  <>
             <img src ={chamthang} alt="" />
             <img src ={vongxoay} alt="" />
     
            </>   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'0000003',
      LDGS:'ATM',
      TDGS:'ATM-Giang Văn Minh',
      Address:'1063 Nguyễn Ái Quốc,Khu Phố 5 Phường Tân Tiến Thành phố Biên Hòa Tỉnh Đồng Nai',
      Status:<>
      <img src ={pin} alt="" />
        <img src ={songdo} alt="" />
        <img src ={chuongdo} alt="" />
        <img src ={line} alt="" />
        
            </>,
       anh2:  <>
       <img src ={chamthang} alt="" />
       <img src ={vongxoay} alt="" />

      </>         

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'0000009',
        LDGS:'Phòng giao dịch',
        TDGS:'Phòng giao dịch-cờ đỏ',
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị trấn Cờ Đỏ Huyện Cờ Đỏ Tp Cần thơ',
        Status:<>
        <img src ={pin} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,
               anh2:  <>
               <img src ={chamthang} alt="" />
               <img src ={vongxoay} alt="" />
        
              </>         
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:'0000005',
        LDGS:'ATM',
        TDGS:'ATM-Nguyễn Ái Quốc',
        Address:'Số 9 lô 2B KDT Trung Kiên Phường Yên Hòa Quận Cầu Giấy Hà Nội',
        Status:<>
        <img src ={pin} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,
               anh2:  <>
               <img src ={chamthang} alt="" />
               <img src ={vongxoay} alt="" />
        
              </>         
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:'0000021',
        LDGS:'Phòng giao dịch',
        TDGS:'Phòng giao dịch',
        Address:'1063 Nguyễn Ái Quốc,Khu Phố 5 Phường Tân Tiến Thành phố Biên Hòa Tỉnh Đồng Nai',
        Status:<>
        <img src ={pinvang} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuongdo} alt="" />
          <img src ={line} alt="" />
          
              </>,
               anh2:  <>
               <img src ={chamthang} alt="" />
               <img src ={vongxoay} alt="" />
        
              </>         
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:'0000011',
        LDGS:'ATM',
        TDGS:'ATM-Nguyễn Ái Quốc',
        Address:'1063 Nguyễn Ái Quốc,Khu Phố 5 Phường Tân Tiến Thành phố Biên Hòa Tỉnh Đồng Nai ',
        Status:<>
        <img src ={pin} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,
               anh2:  <>
               <img src ={chamthang} alt="" />
               <img src ={vongxoay} alt="" />
        
              </>         
      }, 

      {
        key :' 8',
        Stt:'8',
        seriesNumber:'0000064',
        LDGS:'Phòng giao dịch',
        TDGS:'Phòng giao dịch',
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị trấn Cờ Đỏ Huyện Cờ Đỏ Tp Cần thơ ',
        Status:<>
        <img src ={pin} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,

        anh2:  <>
        <img src ={chamthang} alt="" />
        <img src ={vongxoay} alt="" />

        </>         
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:'0000010',
        LDGS:'Phòng giao dịch',
        TDGS:'Phòng giao dịch Trung Yên',
        Address:'Số 9 lô 2B KDT Trung Kiên Phường Yên Hòa Quận Cầu Giấy Hà Nội ',
        Status:<>
        <img src ={pinvang} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,

        anh2:  <>
        <img src ={chamthang} alt="" />
        <img src ={vongxoay} alt="" />

        </>         
      }, 

      {
        key :' 10',
        Stt:'10',
        seriesNumber:'0000035',
        LDGS:'ATM',
        TDGS:'ATM-Nguyễn Thanh Đăng',
        Address:'Số 3 Nguyễn Thanh Đăng Phường Phước Hòa Tp Bà Rịa Tỉnh Bà Ria Vũng Tàu',
        Status:<>
        <img src ={pin} alt="" />
          <img src ={songxanh} alt="" />
          <img src ={chuong} alt="" />
          <img src ={line} alt="" />
          
              </>,
               anh2:  <>
               <img src ={chamthang} alt="" />
               <img src ={vongxoay} alt="" />
       
               </>         


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
      Mã thiết bị Series Number
      </div>
      </>,
      dataIndex:'seriesNumber',
      width :90
    },
  
    {
      title:<>
      <div className="TT1201">
      Loại điểm giám sát
      </div>
      </>,
      dataIndex:'LDGS',
      width:90
    },
  
    {
      title:<>
      <div className="TT1201">
      Tên điểm giám sát
      </div>
      </>,
      dataIndex:'TDGS',
      width:150
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
      Trạng thái
      </div>
      </>,
      dataIndex:'Status',
      width:100,
    },

    {
      title:'',
      dataIndex:'anh2',
      width:100,
    },
  ]





export default function GSMFooter() {
    return (
        <div className="Table">
           <Table dataSource={data} columns={colums} pagination={false}></Table>
            
        </div>
    )
}
