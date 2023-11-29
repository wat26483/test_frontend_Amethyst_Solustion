import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './route/Home';
import Detail from './route/DetailItem';
import EditDetailItem from './route/EditDetailItem';
import { createContext, useState } from 'react';


function App() {
  const [selected, setSelected] = useState([])// เก็บ obj ที่เลือก
  return (
    <Context.Provider value={{ selected, setSelected }}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/edit' element={<EditDetailItem />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

// ทำเป็น global state
export const Context = createContext(null)
export default App;
