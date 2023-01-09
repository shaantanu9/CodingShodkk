"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function Component({ children }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className="" onClick={signOut}>
          Sign out
        </button>
        {children}
      </>
    );
  }
  return <button onClick={signIn}>Sign in</button>;
}
