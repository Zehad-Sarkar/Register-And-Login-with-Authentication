import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
const {signIn}=useContext(AuthContext)
  // console.log(signIn);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    
    signIn(email, password)
      .then(result => {
        const logginUser = result.user;
        form.reset('')
        console.log(logginUser);
      })
      .then(error => {
      console.log(error.message);
    })
  };

  return (
    <div>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mb-4 ml-8">
              <Link to="/register" className="label-text-alt link link-hover">
                New to Auth Master? Please Register
              </Link>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
