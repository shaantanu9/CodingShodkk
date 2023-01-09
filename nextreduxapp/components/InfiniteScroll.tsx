"use-client";
import axios from "axios";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  concatinatedSnips,
  snipsAsync,
  snipsData,
} from "../src/features/snips/snipsSlice";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import SingleSnips from "./SingleSnips";
type InfiniteScrollType = {
  url: string;
  children?: React.ReactNode;
};

const InfiniteScrollComp: React.FC<InfiniteScrollType> = ({
  url,
  children,
}) => {
  const { loading, totalPages, bookmarks } = useAppSelector(snipsData);
  const dispatch = useAppDispatch();
  const [items, setItems] = React.useState([...bookmarks]);
  const [hasMore, setHasMore] = React.useState(true);

  React.useEffect(() => {
    dispatch(snipsAsync());
    setItems([...bookmarks]);
  }, []);

  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const fetchMoreData = () => {
    if (1 >= totalPages) {
      setHasMore(false);
      return;
    }
    axios
      .get(`${url}?page=${page}&limit=${limit}`, {
        headers: {
          "Cache-Control": "force-cache",
        },
      })
      .then((res) => {
        setItems(items.concat(res.data.bookmarks));
        dispatch(concatinatedSnips(res.data.bookmarks));
        console.log(res.data, "res.data");
        setPage(page + 1);
        setLimit(limit + 20);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {console.log(items, "items from return")}
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {bookmarks?.map((i, index) => {
          return <SingleSnips key={index} {...i} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrollComp;
