import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import  ReactDOM from 'react-dom';

import {BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';


ReactDOM.render(
    <Router>
        <GoogleOAuthProvider clientId="305315991108-avu5j76lh6ga3ocajkrtg6u8sski5br3.apps.googleusercontent.com"><App/></GoogleOAuthProvider>
        
    </Router>
,document.getElementById('root'));