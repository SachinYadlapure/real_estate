import Logins from './component/Login';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Homepage from './component/Homepage';
import Register from './component/Register';
import Aboutus from './component/Aboutus';
import Sell from './component/Selle'
import Seller1 from './component/seller1';
import Seller2 from './component/seller2';
import Buy from './component/Buy';
import Contact from './component/Contact';
import Forgetpassword from './component/forgetpassword';
import Admin from './component/admin';
import Map from './component/Maps';
function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logins/>} ></Route>
        <Route path="/login" element={<Logins/>} ></Route>
        <Route path="/Register" element={<Register/>} ></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/Sell" element={<Sell/>}></Route>
        <Route path="/seller/dashboard" element={<Seller1/>}></Route>
        <Route path="/Buy" element={<Buy/>}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/forget-password" element={<Forgetpassword/>}></Route>
        <Route path="/Seller" element={<Seller2/>}></Route>
        <Route path="/admin" element={<Admin/>} ></Route>
        <Route path="/map" element={<Map/>} ></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
