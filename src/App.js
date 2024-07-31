import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import Dashboard from "./components/dashboard/index"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <CssBaseline></CssBaseline>
    </>

  );
}

export default App;
