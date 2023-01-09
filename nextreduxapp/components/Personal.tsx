import React from "react";
import InfiniteScrollComp from "./InfiniteScroll";

type PersonalType = {
  username: string | string[];
};

export const Personal: React.FC<PersonalType> = (props) => {
  return (
    <>
      <h1>{props.username}</h1>
      <InfiniteScrollComp
        url={"https://camel-bedclothes.cyclic.app/bookmarks"}
      ></InfiniteScrollComp>
    </>
  );
};
