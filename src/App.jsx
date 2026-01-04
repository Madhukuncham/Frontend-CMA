import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import EditCourse from "./pages/EditCourse";
import AddCourse from "./pages/AddCourse";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Courses />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-course"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <AddCourse />
              </>
            </ProtectedRoute>
          }
        />
        <Route
        path="/edit-course/:id"
        element={
          <ProtectedRoute>
            <EditCourse />
          </ProtectedRoute>
        }
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
