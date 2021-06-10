import React, { useState,useContext } from 'react';
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner'
import Logo from '../../olx-logo.png';
import { FirebaseContest } from '../../store/Context';
import './Signup.css';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function Signup() {
  const [animation, setAnimation] = useState(false)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContest)
  const history = useHistory()
  const handleSubmit = (e)=>{
    setAnimation(true)
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push('/')
        })
      })
    }).catch((error)=>{
      setAnimation(false)
      alert(error.message)
    })

  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            required
            className="input"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            required
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
           required
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          {/* <button>Signup</button> */}
          {
            animation ?   <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Signuping...
          </Button> : <button>Signup</button> 
          }
        </form>
        {/* <a>Login</a> */}
        <Link style={{textDecoration:'none'}} to='/login'>Login</Link>
      </div>
    </div>
  );
}
