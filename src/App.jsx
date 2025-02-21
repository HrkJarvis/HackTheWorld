// src/App.jsx
import React from 'react';
import theme from './chakra';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Assuming you use Chakra UI for styling
import { Global, css } from '@emotion/react';
import Layout from './components/Layout'; // Import Layout component
import ServicesOverview from './components/ServicesOverview'; // Import ServicesOverview component
import Service from './pages/Services'; // Import Service component
import Home from './pages/Home'; // Import Home component
import Blog from './pages/Blog'; // Import Blog component
import Contact from './pages/Contact'; // Import Contact component
import AboutUs from './pages/About';

const App = () => (
  <ChakraProvider theme={theme}>
    <Global
      styles={css`
        @keyframes scaleUp {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
      `}
    />
    
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Service /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
      </Routes>
    
  </ChakraProvider>
);

export default App;
