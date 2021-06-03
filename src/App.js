import React, { useEffect,useContext} from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import {AuthContext, FirebaseContest} from './store/Context'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContest)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    

   
  }, [])
  return (
    <div>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
         <Signup />
        </Route>
        <Route path='/login'>
         <Login />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
