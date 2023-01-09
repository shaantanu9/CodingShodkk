import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";

import { likeAsync, snipsData } from "../src/features/snips/snipsSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";

type Props = {
  likes: number;
  id: string;
};

const LikeButton: React.FC<Props> = ({ likes, id }) => {
  const dispatch = useAppDispatch();
  // const { isAuth, token } = useAppSelector(loginUserData);
  const { loading, totalPages, bookmarks } = useAppSelector(snipsData);
  const likeHandler = (id) => {
    dispatch(likeAsync(id));
  };

  return (
    <>
      <HStack>
        <Button bg={"white"} onClick={() => likeHandler(id)}>
          <BiUpvote className="text-2xl text-gray-500" />
        </Button>
        <span className="text-gray-500">{likes}</span>
        <Button bg={"white"} onClick={() => likeHandler(id)}>
          <BiDownvote className="text-2xl text-gray-500" />
        </Button>
      </HStack>
    </>
  );
};

export default React.memo(LikeButton);
