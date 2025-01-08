// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public/home"
// import Dashboard from "./pages/admin"
import AdminLayout from "./layouts/admin"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='border py-2 px-5 bg-indigo-200'>
          count is {count}
        </button>
      </div> */}

        {/* 8 Januari 2025 -> itu yang atas adalah template bawaan dari React */}
        {/* <Header />
        <Product />
        <ProductList/> */}
        {/* <Home/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home/>} />

            <Route path="/admin" element={<AdminLayout/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
