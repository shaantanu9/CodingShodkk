import type { NextPage } from "next";
import { Dashboard, LoginComp } from "../../components/";
import { ifToken, loginUserData } from "../../src/features/login/loginSlice";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks";
import { getLocalStorage } from "../../src/utils";

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(loginUserData);
  console.log("isAuth OutSide UseEffect", isAuth);
  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      dispatch(ifToken(token));
      console.log("isAuth outside UseEffect", isAuth);
    }
  }, [isAuth]);

  return isAuth ? <Dashboard /> : <LoginComp />;
};

export default IndexPage;
