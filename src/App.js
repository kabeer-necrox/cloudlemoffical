import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyAppBar from './components/header/MyAppBar';

import Slider from './components/home/Slider';

function App() {
  return (
    <div className="App">
 
     <MyAppBar />
   
     <Slider />
    </div>
  );
}

export default App;
