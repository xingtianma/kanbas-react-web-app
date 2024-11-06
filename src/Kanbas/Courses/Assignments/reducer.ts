import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const modulesSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newModule: any = {
        _id: new Date().getTime().toString(),
        title : assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        name: assignment.name,
      };
      state.assignments = [...state.assignments, newModule] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: module }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment} =
  modulesSlice.actions;
export default modulesSlice.reducer;
