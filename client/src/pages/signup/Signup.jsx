import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Card, Input, Button } from "@nextui-org/react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitNewUser = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.REACT_APP_API_URL;

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const newUser = { email, fname, lname, password };

    try {
      const response = await axios.post(
        `${apiUrl}/api/account/signup`,
        newUser,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card
        className="w-full max-w-md p-8 shadow-lg bg-white border-2 border-teal-100 
        hover:border-teal-300 transition-all duration-300"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Sign Up</h1>
          <p className="text-gray-600">Create your ForecastMaster account</p>
        </div>
        <form onSubmit={submitNewUser} className="space-y-6">
          <div className="flex space-x-4">
            <Input
              type="text"
              label="First Name"
              variant="bordered"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <Input
              type="text"
              label="Last Name"
              variant="bordered"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
          <Input
            type="email"
            label="Email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Password"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Confirm Password"
            variant="bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full bg-teal-600 text-white hover:bg-teal-700"
          >
            Create Account
          </Button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Already have an account?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
