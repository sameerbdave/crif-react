import './App.scss';
import Nav from './component/common/Nav';
import Personal from './component/personal/Personal';
import Business from './component/business/Business';
import Freeflow from './component/freeflow/Freeflow';
import Login from './component/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FaqsComp from './component/common/faqs/FaqsComp';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="business" element={<Business />} />
        </Routes>
    </div>
  );
}

export default App;
