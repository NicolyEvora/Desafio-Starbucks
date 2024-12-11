import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Novidades from "./Components/Novidades/Novidades"; 
import Sobre from './Components/Sobre/Sobre'; 
import './App.scss';

export default function App(){
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Novidades" element={<Novidades />} /> 
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}