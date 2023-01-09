"use client";

import { Button, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { default as React } from "react";
import { GoComment } from "react-icons/go";
import { setSingleBookmark, snipsData } from "../src/features/snips/snipsSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { setLocalStorage } from "../src/utils";
import { HighlightSyntax } from "./";

import LikeButton from "./LikeButton";
export type SingleSnipsProps = {
  _id: string;
  userId: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  isPrivate: boolean;
  likesList: string[];
  code: string;
  language: string;
  isError: boolean;
  createdAt: string;
  updatedAt: string;
};

const SingleSnips: React.FC<SingleSnipsProps> = (snips) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { bookmarks } = useAppSelector(snipsData);

  const goToParticularSnips = (id) => {
    const singleBookmark = bookmarks.find((bookmark) => bookmark._id === id);
    dispatch(setSingleBookmark(singleBookmark));
    setLocalStorage("singleBookmark", singleBookmark);
    setLocalStorage(id, singleBookmark);
    router.push(`/snips/${id}`);
  };

  return (
    <>
      {/* <Center> */}
      <Skeleton isLoaded={true}>
        <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
          {/* <Stack direction="row" alignItems="center"> */}
          <Text fontWeight="semibold">{snips.title}</Text>
          {/* </Stack> */}

          <Stack
          // direction={{ base: "column", md: "row" }}
          // justifyContent="space-between"
          >
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              {snips?.description}
            </Text>
            <HighlightSyntax code={snips?.code} />
            <HStack>
              <LikeButton likes={snips?.likesList?.length} id={snips._id} />
              <Button
                bg={"white"}
                onClick={() => goToParticularSnips(snips._id)}
              >
                <GoComment />
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Skeleton>
    </>
  );
};

export default SingleSnips;
