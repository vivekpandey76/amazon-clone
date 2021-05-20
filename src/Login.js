import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://lh3.googleusercontent.com/proxy/x1J8noE-C3UYRqhCxUiwJt-ZvpmWS1gRhckBvKrnXZxSkjRBdgvQ-0Ek9dfz6EjOIHRxaF6gzgk9ByRFbK5SkDrp22hJ5eyi3YrETW0RHlKJa90_-RgzV4p5MLyv69I9FF5K"
        />
      </Link>
    </div>
  );
}

export default Login;
