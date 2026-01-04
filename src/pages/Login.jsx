// import { useState } from "react";
// import { apiRequest } from "../api/api";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     const data = await apiRequest("/auth/login", "POST", form);
//     localStorage.setItem("token", data.token);
//     navigate("/courses");
//   };

//   return (
//     <form onSubmit={submit}>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <button>Login</button>
//     </form>
//   );
// };

// export default Login;
import { useState } from "react";
import { apiRequest } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/auth/login", "POST", form);
      localStorage.setItem("token", data.token);
      navigate("/Courses");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Next wave</h2>
        <p className="subtitle">Login to continue</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={submit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
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

          <button className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="footer-text">
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
