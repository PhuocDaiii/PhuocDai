import React from 'react'
import logo from '../../assets/Login/Vector.png';
import { Link } from 'react-router-dom';
import './topbar.css';
import VNM from '../../assets/bentrai/Frame.png';
import DropDown from '../../assets/bentrai/Down.png';


export default function sidebar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                  
                </div>
               <div className="topRight">
                   <div className="Toplanguage">
                   <img src={VNM} alt="" className="topbarIcon"/>
                   <p className="write111">VNM </p>
                   <img src={DropDown} alt="" className="dropdown"/>

                   
                   </div>
                   <div className="namepic">
                    <img src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/104393099_738580743622106_734143769811380656_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CeS-_qe8lA0AX8r01Mz&_nc_ht=scontent.fsgn5-5.fna&oh=a4918c6e1842f938ed3e3d84f05cd346&oe=61ADDD07" alt="" className="topAvatar" />  
                    <p className="VPD">Võ Phước Đại</p>
                    <img src={DropDown} alt="" className="dropdown1"/>
                    </div>
               
                </div>
            </div>
            
        </div>
    )
}
