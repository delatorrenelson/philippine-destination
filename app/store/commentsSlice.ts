import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../types";

interface CommentsState {
  items: Comment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CommentsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (articleId: string) => {
    const response = await fetch(`/api/comments?articleId=${encodeURIComponent(articleId)}`);
    const data = await response.json();
    return data.comments as Comment[];
  }
);

export const postComment = createAsyncThunk(
  "comments/postComment",
  async (payload: { articleId: string; author: string; text: string }) => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to post comment");
    }
    return data.comment as Comment;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.items = action.payload;
    },
    addCommentLocal: (state, action: PayloadAction<Comment>) => {
      state.items.unshift(action.payload);
    },
    likeCommentLocal: (state, action: PayloadAction<string>) => {
      const target = state.items.find((c) => c.id === action.payload);
      if (target) {
        target.likes += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load comments";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      });
  },
});

export const { setComments, addCommentLocal, likeCommentLocal } = commentsSlice.actions;

export default commentsSlice.reducer;
