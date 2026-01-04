import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await apiRequest("/auth/register", "POST", form);
      navigate("/");
    } catch {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <h1>Course Management Application🚀</h1>
        <p>Manage and organize your courses with ease.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p className="subtitle">Sign up to get started</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={submit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
              />
            </div>

            <button className="auth-btn">Register</button>
          </form>

          <p className="footer-text">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
