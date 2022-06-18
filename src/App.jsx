import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header Component/Header';
import Home from './pages/Home Page/Home';
import JobDetail from './pages/JobDetail Page/JobDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="job-detail/:jobId" element={<JobDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
