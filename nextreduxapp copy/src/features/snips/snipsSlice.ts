import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../store";
import { getLocalStorage } from "../../utils";
import { getSnips, likeHandler } from "./snipsAPI";
export type SingleSnipsType = {
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
export type SnipsType = {
  totalPages: number;
  bookmarks: SingleSnipsType[];
  loading: boolean;
  singleBookmark: SingleSnipsType;
};

export type Action = {
  type: string;
  payload: any;
};

const initialState: SnipsType = {
  totalPages: 0,
  bookmarks: [],
  loading: false,
  singleBookmark: {
    _id: "",
    userId: "",
    title: "",
    url: "",
    description: "",
    tags: [],
    isPrivate: false,
    likesList: [],
    code: "",
    language: "",
    isError: false,
    createdAt: "",
    updatedAt: "",
  },
};

export const snipsAsync = createAsyncThunk("counter/fetchCount", async () => {
  const response = await getSnips();
  console.log(response, " response froom snipsAsync");
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const likeAsync = createAsyncThunk("snips/like", async (id: string) => {
  const token = getLocalStorage("token");
  const response = await likeHandler(id, token);
  return { response, id, token };
});

export const snipsSlice = createSlice({
  name: "snips",
  initialState,
  reducers: {
    setSingleBookmark: (state, action) => {
      state.singleBookmark = action.payload;
    },
    likeSnips: (state, action) => {
      const { snipId, userId } = action.payload;
      const snip = state.bookmarks.find((snip) => snip._id === snipId);
      if (snip) {
        if (snip.likesList.includes(userId)) {
          snip.likesList = snip.likesList.filter((id) => id !== userId);
        } else {
          snip.likesList.push(userId);
        }
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(snipsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(snipsAsync.fulfilled, (state, action: Action) => {
        state.loading = false;
        console.log(action, " action from snipsSlice");
        state.bookmarks = action.payload.bookmarks;
        state.totalPages = action.payload.totalPages;
      });
    builder
      .addCase(likeAsync.pending, (state) => {
        // state.loading = true;
      })
      .addCase(likeAsync.fulfilled, (state, action) => {
        const { response, id, token } = action.payload;
        response.like
          ? (state.bookmarks = increaseLike(state.bookmarks, id, token))
          : null;
      });
  },
});

export const { setSingleBookmark, likeSnips } = snipsSlice.actions;

export const snipsData = (state: AppState) => state.snipsData;
export default snipsSlice.reducer;

// Function for like particular snip
function increaseLike(bookmarks, snipId, userId) {
  const snip = bookmarks.find((snip) => snip._id === snipId);
  if (snip) {
    if (snip.likesList.includes(userId)) {
      snip.likesList = snip.likesList.filter((id) => id !== userId);
    } else {
      snip.likesList.push(userId);
    }
  }
  return bookmarks;
}
