import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard/dashboard";
import { Login } from "@/login/login";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </>
  );
}