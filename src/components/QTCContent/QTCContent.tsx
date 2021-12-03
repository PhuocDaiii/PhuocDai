import React from 'react'
import './QTCContent.css'
import {Table} from 'antd'
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { Link } from 'react-router-dom';
const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'Quản trị viên',
      Address:<>
      <Switch defaultChecked />
      <div className="kichhoat">
          Kích hoạt
      </div>
      </>,
      Status: <>
      <Link to="/capnhat">
      <div className="Capnhat10">
          Cập nhật
      </div>
      </Link>
      </>,
      TT:<>
      <div className="xoa10">
         Xóa
      </div>
      </>,
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'Phòng giao dịch',
     
      Address:<>
      <Switch defaultChecked />
      <div className="kichhoat">
          Kích hoạt
      </div>
     
      </>,
      Status:<>
       <Link to="/capnhat">
      <div className="Capnhat10">
          Cập nhật
      </div>
      </Link>
      </>,
      TT:<>
      <div className="xoa10">
         Xóa
      </div>
      </>,
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'Adminstator',
     
      Address:<>
      <Switch defaultChecked />
      <div className="kichhoat">
          Không kích hoạt
      </div>
      </>,
      Status:<>
       <Link to="/capnhat">
      <div className="Capnhat10">
          Cập nhật
      </div>
      </Link>
      </>,
      TT:<>
      <div className="xoa10">
         Xóa
      </div>
      </>,
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'Nhân viên',
        
        Address:<>
        <Switch defaultChecked />
        <div className="kichhoat">
            Kích hoạt
        </div>
        </>,
        Status:<>
         <Link to="/capnhat">
        <div className="Capnhat10">
            Cập nhật
        </div>
        </Link>
        </>,
        TT:<>
        <div className="xoa10">
            Xóa
        </div>
        </>,
            
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
      Quyền truy cập
      </div>
      </>,
      dataIndex:'seriesNumber',
      width :400
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Trạng thái
      </div>
      </>,
      dataIndex:'Address',
      width:700
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
     
      </div>
      </>,
      dataIndex:'Status',
      width:200
    },

    {
        title:<>
        <div className="TT1201">
       
        </div>
        </>,
        dataIndex:'TT',
        width:200
        
      },


  ]
export default function QTCContent() {
    return (
        <div className="QTC000">
            <Table dataSource={data} columns={colums} pagination={false}></Table> 
        </div>
    )
}
