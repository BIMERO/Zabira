import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SplashLoader from "./components/SplashLoader";
import Signup from "./pages/auth/Signup";
import AuthLayout from "./layouts/AuthLayout";
import Otp from "./pages/auth/Otp";
import ChangeEmail from "./pages/auth/ChangeEmail";
import Dashboard from "./pages/dashboard/Index";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashLoader />} />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/change-email" element={<ChangeEmail />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
