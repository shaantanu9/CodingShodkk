//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Page from './components/Page'
const Page = (props) => {
  return (
    <>
      <p className="animate-bounce bg-indigo-700">
        Checking Page Component Working{" "}
      </p>
    </>
  );
};

export default React.memo(Page);
