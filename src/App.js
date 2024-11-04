import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './component/Home';
import AllCollection from './component/AllCollection';
import ShopCategory from './component/ShopCategory';


function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllCollection" element={<AllCollection />} />
          <Route path="/Shop" element={<ShopCategory />} />
     

        </Routes>
      </Router>
  
  );
}

export default App;
