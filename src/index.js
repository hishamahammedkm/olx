import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContest} from './store/Context'
import Context from './store/Context'

import firebase from './firebase/config'
ReactDOM.render(
    <FirebaseContest.Provider value={{firebase}}>
    <Context>
        <App />
    </Context>    
    </FirebaseContest.Provider>
    
    , document.getElementById('root'));
