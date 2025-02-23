import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DevOps from './pages/DevOps';
import MyWorks from './pages/MyWorks';
import Blog from './pages/Blog';
import Archives from './pages/Archives';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import './styles/App.css';

function App() {
  const myName = "FIDELIS AGBA";
  const phoneNumber = "+2348085952266";
  
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Navbar name={myName} phoneNumber={phoneNumber} />
        <AnimatePresence mode="wait">
          <main className="content flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/devops" element={<DevOps />} />
              <Route path="/work" element={<MyWorks />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/archives" element={<Archives />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer name={myName} />
      </div>
    </Router>
  );
}

export default App;