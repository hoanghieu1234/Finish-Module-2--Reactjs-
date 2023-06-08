import {  createSlice } from "@reduxjs/toolkit";

const myCourseSlice = createSlice({
  name: "mycourse",
  initialState: JSON.parse(localStorage.getItem("my-course")) ||  [],
  reducers: {
    addToMyCourse: (state, action) => {
        // find user tương ứng
     const userIndex =  state.findIndex((course) => +course.userId === +action.payload.userId) 

     if(userIndex === -1 ) {
      state.push({
        userId: action.payload.userId,
        myCourse: [action.payload]
      })
     } else {
      state[userIndex].myCourse.push(action.payload)
     }
     localStorage.setItem("my-course", JSON.stringify(state))
     return state

    },
    removeToMyCourse: (state, action) => {
    }
  }
});

 const { reducer, actions } = myCourseSlice;
export const { addToMyCourse, removeToMyCourse} = actions
export default reducer;
