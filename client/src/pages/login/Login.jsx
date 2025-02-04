import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Input, Button } from "@nextui-org/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const apiUrl = process.env.REACT_APP_API_URL;

  const submitUserLogin = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const response = await axios.post(`${apiUrl}/api/account/login`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.data.success) {
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card
        className="w-full max-w-md p-8 shadow-lg bg-white border-2 border-purple-100 
        hover:border-purple-300 transition-all duration-300"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Login</h1>
          <p className="text-gray-600">Welcome back to ForecastMaster</p>
        </div>
        <form onSubmit={submitUserLogin} className="space-y-6">
          <Input
            type="email"
            label="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <Input
            type="password"
            label="Password"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
            required
          />
          <Button
            type="submit"
            className="w-full bg-purple-600 text-white hover:bg-purple-700"
          >
            Login
          </Button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Create new account
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
