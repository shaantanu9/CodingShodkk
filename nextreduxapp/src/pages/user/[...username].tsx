import { Skeleton } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Personal } from "../../../components/Personal";
type UserType = {};

const User: React.FC<UserType> = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Head>
        <title>{username} Profile</title>
      </Head>
      <Skeleton isLoaded={true}>
        <Personal username={username} />
      </Skeleton>
    </>
  );
};

export default User;
