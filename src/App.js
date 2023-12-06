import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyAppBar from './components/header/MyAppBar';

// import Slider from './components/home/Slider';
import Animation from './components/home/Animation';
import Paraanima from './components/home/Paraanima';

function App() {
  return (
    <div className="App">
 
     <MyAppBar />
   
     {/* <Slider /> */}
     <Animation />
     <Paraanima />
    </div>
  );
}

export default App;
