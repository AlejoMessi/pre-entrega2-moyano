import './App.css';
import React from 'react';
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from './Components/ItemListContainar/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <NavBar />
            <Routes>

              <Route 
                  path="/" 
                  element={<ItemListContainer />} 
              />
            
              <Route
                  path="/producto/:idUser"
                  element={<ItemDetailContainer />}
              />

              <Route
                  path="/category/:idCategory"
                  element={<ItemListContainer />}
              />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;