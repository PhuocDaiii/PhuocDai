import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css';
import './BCPGDContent.css'



const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:<>
      <div className="so11">
          0000001
      </div>
      </>,
      Address:'...',
      Status: '121'
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:<>
      <div className="so21">
          0000002
      </div>
      </>,
     
      Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
      Status:'353'
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:<>
      <div className="so31">
          0000003
      </div>
      </>,
     
      Address:'1063 Nguyễn Ái Quốc,Khu Phố 5 Phường Tân Tiến Thành phố Biên Hòa Tỉnh Đồng Nai',
      Status:'3535'
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:<>
        <div className="so41">
            0000004
        </div>
        </>,
        
        Address:'Số 3 Nguyễn Thanh Đằng Phường Phước Hiệp Tp Bà Rịa Tình Vũng Tàu',
        Status:'235'
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:<>
      <div className="so51">
          0000005
      </div>
      </>,
       
        Address:'Số 3 Nguyễn Thanh Đằng Phường Phước Hiệp Tp Bà Rịa Tình Vũng Tàu',
        Status:'864'
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:<>
        <div className="so61">
            0000006
        </div>
        </>,
       
        Address:'Số 13 Đường tỉnh 868 Kp 01 Thị Xã Cai Lậy Tỉnh Tiền Giang',
        Status:'3412'
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:<>
        <div className="so71">
            0000007
        </div>
        </>,
       
        Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội ',
        Status:'564'
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:<>
        <div className="so81">
            0000008
        </div>
        </>,
      
        Address:'Số 13 Đường tỉnh 868 Kp 01 Thị Xã Cai Lậy Tỉnh Tiền Giang ',
        Status:'321'
           
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:<>
        <div className="so91">
            0000009
        </div>
        </>,
    
        Address:'16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội ',
        Status:'4754'
      },
    

      {
        key :' 10',
        Stt:'10',
        seriesNumber:<>
        <div className="so101">
            0000010
        </div>
        </>,
      
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'388'
          


      }, 


      {
        key :' 11',
        Stt:'11',
        seriesNumber:<>
        <div className="so111">
            0000011
        </div>
        </>,
     
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'2112'
            


      }, 

      {
        key :' 12',
        Stt:'12',
        seriesNumber:<>
        <div className="so121">
            0000012
        </div>
        </>,
       
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị Trấn Cờ Đỏ Huyện Cờ Đỏ Tỉnh Cần Thơ',
        Status:'434'
           


      }, 

      {
        key :' 13',
        Stt:'13',
        seriesNumber:<>
        <div className="so131">
            0000013
        </div>
        </>,
       
        Address:'Số 9 Lô KDT Trung Yên Phường Yên Hòa Quận Cầu Giấy Tỉnh Hà Nội',
        Status:'0452'
              


      }, 

      {
        key :' 14',
        Stt:'14',
        seriesNumber:<>
        <div className="so141">
            0000014
        </div>
        </>,
     
        Address:'Đường tỉnh 919 Ấp Thới Thuận Thị Trấn Cờ Đỏ Huyện Cờ Đỏ Tỉnh Cần Thơ',
        Status:'242'
           


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
      Địa chỉ
      </div>
      </>,
      dataIndex:'Address',
      width:700
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Số cảnh báo
      </div>
      </>,
      dataIndex:'Status',
      width:300
    },

  ]

export default function BCPGDContent() {
    return (
        <div className="BCPGDMain">
              <Table dataSource={data} columns={colums} pagination={false}></Table> 
              <p className="hienthi99999">Hiển thị</p>
              <div className="otron">
                <p className="numberfourteen">14</p>
              </div>
              <p className="row4554">hàng mỗi trang</p>
        </div>
    )
}
