import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Quenmatkhau from './components/quenmatkhau/quenmatkhau';
import GuilaiEmail from './components/GuilaiEmail/GuilaiEmail';
import Componentrouter from './components/componentrouter';
import GSM from './components/GSM/GSM';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";  
import QLCB from './components/QLCB/QLCB';
import BCPGD from './components/BCPGD/BCPGD'
import BCATM from './components/BCATM/BCATM';
import AuditLog from './components/AuditLog/AuditLog';
import QTC from './components/QTC/QTC';
import QTCUpdate from './components/QTCUpdate/QTCUpdate';
import QTCAdd from './components/QTCAdd/QTCAdd';
import QLND from './components/QLND/QLND';
import QLNDAdd from './components/QLNDAdd/QLNDAdd';
import QLNDUpdate from './components/QLNDUpdate/QLNDUpdate';
import QLTBGSM from './components/QLTBGSM/QLTBGSM';
import QLTBGSMInstall from './components/QLTBGSMInstall/QLTBGSMInstall';
import QLTBEmergencyPhone from './components/QLTBEmergencyPhone/QLTBEmergencyPhone';
import QLTBGSMAddPhone from './components/QLTBGSMAddPhone/QLTBGSMAddPhone';
import GSMOnMap1 from './components/GSMOnMap1/GSMOnMap1';
import GSMOnMap2 from './components/GSMOnMap2/GSMOnMap2';



function App() {
  return (
    <Router>
    <div className="Baitap">
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="forgotpass/*" element={<Quenmatkhau />} />
      <Route path="/GuilaiEmail" element={<GuilaiEmail />} />
      <Route path="Dashboard/*" element={<Componentrouter />} />
      <Route path="GSM/*" element={<GSM/>}/>
      <Route path="QLCB/*" element={<QLCB/>}/>
      <Route path="BCPGD/*" element={<BCPGD/>}/>
      <Route path="BCATM/*" element={<BCATM/>}/>
      <Route path="AuditLog/*" element={<AuditLog/>}/>
      <Route path="QTC11/*" element={<QTC/>}/>
      <Route path="capnhat/*" element={<QTCUpdate/>}/>
      <Route path="themmoi1/*" element={<QTCAdd/>}/>
      <Route path="QLND/*" element={<QLND/>}/>
      <Route path="themmoi55/*" element={<QLNDAdd/>}/>
      <Route path="capnhat222/*" element={<QLNDUpdate/>}/>
      <Route path="QLTBGSM/*" element={<QLTBGSM/>}/>
      <Route path="Install/*" element={<QLTBGSMInstall/>}/>
      <Route path="phone11/*" element={<QLTBEmergencyPhone/>}/>
      <Route path="phone22/*" element={<QLTBGSMAddPhone/>}/>
      <Route path="GSMOnthemove/*" element={<GSMOnMap1/>}/>
      <Route path="GSMOnthemove1/*" element={<GSMOnMap2/>}/>

      

     
      



      </Routes>
      
    </div>
   
    
    </Router>
   
    
  );
}

export default App;
