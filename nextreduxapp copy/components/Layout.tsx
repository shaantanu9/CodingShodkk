import { useEffect } from "react";
import { Footer, Navbar } from ".";
import { loginUserData, setUserData } from "../src/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { getLocalStorage } from "../src/utils";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(loginUserData);
  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      dispatch(setUserData(token));
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
