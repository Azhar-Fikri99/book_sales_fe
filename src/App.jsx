// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Dashboard from "./pages/admin"
import AdminLayout from "./layouts/admin"
import AdminBooks from "./pages/admin/books"
import BookCreate from "./pages/admin/books/create.jsx"
import BookEdit from "./pages/admin/books/edit.jsx"
import PublicBooks from "./pages/public/books"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Contact from "./pages/public/contacts/index.jsx"
import Teams from "./pages/public/teams/index.jsx"
// import Contact from "./components/shared/Contact/index.jsx"
// import Contacts from "./pages/admin/contacts/"
// import Contacts from "./pages/public/contacts/"

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
          {/* <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/admin" element={<AdminLayout/>} />
          </Routes> */}
          
          
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="books" element={<PublicBooks />} />
              <Route path="contacts" element={<Contact/>} />
              <Route path="teams" element={<Teams/>} />
            </Route>

            {/* Auth Routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            
          

            {/* Admin Routes */}    
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              
              <Route path="books">
                <Route index element={<AdminBooks />} />
                <Route path="create" element={<BookCreate />} />
                <Route path="edit" element={<BookEdit />} />
              </Route>
            </Route>
                 
              {/* <Route path="contacts">
                   <Route index element={<Contacts />} />
               </Route> */}
        </Routes>
          
              {/* <Route path="/admin" element={<AdminLayout/>} /> */}
        </BrowserRouter>

          {/* ========================================================================== */}
    </>
  )
}

export default App
