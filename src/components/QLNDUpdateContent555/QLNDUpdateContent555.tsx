import React from 'react'
import './QLNDUpdateContent555.css'
import DropDown from '../../assets/bentrai/Down.png';
import chedau from '../../assets/2icon/chedau.png';
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
      width :250
      
   
     
    },
  
  
    {
      title:<>
      <div className="TT1201">
      Chức năng
      </div>
      </>,
      dataIndex:'Address',
      width:380
      
      
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


export default function QLNDUpdateContent555() {
    return (
        <div className="qlndupdatE11"> 
            <div className="qlndupdatelfet">
            <label className="login105">
                    Tên đăng nhập
                </label>
               <input type="text" className="namelogin1050">
                </input>
                <p className="tuyennguyen">tuyen.nguyen@alta.com.vn</p>
                <label className="login1056">
                    Họ và Tên
                </label>  
                <input type="text" className="namelogin10501">
                </input>
                <p className="tuyennguyen1">Nguyễn Thị Ngọc Tuyền</p>
                <label className="login10567">
                   Email
                </label>  
                <input type="text" className="namelogin105012">
                </input>
                <p className="tuyennguyen2">tuyen.nguyen@alta.com.vn</p>
                <label className="login105678">
                   Số điện thoại
                </label>  
                <input type="text" className="namelogin1050123">
                </input>
                <p className="phonenumber">079 020 2696</p>
                <label className="login1056789">
                  Chọn đơn vị quản lí
                </label>  
                <input type="text" className="namelogin10501234">
                </input>
                <p className="hoisotphcm">Hội sợ TPHCM</p>
                <img src={DropDown} className="yiazia"/>
                <label className="login105678910">
                  Mật khẩu
                </label>  
                <input type="text" className="namelogin105012345">
                </input>
                <p className="denthui">●●●●●●●●●●</p>
                <img src={chedau} className="shenegan"/>
                <label className="login10567891011">
                  Xác nhận mật khẩu
                </label>  
                <input type="text" className="namelogin1050123456">
                </input>
                <p className="denthui1">●●●●●●●●●●</p>
                <img src={chedau} className="shenegan1"/>
                <p className="bbbbbb">là những thông tin bắt buộc</p>
                </div>

                <div className="rightright">
                <Table dataSource={data} columns={colums} pagination={false}></Table> 
                </div>
        </div>
    )
}
