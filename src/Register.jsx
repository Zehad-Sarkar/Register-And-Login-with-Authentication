import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProviders";

const Register = () => {
  const { user,createUser } = useContext(AuthContext);
  // console.log(user, createUser);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset('')
    console.log(name, email, password);
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
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
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <Link to="/login" className="label-text-alt link link-hover">
                    Already have an account?
                  </Link>
                </label>
              </div>
              <div className="mt-6 form-control">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
