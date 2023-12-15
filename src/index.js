import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IncAndDec from './components/Inc&Dec';
import ClassComponentFake from './components/ClassComponentFake';
import ShoppingWithClass from './components/ShoppingWithClass';
import LoginComponent from './components/LoginComponent';
import FormComponent from './components/FormComponent';
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import Demo from './components/Demo';
import ContextDemo from './components/ContextDemo';
import CookieUserLogin from './components/CookieUserLogin';
import { CookiesProvider } from 'react-cookie';
import ReducerDemo from './components/ReducerDemo';
import CustomHookEx from './components/CustomHookEx';
import ShoppingIndex from './shopping/ShoppingIndex';
import SPAComponent from './components/SPAComponent';
import IshopIndex from './ishop/IshopIndex';
import SearchDemo from './components/SearchDemo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
