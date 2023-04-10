import logo from './logo.svg';
import './App.css';
import { Navi } from './Navi';
import { Home } from './Home';
import { Message } from './Message';
import {Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
     <Navi/>
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/message" element={<Message/>} />
        
      </Routes>
     
    
    </div>
  );
}

export default App;
