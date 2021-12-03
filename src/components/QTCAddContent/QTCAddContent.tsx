import React from 'react'
import './QTCAddContent.css'
import { Checkbox } from 'antd'
import {Table} from 'antd'

const data =[
    {
      key :' 1',
      Stt:'1',
      seriesNumber:'Dashboard',
      Address:'',
      Status: <>
      <Checkbox defaultChecked={false} />
        </>,
      TT:<>
      <Checkbox defaultChecked={false} />
  </>,
   
    },          
  
    {
      key :' 2',
      Stt:'2',
      seriesNumber:'Cảnh báo',
     
      Address:'',
      Status:<>
      <Checkbox defaultChecked={false} />
  </>,
      TT:<>
      <Checkbox defaultChecked={false} />
  </>,
   
    },  
  
    {
      key :' 3',
      Stt:'3',
      seriesNumber:'Báo cáo',
     
      Address:'',
      Status:<>
      <Checkbox defaultChecked={false} />
  </>,
      TT:<>
      <Checkbox defaultChecked={false} />
  </>,
        

    }, 
    
    {
        key :' 4',
        Stt:'4',
        seriesNumber:'Cài đặt hệ thống',
        
        Address:'',
        Status:'',
        TT:''
            
      }, 

      {
        key :' 5',
        Stt:'5',
        seriesNumber:'',
       
        Address:'Thiết bị giám sát',
        Status:<>
        <Checkbox defaultChecked={false} />
    </>,
        TT:<>
        <Checkbox defaultChecked={false} />
    </>,
           
      }, 

      {
        key :' 6',
        Stt:'6',
        seriesNumber:'',
       
        Address:'Người dùng hệ thống',
        Status:<>
        <Checkbox defaultChecked={false} />
    </>,
        TT:<>
        <Checkbox defaultChecked={false} />
    </>,
          
      }, 

      {
        key :' 7',
        Stt:'7',
        seriesNumber:'',
       
        Address:'Auditlog ',
        Status:<>
        <Checkbox defaultChecked={false} />
    </>,
        TT:<>
        <Checkbox defaultChecked={false} />
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
      Nhóm chức năng
      </div>
      </>,
      dataIndex:'seriesNumber',
      width :200
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Chức năng
      </div>
      </>,
      dataIndex:'Address',
      width:350
      
      
    },
  
    {
      title:<>
      <div className="TT1201">
      Xem
      </div>
      </>,
      dataIndex:'Status',
      width:300
    },

    {
        title:<>
        <div className="TT1201">
        Thêm/Sửa/Xóa
        </div>
        </>,
        dataIndex:'TT',
        width:600
        
      },


  ]


export default function QTCAddContent() {
    return (
        <div className="Main1111">
             <div className="mainleft">
                <p className="TQTC111">Tên quyền truy cập </p>
                <div className="QTCa11">
                    <p className="QTVa11">Nhập tên quyền truy cập</p>
                </div>
                <p className="TTa11">Trạng thái</p>
                <Checkbox type="checkbox" className="chk111">
                 <p className="Dakichhoat1">Chưa kích hoạt</p>
                </Checkbox>
                <div className="mainright1">
                <Table dataSource={data} columns={colums} pagination={false}></Table> 
                </div>
               
                <button className="tim551">
                    <p className="tim661">Hủy</p>

                </button>
                
               
                <button className="tim771">
                    <p className="tim881">Lưu</p>

                </button>
                

            </div>
        </div>
    )
}
