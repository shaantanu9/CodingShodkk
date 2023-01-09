"use client";
import { Skeleton } from "@chakra-ui/react";
import { useEffect } from "react";
import { loginUserData } from "../src/features/login/loginSlice";
import { snipsAsync, snipsData } from "../src/features/snips/snipsSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { SingleSnips, SingleSnipsProps } from "./";
const BACKEND_URL = process.env.BACKEND_URL;
const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth, token } = useAppSelector(loginUserData);
  const { loading, totalPages, bookmarks } = useAppSelector(snipsData);
  useEffect(() => {
    dispatch(snipsAsync());
  }, []);

  console.log("bookmarks outside dashboard", bookmarks);
  return (
    <>
      <Skeleton isLoaded={!loading}>
        {bookmarks?.map((bookmark: SingleSnipsProps) => {
          return <SingleSnips key={bookmark._id} {...bookmark} />;
        })}
      </Skeleton>
    </>
  );
};

export default Dashboard;
