import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks";
import { getLocalStorage } from "../../../src/utils";

import { Skeleton } from "@chakra-ui/react";

import { snipsData } from "../../../src/features/snips/snipsSlice";

import { GetComments, PostComments, SingleSnips } from "../../../components";

const SingleParticularSnips = () => {
  const router = useRouter();
  const { id } = router.query;
  //   const snipsId = id && id[0];

  const dispatch = useAppDispatch();
  let { singleBookmark } = useAppSelector(snipsData);
  useEffect(() => {
    const token = getLocalStorage("token");
  }, []);
  return (
    <>
      <Skeleton isLoaded={true}>
        <SingleSnips {...singleBookmark} />
        {/* <SingleSnips {...singleBookmark} /> */}
        <PostComments id={singleBookmark?._id} />

        <GetComments id={singleBookmark?._id} />
      </Skeleton>
    </>
  );
};

export default React.memo(SingleParticularSnips);
