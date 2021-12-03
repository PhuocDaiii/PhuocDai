import React from 'react'
import logo from '../../assets/Login/Vector.png';
import anh1 from '../../assets/Login/Frame 923.png';
import anh2 from '../../assets/Login/Frame 924.png';
import anh3 from '../../assets/Login/Frame 931.png';
import ATM from '../../assets/Login/Group.png';
import bongcayatm from '../../assets/Login/bong.png';
import { Link } from 'react-router-dom';
import './login.css';


export default function Login() {
    return (
        <div className="Login">
            <div className="Hinhanh">
            <img src={logo} alt="" className="icon1"/>
            </div>
            <div className="Content">
                <div className="Contentleft">
                    <img src={ATM} alt="" className="atm"/>
                    <img src={anh1} alt="" className="f923"/>
                    <img src={anh2} alt="" className="f924"/>
                    <img src={anh3} alt="" className="f931"/>
                    <img src={bongcayatm} alt="" className="bongatm"/>
                    <p className="iconpicture"></p>
                </div>
            <div className="Contentright">
                <h3 className="NameLogin">Đăng nhập</h3>
                <form className="Contentlogin">
                <br/><label className="tendangnhap">Tên Đăng Nhập</label><br/>
                    <input  type="text" className="unamelogin" name="Uname" placeholder="Nhập tài khoản"/><br/>
                    <br/><label htmlFor="tdn" className="matkhau">Mật Khẩu</label><br/>
                    <input type="password" className="upassword" name="pword" placeholder="Nhập mật khẩu"/><br/>
                    <br/><input type="checkbox" className="chkpass" name="savepass"></input>
                    <label htmlFor="savepass" className="savepass"> Ghi nhớ đăng nhập</label><br/>
                    <Link to="/Dashboard" className="Link">
                    <button type="button" className="btnlogin">
                        <p className="btntennutlogin">Đăng Nhập</p>
                    </button>
                    </Link>
                </form>
                <Link to="/forgotpass" className="Link">
               <p className="qmk"><u>Quên mật khẩu</u></p>
               </Link>
                
            </div>
        </div>
    </div>
    )
}
