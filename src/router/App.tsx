import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/components/page/dashboard/dashboard";
import { AuthContainer } from "@/components/login/auth-container";
import { Landing } from "@/components/page/landing/landing";
import { Error404 } from "@/components/page-not-found/page-not-found";
import { MainLayout } from "@/router/main-layout";
import { MapaEmpresa } from "@/components/page/mapa-empresa/mapa-empresa";
import { Operacion } from "@/components/page/operacion/operacion";
import { Admin } from "@/components/page/admin/admin";
import { Telefonos } from "@/components/page/telefonos/telefonos";
import { Site } from "@/components/page/site/site";
import { Salas } from "@/components/page/salas/salas";
import { Impresoras } from "@/components/page/impresoras/impresoras";
import { Diademas } from "@/components/page/diademas/diademas";
import { Sillas } from "@/components/page/sillas/sillas";
import { Camaras } from "@/components/page/camaras/camaras";
import { Lockers } from "@/components/page/lockers/lockers";
import { NoSirve } from "@/components/page/no-sirve/no-sirve";
import { Bodega } from "@/components/page/bodega/bodega";

export default function App() {
  return (
    <>
      <Routes>
        {/* Rutas sin Sidebar */}
        <Route path="/login" element={<AuthContainer />} />

        <Route path="/" element={<Landing />} />
        {/* Rutas con Sidebar */}
        <Route element={<MainLayout />}>
          <Route path="/mapa-empresa" element={<MapaEmpresa />} />
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
          {/* Ruta 404 */}
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}