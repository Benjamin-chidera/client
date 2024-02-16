import { Button } from "@material-tailwind/react";
import "./App.css";
import { AdminLayout } from "./components/admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "./pages/admin/DashBoard";
import { AllProperties } from "./pages/admin/AllProperties";
import { AddNewProperty } from "./pages/admin/AddNewProperty";

function App() {
  return (
    <div>
     {/* <AdminLayout/> */}
     <BrowserRouter>
     <Routes>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="dashboard" element={<DashBoard/>}/>
        <Route path="all-properties" element={<AllProperties/>}/>
        <Route path="add-new-properties" element={<AddNewProperty/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
