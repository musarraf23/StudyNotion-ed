import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    step:1,
    course:null,
    editCourse:false,
    paymentLoading:false,
}
const courseSlice =createSlice({
    name:"course",
    initialState,
    reducers:{
        resetCourseState :(state)=>{
            state.step = 1
            state.course =null
            state.editCourse = false
        },
    },
})

export const {
    resetCourseState
} = courseSlice.actions
export default courseSlice.reducer

