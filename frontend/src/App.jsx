import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import { Home, CreatePost } from "./pages";

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="landingpage">
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App