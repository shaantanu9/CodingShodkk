import React, { useEffect } from "react";
import type { CommentId } from "./";

export const GetComments: React.FC<CommentId> = ({ id }) => {
  useEffect(() => {
    console.log(id, "id");
  }, [id]);

  return (
    <>
      <p>{id}</p>
    </>
  );
};
