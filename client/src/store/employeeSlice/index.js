import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employeeSlice",
  initialState,
  reducers: {
    getEmployees: (state, action) => {
      state.employees = action.payload;
    },
    createEmployee: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      state.employees.map((employee) =>
        employee._id === action.payload ? action.payload : employee
      );
    },
  },
});

export const employeesActions = employeeSlice.actions;
export const employeesReducers = employeeSlice.reducer;
