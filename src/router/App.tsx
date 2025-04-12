import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard/dashboard";
import { AuthContainer } from "@/components/login/auth-container";
import { Landing } from "@/components/landing/landing";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </>
  );
}