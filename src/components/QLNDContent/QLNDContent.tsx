import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css';
import './QLNDContent.css'
import { Link } from 'react-router-dom';

const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'ND1120',
      Address:'Tạ Duy Nguyên',
      Status: '030 252 0311',
      TT:'dnnsns@gmail.com',
      DVQL:<>
      <div className="DVQL21">
      ATM - Tiền Giang
      </div>
      </>,
      CN:<>
       <Link to="/capnhat222">
      <div className="cn20">
      Cập nhật
      </div>
      </Link>
      </>,
      X:<>
      <div className="xoa50">
          Xóa
      </div>
      </>   
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'ND2212',
     
      Address:'Lê Quang Liêm',
      Status:'090 024 0256',
      TT:'lequangliem@gmail.com',
      DVQL:<>
      <div className="DVQL21">
      ATM - Hà Nội
      </div>
      </>,
      CN:<>
       
      
      <div className="cn20">
      Cập nhật
      </div>
     
      </>,
      X:<>
      <div className="xoa50">
          Xóa
      </div>
      </>
   

   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'ND3920',
     
      Address:'Phương Mỹ Lệ',
      Status:'097 754 0254',
      TT:'Pml@gmail.com',
      DVQL:<>
      <div className="DVQL21">
      ATM - Đồng Nai
      </div>
      </>,
      CN:<>
       
      <div className="cn20">
      Cập nhật
      </div>
     
      </>,
      X:<>
      <div className="xoa50">
          Xóa
      </div>
      </>
   
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'ND2929',
        
        Address:'Lê Thành Huy',
        Status:'079 656 4541',
        TT:'Lth@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Vũng Tàu
        </div>
        </>,
        CN:<>
       
      <div className="cn20">
      Cập nhật
      </div>
     
      </>,
      X:<>
      <div className="xoa50">
          Xóa
      </div>
      </>
   
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:'ND1201',
       
        Address:'Nguyễn Thành An',
        Status:'097 754 0254',
        TT:'nta@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Vũng Tàu
        </div>
        </>,
        CN:<>
        
        <div className="cn20">
        Cập nhật
        </div>
       
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:'ND1202',
       
        Address:'Đinh Hoài An',
        Status:'030 054 0544',
        TT:'Dha@gmail.com.vn',
        DVQL:<>
        <div className="DVQL21">
        ATM - Tiền Giang
        </div>
        </>,
        CN:<>
         <Link to="/capnhat1">
        <div className="cn20">
        Cập nhật
        </div>
        </Link>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:'ND9322',
       
        Address:'Văn Lệ Thu ',
        Status:'093 025 0232',
        TT:'vlt@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Hà Nội
        </div>
        </>,
        CN:<>
         <Link to="/capnhat1">
         <div className="cn20">
      Cập nhật
      </div>
      </Link>
      </>,
      X:<>
      <div className="xoa50">
          Xóa
      </div>
      </>
   
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:'ND9322',
      
        Address:'Vũ Minh Khôi ',
        Status:'030 054 0544',
        TT:'vmkk@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Hà Nội
        </div>
        </>,
        CN:<>
         
        <div className="cn20">
        Cập nhật
        </div>
        
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
           
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:'ND2302',
    
        Address:'Trần Gia Lập ',
        Status:'030 054 0544',
        TT:'tgl2020@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Hà Nội
        </div>
        </>,
        CN:<>
         <Link to="/capnhat1">
        <div className="cn20">
        Cập nhật
        </div>
        </Link>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
      },
    

      {
        key :' 10',
        Stt:'10',
        seriesNumber:'ND3943',
      
        Address:'Đinh Hoài An',
        Status:'030 054 0544',
        TT:'monglung@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Hà Nội
        </div>
        </>,
        CN:<>
         <Link to="/capnhat1">
        <div className="cn20">
        Cập nhật
        </div>
        </Link>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
          


      }, 


      {
        key :' 11',
        Stt:'11',
        seriesNumber:'ND5632',
     
        Address:'Đinh Hoài An',
        Status:'030 054 0544',
        TT:'gahs@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - TPHCM
        </div>
        </>,
        CN:<>
         
        <div className="cn20">
        Cập nhật
        </div>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
            


      }, 

      {
        key :' 12',
        Stt:'12',
        seriesNumber:'ND7458',
       
        Address:'Nguyễn Công Minh',
        Status:'097 754 0254',
        TT:'ncmm@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Cần Thơ
        </div>
        </>,
        CN:<>
        <div className="cn20">
        Cập nhật
        </div>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
           


      }, 

      {
        key :' 13',
        Stt:'13',
        seriesNumber:'ND9438',
       
        Address:'Bùi Tấn Toàn',
        Status:'030 054 0544',
        TT:'Btt2020@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Hà Nội
        </div>
        </>,
        CN:<>
        <div className="cn20">
        Cập nhật
        </div>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
        </>
     
              


      }, 

      {
        key :' 14',
        Stt:'14',
        seriesNumber:'ND7432',
     
        Address:'Mai Văn Sĩ',
        Status:'030 054 0544',
        TT:'maisi@gmail.com',
        DVQL:<>
        <div className="DVQL21">
        ATM - Cần Thơ
        </div>
        </>,
        CN:<>
        <div className="cn20">
        Cập nhật
        </div>
        </>,
        X:<>
        <div className="xoa50">
            Xóa
        </div>
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
      Tên đăng nhập
      </div>
      </>,
      dataIndex:'seriesNumber',
      width : 150,
     
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Họ và Tên
      </div>
      </>,
      dataIndex:'Address',
      width:180
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
     Số điện thoại
      </div>
      </>,
      dataIndex:'Status',
      width:150
    },

    {
        title:<>
        <div className="TT1201">
        Email
        </div>
        </>,
        dataIndex:'TT',
        width:200
        
      },

      {
        title:<>
        <div className="TT1201">
        Đơn vị quản lý
        </div>
        </>,
        dataIndex:'DVQL',
        width:200
        
      },

      {
        title:<>
        <div className="TT1201">
       
        </div>
        </>,
        dataIndex:'CN',
        width :200
      
        
      },

      {
        title:<>
        <div className="TT1201">
        
        </div>
        </>,
        dataIndex:'X',
        width :150
       
        
      },



  ]

export default function QLNDContent() {
    return (
        <div className="QLND55">
             <Table dataSource={data} columns={colums} pagination={false}></Table> 
             <p className="hienthi999991">Hiển thị</p>
              <div className="otron1">
                <p className="numberfourteen1">14</p>
              </div>
              <p className="row45541">hàng mỗi trang</p>
        </div>
    )
}
