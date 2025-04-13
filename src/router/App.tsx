import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard/dashboard";
import { AuthContainer } from "@/components/login/auth-container";
import { Landing } from "@/components/landing/landing";
import { Error404 } from "@/components/page-not-found/page-not-found";
import { MainLayout } from "@/router/main-layout";
export default function App() {
  return (
    <>
      <Routes>
        {/* Rutas sin Sidebar */}
        <Route path="/login" element={<AuthContainer />} />

        <Route path="/" element={<Landing />} />
        {/* Rutas con Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}