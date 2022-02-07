
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainScreen } from './components/MainScreen/MainScreen';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path="/" element={<VideoPlayer />} />
          <Route path="/data-entry" element={<MainScreen />} />
        </Routes>

      </div>


    </div>
  );
}

export default App;
