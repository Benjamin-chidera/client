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
import { ErrorPage } from "./pages/admin/ErrorPage";
import { UserLayout } from "./components/users/UserLayout";
import { Home } from "./pages/users/Home";
import { About } from "./pages/users/About";
import { Properties } from "./pages/users/Properties";
import { PropertyDetail } from "./pages/users/PropertyDetails";
import { Contact } from "./pages/users/Contact";
import { Booking } from "./pages/users/Booking";
import { Inspection } from "./pages/admin/Inspection";
import { UserSignUp } from "./pages/users/SignUp";
import { UserSignIn } from "./pages/users/signIn";
import { Private } from "./pages/users/Private";
import { AdminPrivate } from "./pages/admin/Private";
import { Error } from "./pages/users/Error";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          {/* this is for admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route element={<AdminPrivate />}>
              <Route index element={<DashBoard />} />
              <Route path="all-properties" element={<AllProperties />} />

              <Route path="add-new-properties" element={<AddNewProperty />} />
              <Route
                path="propertyDetails/:propertyId"
                element={<PropertyDetails />}
              />
              <Route
                path="edit-property/:propertyId"
                element={<EditProperty />}
              />
              <Route path="inspection" element={<Inspection />} />
            </Route>
          </Route>

          <Route path="admin/*" element={<ErrorPage />} />
          <Route path="admin/signUp" element={<SignUp />} />
          <Route path="admin/signIn" element={<SignIn />} />

          {/* this is for admin */}

          {/* this is for user */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="contact" element={<Contact />} />
            <Route element={<Private />}>
              <Route
                path="propertyDetails/:propertyId"
                element={<PropertyDetail />}
              />
              <Route path="booking" element={<Booking />} />
            </Route>
          </Route>
          <Route path="signUp" element={<UserSignUp />} />
          <Route path="signIn" element={<UserSignIn />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
