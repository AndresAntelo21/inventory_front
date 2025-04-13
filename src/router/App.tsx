import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/dashboard/dashboard";
import { AuthContainer } from "@/components/login/auth-container";
import { Landing } from "@/components/landing/landing";
import { Error404 } from "@/components/page-not-found/page-not-found";
import { MainLayout } from "@/router/main-layout";
import { Home } from "@/components/home/home";
import { Operacion } from "@/components/operacion/operacion";
import { Admin } from "@/components/admin/admin";
import { Telefonos } from "@/components/telefonos/telefonos";
import { Site } from "@/components/site/site";
import { Salas } from "@/components/salas/salas";
import { Impresoras } from "@/components/impresoras/impresoras";
import { Diademas } from "@/components/diademas/diademas";
import { Sillas } from "@/components/sillas/sillas";
import { Camaras } from "@/components/camaras/camaras";
import { Lockers } from "@/components/lockers/lockers";
import { NoSirve } from "@/components/no-sirve/no-sirve";
import { Bodega } from "@/components/bodega/diademas";

export default function App() {
  return (
    <>
      <Routes>
        {/* Rutas sin Sidebar */}
        <Route path="/login" element={<AuthContainer />} />

        <Route path="/" element={<Landing />} />
        {/* Rutas con Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/operaciones" element={<Operacion />} />
          <Route path="/administrativo" element={<Admin />} />
          <Route path="/telefonos" element={<Telefonos />} />
          <Route path="/site" element={<Site />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/impresoras" element={<Impresoras />} />
          <Route path="/diademas" element={<Diademas />} />
          <Route path="/sillas" element={<Sillas />} />
          <Route path="/camaras" element={<Camaras />} />
          <Route path="/lockers" element={<Lockers />} />
          <Route path="/no-sirven" element={<NoSirve />} />
          <Route path="/bodega" element={<Bodega />} />
          {/* Rutas 404 */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}