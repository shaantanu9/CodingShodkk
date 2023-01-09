//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Login from './components/Login'
import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
const Login = (props) => {
  const { data: session, status } = useSession();
  console.log("session", session, status);
  const loading = status === "loading";

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!session) {
    return (
      <>
        <button
          onClick={signIn}
          className="px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500"
        >
          Login
        </button>
      </>
    );
  }
  return (
    <>
      <p>User login</p>
      <p>{session?.user.name}</p>
      <p>{session?.user.email}</p>
      <img src={session?.user.image} />
      <Button onClick={signOut}>Logout</Button>
    </>
  );
};

export default React.memo(Login);
