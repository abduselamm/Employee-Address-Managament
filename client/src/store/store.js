import { configureStore } from "@reduxjs/toolkit";
import { employeesReducers } from "./employeeSlice";

export const store = configureStore({
  reducer: {
    employeesReducers,
  },
});
