"use-client";
//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import home from './components/home'
import Home from "../components/Home";
const home = (props) => {
  return (
    <>
      <p className="animate-bounce bg-indigo-700">
        Checking home Component Working{" "}
      </p>
      <Home />
    </>
  );
};

export default React.memo(home);
