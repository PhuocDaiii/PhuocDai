import React from 'react'
import './Sidebar.css';
import logo from '../../assets/Login/Vector.png';
import a1 from '../../assets/bentrai/1.png';
import a2 from '../../assets/bentrai/2.png';
import a3 from '../../assets/bentrai/3.png';
import MayATM from '../../assets/bentrai/atm-machine (1) 1.png';
import Frame from '../../assets/bentrai/Frame.png';
import Grommet from '../../assets/bentrai/grommet-icons_map-location.png';
import Group from '../../assets/bentrai/group.png';
import Oction from '../../assets/bentrai/octicon_history-16.png';
import Role from '../../assets/bentrai/role icon 1.png';
import User from '../../assets/bentrai/user 1.png';
import { Link } from 'react-router-dom';




export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarLogo">
                    <img src={logo} alt="" className="logo"/>
                </div>
                <h3 className="sidebarTittle">Tổng quan</h3>
                <div className="Iconleft1">
                    <Link to="/Dashboard">
                    <img src={Group} alt="" className="Dashboard" />
                     <p className="nameDashboard"> Dashboard</p>
                    </Link>
                    <Link to="/GSM">
                     <img src={Grommet} alt="" className="Grommet" />
                     <p className="GSM"> GSM Modern On Map</p>
                    </Link>
                    <Link to="/QLCB">
                     <img src={a1} alt="" className="a1" />
                     <p className="QLCB"> Quản lý cảnh báo</p>
                     </Link>
                     <h3 className="BaoCao">Báo cáo</h3>
                     <Link to="/BCPGD">
                     <img src={a2} alt="" className="a2" />
                     <p className="BC"> Báo cáo theo PGĐ</p>
                     </Link>
                     <Link to="/BCATM">
                     <img src={MayATM} alt="" className="ATM" />
                     <p className="BCATM"> Báo cáo theo ATM</p>   
                     </Link>  
                     <h3 className="QLHT">Quản lý hệ thống</h3>
                     <Link to="/QTC11">
                     <img src={Role} alt="" className="Role" />
                     <p className="QTC"> Quyền truy cập</p> 
                    </Link>
                    <Link to="/QLTBGSM">
                      <img src={a3} alt="" className="a3" />
                     <p className="QLTB"> Quản lý thiết bị- GSM</p> 
                     </Link>
                     <Link to="/QLND">
                     <img src={User} alt="" className="User" />
                     <p className="QLND"> Quản lý người dùng</p> 
                     </Link>
                     <Link to="/AuditLog">
                     <img src={Oction} alt="" className="Oction" />
                     <p className="Audit"> Audit log</p> 
                     </Link>


                </div>
            </div>
            
        </div>
    )
}
