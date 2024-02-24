import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/notFound";
import FirstAdmin from "./backOffice/pages/adminFirst";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
        <Route path="/admin/firstadmin" element={<FirstAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
