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
    <div className="flex w-full  justify-center items-center px-6 py-12 bg-gray-50 ">
      <form
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl "
        onSubmit={handleSubmit}
      >
        <h2>Login to your account</h2>
        <div className="flex ">
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
        </div>
        <div>
          <button type="submit">Login</button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
export default Login;
