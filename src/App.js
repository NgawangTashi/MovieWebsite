import React from 'react';
import Home from './Home';
import Description from './Description';
import Error from './Error';
import {Routes, Route} from 'react-router-dom';
import "./App.css";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<Description/>} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
