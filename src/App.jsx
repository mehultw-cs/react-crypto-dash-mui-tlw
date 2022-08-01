// React Imports

import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Dependencies import
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

// Components Pages import
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import CoinPage from './pages/CoinPage';





const App = () => {

// Currency


  // Create app  wide darkTheme
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: "dark",
    },
  });


  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
    <div className='bg-[#14161a] text-white min-h-screen'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/coins/:id" element={<CoinPage />}/>
      </Routes>
    </div>
    </ThemeProvider>
    </Router>
  )
}

export default App
