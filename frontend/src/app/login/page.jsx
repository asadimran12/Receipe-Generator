"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter(); 

  const Loginuser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/magic-link",
        { email }
      );
      setMessage(response.data.message);
      setErrorMsg("");
      localStorage.setItem("loggedIn", "true");
    } catch (error) {
      setErrorMsg(error.response?.data?.error || "Login failed");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md items-center">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-4">
          🔐 Magic Link Login
        </h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={Loginuser}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {message && (
          <p className="mt-4 text-green-600 text-sm text-center">{message}</p>
        )}
        {errorMsg && (
          <p className="mt-4 text-red-500 text-sm text-center">{errorMsg}</p>
        )}

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-fit bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
