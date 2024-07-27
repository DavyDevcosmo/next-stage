
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/PrivateRouter";
import { Login } from "./pages/Login"   
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import SignUp from "./pages/SignUp";
import  UpdateProfile  from "./pages/UpdateProfile";
import UserProfile from "./pages/UserProfile";



export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Authlogin" element={<Login />}> </Route>
          <Route path="/" element={<SignUp />}> </Route>
          <Route path="/home" element={<Home />}> </Route>
          <Route path="/games" element={<Games />}> </Route>

          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>}>
          </Route>

          <Route
            path="/update-profile"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }>
          </Route>

          <Route path="*" element={<div><h1>Rota não encontrada</h1></div>}> </Route>
          <Route path="/forgot-password" element={<ForgotPassword />}> </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}