
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { UseProfile } from "./pages/UserProfile";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/PrivateRouter";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/" element={<SignUp />}> </Route>

          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UseProfile />
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