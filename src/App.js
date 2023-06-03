import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from './Components/404';
import AddBlog from './Components/AddBlog';
import Blogs from './Components/Blogs';
import ReadMore from './Components/ReadMore';
import User from './Components/User';
import ProtectedRoute from './Components/ProtectedRoute';
import AuthUser from './Components/AuthUser';
import Footer from './Components/Footer';
export const loggedInContext = createContext([])


function App() {
  const [login, setLogin] = useState({
    email: "",
    password: ''
  })

  return (
    <loggedInContext.Provider value={[login, setLogin]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<AuthUser />} />
          <Route path="/create" element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          } />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/login" element={<User />} />
          <Route path="/readMore/:id" element={<ReadMore />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </loggedInContext.Provider>
  )
}

export default App