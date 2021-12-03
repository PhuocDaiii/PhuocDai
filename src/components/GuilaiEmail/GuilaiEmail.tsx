import React from 'react'
import logo from '../../assets/Login/Vector.png';
import anh1 from '../../assets/Login/Frame 923.png';
import anh2 from '../../assets/Login/Frame 924.png';
import anh3 from '../../assets/Login/Frame 931.png';
import ATM from '../../assets/Login/Group.png';
import bongcayatm from '../../assets/Login/bong.png';
import { Link } from 'react-router-dom';
import './GuilaiEmail.css';

export default function GuilaiEmail(){
    return(
        <div className="Login2">
            <div className="Hinhanh2">
                <img src={logo} alt="" className="icon123"/>
            </div>
            <div className="Content12">
                <div className="Contentleft12">
                    <img src={ATM} alt="" className="atm11"/>
                    <img src={anh1} alt="" className="f923"/>
                    <img src={anh2} alt="" className="f924"/>
                    <img src={anh3} alt="" className="f931"/>
                    <img src={bongcayatm} alt="" className="bongatm11"/>
                    <p className="iconpicture1"></p>
                </div>
            <div className="Contentright">
                <h3 className="NameLogin">Khôi phục thành công</h3>
                <form className="Contentlogin">
                Click vào đường link bên dưới để trở về trang chủ

                    
                </form>

                <Link to="/" className="Link">
               <p className="qmk"><u>Quay trở lại trang đăng nhập</u></p>
               </Link>
                
            </div>
        </div>
    </div>
    )
}