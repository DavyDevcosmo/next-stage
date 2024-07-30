import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/PrivateRouter";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import SignUp from "./pages/SignUp";
import UpdateProfile from "./pages/UpdateProfile";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Redireciona da raiz para a página de registro */}
          <Route path="/" element={<Navigate to="/auth/register" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<SignUp />} />
          <Route path="/auth/home" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<div><h1>Rota não encontrada</h1></div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
