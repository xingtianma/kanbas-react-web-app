import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
const initialState = {
  modules: modules,
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newModule: any = {
        _id: new Date().getTime().toString(),
        description: assignment.description,
        points: assignment.points,
        name: assignment.name,
        course: assignment.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },
    deleteAssignment: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m: any) => m._id !== moduleId);
    },
    updateAssignment: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment} =
  modulesSlice.actions;
export default modulesSlice.reducer;
