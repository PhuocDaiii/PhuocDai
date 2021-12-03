import { Checkbox } from 'antd'
import React from 'react'
import './QTCUpdateContent.css'
import {Table} from 'antd'
import { Link } from 'react-router-dom';

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
       
        Address:'Đơn vị quản lý',
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
       
        Address:'Điểm giám sát',
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
       
        Address:'Thiết bị giám sát ',
        Status:<>
        <Checkbox defaultChecked={false} />
    </>,
        TT:<>
        <Checkbox defaultChecked={false} />
    </>,
      },
       

      {
        key :' 8',
        Stt:'8',
        seriesNumber:'',
      
        Address:'Camera ',
        Status:<>
        <Checkbox defaultChecked={false} />
    </>,
        TT:<>
        <Checkbox defaultChecked={false} />
    </>,
           
      }, 

      {
        key :' 9',
        Stt:'9',
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
        key :' 10',
        Stt:'10',
        seriesNumber:'',
      
        Address:'Audit log',
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
      width:250
      
      
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



export default function QTCUpdateContent() {
    return (
        <div className="Main111">
            <div className="mainleft">
                <p className="TQTC11">Tên quyền truy cập </p>
                <div className="QTCa1">
                    <p className="QTVa1">quản trị viên</p>
                </div>
                <p className="TTa1">Trạng thái</p>
                <Checkbox type="checkbox" className="chk11">
                 <p className="Dakichhoat">Đã kích hoạt</p>
                </Checkbox>
                <div className="mainright">
                <Table dataSource={data} columns={colums} pagination={false}></Table> 
                </div>
                <Link to="/QTC11">
                <button className="tim55">
                    <p className="tim66">Hủy</p>

                </button>
                </Link>
                <Link to="/QTC11">
                <button className="tim77">
                    <p className="tim88">Tìm</p>

                </button>
                </Link>

            </div>
        </div>
    )
}
