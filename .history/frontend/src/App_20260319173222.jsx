import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import WorkerDashboard from "./pages/WorkerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import CompleteWorkerProfile from "./pages/CompleteWorkerProfile";
import Landingpage from "./pages/Landingpage";
import ServicePage from "./CustomerdashComponent/ServicePage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#0ea5e9",
              color: "#fff",
              padding: "20px",
              text: "bold",
            },
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/customer"
            element={
              <ProtectedRoute role="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/worker"
            element={
              <ProtectedRoute role="worker">
                <WorkerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="complete-profile"
            element={
              <ProtectedRoute role="worker">
                <CompleteWorkerProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/service/:serviceType" element={<ServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
