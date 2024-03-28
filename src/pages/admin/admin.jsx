import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../../utils";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = getUserRole();
    if (userRole !== "admin") {
      navigate("/"); // Перенаправляем пользователей, не являющихся администраторами, на главную страницу
    }
  }, [navigate]);

  return (
    <div>
      <h2>Admin Page</h2>
      <p>jjj</p>
    </div>
  );
};

export default Admin;
