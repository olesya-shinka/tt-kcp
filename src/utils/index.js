import { auth } from "../firebase";

export const getUserRole = () => {
  const currentUserEmail = auth.currentUser?.email;
  if (currentUserEmail === "admin@mail.ru") {
    return "admin";
  } else if (currentUserEmail === "manager@mail.ru") {
    return "manager";
  }
};
