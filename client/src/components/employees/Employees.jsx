import React,{useEffect} from "react";
import * as api from "../../api";
import { useDispatch, useSelector } from "react-redux";
import Employee from "./employee/Employee";
import { employeesActions } from "../../store/employeeSlice";
import { Grid } from "@material-ui/core";
import useStyles from './styles';

export const Employees = ({setCurrentId}) => {
  const {getEmployees }  =employeesActions
  const dispatch = useDispatch();
  const classes =useStyles();

  const employees  = useSelector(state => state.employeesReducers.employees)

  const handleFetch = async () => {
    const employees = await api.fetchEmployees();
    dispatch(getEmployees(employees))
  };
  
  useEffect(() => {
    handleFetch();
  }, []);



  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    {employees.map((employee) => (
      <Grid key={employee._id} item xs={12} sm={6} md={6}>
        <Employee employee={employee} setCurrentId={setCurrentId} />
      </Grid>
    ))}
  </Grid>
  );
};


export default Employees;