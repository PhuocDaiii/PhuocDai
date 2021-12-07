import React from 'react'
import './AuditLogContent.css'
import {Table} from 'antd'
import 'antd/dist/antd.css';
const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'10-06-2021 20:00:00',
      Address:'Log in',
      Status: 'Admin',
      TT:''
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'10-06-2021 20:50:00',
     
      Address:'Log out',
      Status:'Admin',
      TT:''
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'10-06-2021 21:00:00',
     
      Address:'Log in',
      Status:'Admin',
      TT:''
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'10-06-2021 20:15:00',
        
        Address:'Thêm thiết bị',
        Status:'Admin',
        TT:'Thêm thiết bị vào thành công'
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:'10-06-2021 23:00:00',
       
        Address:'Thêm điểm giám sát',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:'10-06-2021 17:00:00',
       
        Address:'Xóa thiết bị',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:'10-06-2021 08:00:00',
       
        Address:'Log in ',
        Status:'Admin',
        TT:''
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:'10-06-2021 10:00:00',
      
        Address:'Xóa thiết bị ',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
           
      }, 

      {
        key :' 9',
        Stt:'9',
        seriesNumber:'10-06-2021 00:00:00',
    
        Address:'Cập nhật điểm giám sát',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      },
    

      {
        key :' 10',
        Stt:'10',
        seriesNumber:'10-06-2021 12:00:00',
      
        Address:'Thêm nhật điểm giám sát',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
          


      }, 


      {
        key :' 11',
        Stt:'11',
        seriesNumber:'10-06-2021 16:00:00',
     
        Address:'Log out',
        Status:'Admin',
        TT:''
            


      }, 

      {
        key :' 12',
        Stt:'12',
        seriesNumber:'10-06-2021 22:00:00',
       
        Address:'Log in',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
           


      }, 

      {
        key :' 13',
        Stt:'13',
        seriesNumber:'10-06-2021 11:00:00',
       
        Address:'Cập nhật điểm giám sát',
        Status:'Admin',
        TT:''
              


      }, 

      {
        key :' 14',
        Stt:'14',
        seriesNumber:'10-06-2021 08:00:00',
     
        Address:'Log out',
        Status:'Admin',
        TT:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
           


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
      Ngày giờ
      </div>
      </>,
      dataIndex:'seriesNumber',
      width :200
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Thao tác
      </div>
      </>,
      dataIndex:'Address',
      width:180
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Tên đăng nhập
      </div>
      </>,
      dataIndex:'Status',
      width:150
    },

    {
        title:<>
        <div className="TT1201">
        Ghi chú
        </div>
        </>,
        dataIndex:'TT',
        width:600
        
      },


  ]

export default function AuditLogContent() {
    return (
        <div className="Auditlog">
              <Table dataSource={data} columns={colums} pagination={false}></Table> 
              <p className="hienthi9999912">Hiển thị</p>
              <div className="otron12">
                <p className="numberfourteen12">14</p>
              </div>
              <p className="row455412">hàng mỗi trang</p>
        </div>
    )
}
