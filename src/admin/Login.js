import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
    //! settting the userState to logged in and userName to the registered user
    if (email === "admin@pizzavilla" && password === "admin@pizzavilla") {
      console.log("logged In");
      localStorage.setItem("userState", "LOGGED_IN");

      //? redirection the user to the home page (only when authenticated)
      history.replace("/admin");
      window.location.reload(false);
      toast.success("Welcome back Admin");
    } else {
      toast.error("Enter valid Details");
    }
  };
  return (
    <div className="loginWrapper">
      <form className="formWrapper">
        <h2>LOG IN</h2>
        <div className="inputGroup">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="inputBox"
            required
            type="email"
            placeholder="EMAIL"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="inputBox"
            required
            type="password"
            placeholder="PASSWORD"
          />
          <button type="submit" onClick={signIn} className="btn loginBtn">
            LOG IN
          </button>
          <span className="createInfo">
            If you are not the admin then &nbsp;
            <Link to="/" className="createNewBtn">
              go home
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
