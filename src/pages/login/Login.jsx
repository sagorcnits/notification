import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const userData = { email, password };
    // console.log(userData);
    // post user
    axios
      .get(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
            localStorage.setItem("user", JSON.stringify(res.data[0]))
          alert("success your Login Please Ok and wait 1 seconds");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          alert("user Not Found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col w-[400px] p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto mt-20">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link to="/register">
                <span className="hover:underline dark:text-violet-600">
                  Sign up
                </span>
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
