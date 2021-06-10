import React, { useState, useContext } from "react";
import { FirebaseContest } from "../../store/Context";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'
import Logo from "../../olx-logo.png";
import "./Login.css";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContest);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animation, setAnimation] = useState(false)
  const handleSubmit = (e) => {
    setAnimation(true)
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setAnimation(false)
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          {/* <button>Login</button> */}
          {
            animation ?   <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loging...
          </Button> : <button>Login</button> 
          }
        </form>
        {/* <a>Signup</a> */}
        <Link style={{ textDecoration: "none" }} to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login;
