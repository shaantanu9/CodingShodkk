import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
export type CommentId = {
  id: string;
};

export const PostComments: React.FC<CommentId> = ({ id }) => {
  const [comment, setComment] = React.useState("");
  useEffect(() => {
    console.log(id, "id");
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment, "comment");
  };

  return (
    <>
      {/* <Center> */}
      <HStack w={"100%"} ml={4}>
        <Input
          placeholder="Post a comment"
          w={{ base: "240px", md: "400px", lg: "560px" }}
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button onClick={handleSubmit}>Comment</Button>
      </HStack>
      {/* </Center> */}
    </>
  );
};
