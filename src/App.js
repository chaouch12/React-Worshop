

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Documents from './pages/Documents';
import Features from './pages/Features';
import Main from './apps/Main';
import Auth from './apps/Auth';
function App() {
  return (

    <BrowserRouter basename="/">
     
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} /> {/* 👈 Renders at /app/ */}
          <Route path="/features" element={<Features />} /> {/* 👈 Renders at /app/ */}
          <Route path="/documents" element={<Documents />} >
            
            </Route> {/* 👈 Renders at /app/ */}
        </Route>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
