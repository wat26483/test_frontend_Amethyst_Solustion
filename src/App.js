import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './route/Home';
import Detail from './route/DetailItem';
import EditDetailItem from './route/EditDetailItem';
import { createContext, useEffect, useState } from 'react';
import { Datas } from './Datas';


function App() {
  const [data, setData] = useState(Datas); // จำนวณข้อมูลทั้งหมด
  const [selected,setSelected] = useState([]);// จำนวณข้อมูลทีจะแสดง

  // เมือมีการคลิ๊ก checkbox เก็บ statate
  useEffect(()=>{
    const selecteditem =  data.filter((selectdata)=>selectdata.Status===true)
    setSelected(selecteditem)
  },[data])
  
  return (
    <Context.Provider value={{ data, setData,selected,setSelected }}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/edit/:id' element={<EditDetailItem />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

// ทำเป็น global state
export const Context = createContext(null)
export default App;
