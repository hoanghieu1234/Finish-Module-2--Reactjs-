import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CourseNew from "../../API/CourseNew";

export const handleCallApiCourseNew = createAsyncThunk(
  "newcourse/fetchApiNewCourse",
  async () => {
    const response = await CourseNew.getCourseNew();
    return response;
  }
);
const NewCoursesSlice = createSlice({
  name: "courseNew",
  initialState: [],
  extraReducers: {
    [handleCallApiCourseNew.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { actions, reducer } = NewCoursesSlice;

export default reducer;
