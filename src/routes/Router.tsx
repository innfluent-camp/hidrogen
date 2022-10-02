import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'routes/login';
import Home from './home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
