import { Button } from "@material-tailwind/react";
import "./App.css";
import { AdminLayout } from "./components/admin/AdminLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "./pages/admin/DashBoard";
import { AllProperties } from "./pages/admin/AllProperties";
import { AddNewProperty } from "./pages/admin/AddNewProperty";
import { PropertyDetails } from "./pages/admin/PropertyDetails";
import { EditProperty } from "./pages/admin/EditProperty";
import { SignUp } from "./pages/admin/SignUp";
import { SignIn } from "./pages/admin/signIn";

function App() {
  return (
    <div>
      {/* <AdminLayout/> */}
      <BrowserRouter>
        <Routes>
          {/* this is for admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="all-properties" element={<AllProperties />} />
            <Route path="add-new-properties" element={<AddNewProperty />} />
            <Route path="propertyDetails" element={<PropertyDetails />} />
            <Route path="edit-property" element={<EditProperty />} />
          </Route>
            <Route path="admin/signUp" element={<SignUp />} />
            <Route path="admin/signIn" element={<SignIn />} />
          {/* this is for admin */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
