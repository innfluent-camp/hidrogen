import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'routes/login';
import Dashboard from './dashboard';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
