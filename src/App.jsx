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
import Genres from "./pages/admin/genres/index.jsx"
import Authors from "./pages/admin/authors/index.jsx"
import PayMethods from "./pages/admin/paymentmethods/index.jsx"
import AuthorCreate from "./pages/admin/authors/create.jsx"
import GenreCreate from "./pages/admin/genres/create.jsx"
import GenreEdit from "./pages/admin/genres/edit.jsx"
import AuthorEdit from "./pages/admin/authors/edit.jsx"
import PaymentMethodCreate from "./pages/admin/paymentmethods/create.jsx"
import PaymentMethodEdit from "./pages/admin/paymentmethods/edit.jsx"
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
                <Route path="edit/:id" element={<BookEdit />} />
              </Route>

              <Route path="genres">
                <Route index element={<Genres />} />
                <Route path="create" element={<GenreCreate />} />
                <Route path="edit/:id" element={<GenreEdit />} />
              </Route>


              <Route path="authors">
                <Route index element={<Authors />} />
                <Route path="create" element={<AuthorCreate />} />
                <Route path="edit/:id" element={<AuthorEdit />} />
              </Route>

              <Route path="payment_methods">
                <Route index element={<PayMethods />} />
                <Route path="create" element={<PaymentMethodCreate />} />
                <Route path="edit/:id" element={<PaymentMethodEdit />} />
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
