// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { CssBaseline, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Article from './components/Article';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppTheme = () => {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return <MuiThemeProvider theme={theme}><CssBaseline /></MuiThemeProvider>;
};

const App = () => {
  const [category, setCategory] = useState('');

  return (
    <ThemeProvider>
      <Router>
        <AppTheme />
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/search/:query" element={<Home category={category} />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
