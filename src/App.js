import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyWorks from './pages/MyWorks';
import Archives from './pages/Archives';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import UserContext from './UserContext';
import './styles/App.css';

function App() {
  const userData = {
    name: "FIDELIS AGBA",
    username: "fid37is",
  };

  return (
    <UserContext.Provider value={userData}>
      <Router>
        <div className="App min-h-screen flex flex-col no-select">
          <Navbar name={userData.name} />
          <AnimatePresence mode="wait">
            <main className="content flex-grow p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<MyWorks />} />
                <Route path="/archives" element={<Archives />} />
              </Routes>
            </main>
          </AnimatePresence>
          <Footer name={userData.name} />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
