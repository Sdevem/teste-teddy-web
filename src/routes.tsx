import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Clients";
import SelectClient from "./pages/SelectClients";
import PageBase from "./pages/PageBase";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clients" element={<PageBase />}>
          <Route index element={<Client />}></Route>
          <Route path="/clients/select" element={<SelectClient />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
