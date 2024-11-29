import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RoutesData from './utils/Router'
import Header from './components/Header'
import Footer from './components/Footer'





const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {
          RoutesData.map((ele) => (
            <Route path={ele.path} element={ele.element} />
          ))
        }
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App