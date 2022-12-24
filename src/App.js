import React, { createContext, useReducer} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Formbuilder from "./components/Formbuilder/Formbuilder";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Logout from "./components/Logout/Logout";
import ChooseContienent from "./components/ChooseContienent";
import ChooseHotel from "./components/ChooseHotel";
import BookRoom from "./components/BookRoom";
import Services from "./components/Services";
import Covid from "./components/Covid";
import Admin from "./components/Admin";
import Errorpage from "./components/Errorpage/Errorpage";
import Contact from "./components/Contact/Contact";
import {initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/covid" element={<Covid />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/formbuilder" element={<Formbuilder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/choosecontienent" element={<ChooseContienent />} />
      <Route path="/choosehotel" element={<ChooseHotel />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/bookroom" element={<BookRoom />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}
export default App
