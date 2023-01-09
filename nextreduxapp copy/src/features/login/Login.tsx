import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { LoginUser } from "./loginSlice";
import { loginAsync, loginUserData } from "./loginSlice";

function Login() {
  const [loginUserObj, setLoginUserObj] = useState<LoginUser>({
    email: "",
    password: "",
    keepMeLogin: false,
  });
  const dispatch = useAppDispatch();
  const loginData = useAppSelector(loginUserData);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAsync(loginUserObj));
  };

  return (
    <div>
      {loginData && <p>{loginData.status}</p>}
      {loginData && <p>token is {loginData.token}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) =>
            setLoginUserObj({
              ...loginUserObj,
              email: e.target.value,
            })
          }
          value={loginUserObj.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setLoginUserObj({
              ...loginUserObj,
              password: e.target.value,
            });
          }}
          value={loginUserObj.password}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            setLoginUserObj({
              ...loginUserObj,
              keepMeLogin: e.target.checked,
            });
          }}
        />
        <Button bg={"red.400"} type="submit">
          Login{" "}
        </Button>
      </form>
    </div>
  );
}

export default Login;
