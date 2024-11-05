import React from 'react'
import {  HashRouter, Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
        <Link to='/career'>career</Link>
        </li>
        <li>
        <Link to='/'>back to home</Link>

        </li>
      </ul>
    </nav>
        <Routes>
          <Route path="/" element={<h1>this is home page</h1>} />
          <Route path="/career" element={<h1>this is career page</h1>} />
          <Route path="/login" element={<h1>this is login page</h1>} />
        </Routes>
    </HashRouter>
  )
}

export default App
