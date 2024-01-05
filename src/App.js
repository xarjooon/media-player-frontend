import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Watchhistory from './pages/Watchhistory';
import Landing from './pages/Landing';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {  Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path ='/' element={<Landing/>}/>
        <Route path ='/Home' element={<Home/>}/>
        <Route path ='/Watchhistory' element={<Watchhistory/>}/>
        
      
      
     </Routes>


      <Footer/>
    
    </div>
  );
}

export default App;
