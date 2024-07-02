import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import './App.sass'
import EnglishLanding from './pages/eng/Landing'
import CatalanLanding from './pages/cat/Landing'
import Home from './pages/cat/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
