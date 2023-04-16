import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {

  const {user,logOut}=useContext(AuthContext)
  
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .then(error => {
      console.log(error);
    })
}
  
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="text-xl normal-case btn btn-ghost">
          Auth Master Firebase
        </a>
        <Link className="text-xl normal-case btn btn-ghost" to="/">
          Home
        </Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/order">
          Order
        </Link>
       {user && <Link className="text-xl normal-case btn btn-ghost" to="/profile">
          Profile
        </Link>}
        <Link className="text-xl normal-case btn btn-ghost" to="/register">
          Register
        </Link>
        <Link className="text-xl normal-case btn btn-ghost" to="/login">
          Login
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleSignOut} className="btn btn-xs">
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
