import React from "react";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import NotFound from "./pages/notFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MainPage from "./pages/main/main";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = ({ loading }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<Admin loading={loading} />} />
        <Route path="/" element={<MainPage loading={loading} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
