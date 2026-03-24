import { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      (localStorage.setItem("token", token),
        localStorage.setItem("role", user.role));

      //imp
      // window.location.href = user.role === "customer" ? "/customer" : "/worker";

      if (user.role === "customer") {
        window.location.href = "/customer";
      } else {
        try {
          await api.get("/worker-profile/me");
          window.location.href = "/worker";
        } catch (error) {
          window.location.href = "complete-profile";
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "login failed");
    }
  };

  return (
    <div className="px-40 py-40 ">
      <form className="border-4 border-cyan-800" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=" Your Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
export default Login;
