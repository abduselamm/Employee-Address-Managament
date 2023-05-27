import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Typography,
  FormControl,
} from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import * as api from "../../api";
import { employeesActions } from "../../store/employeeSlice";

const Form = ({ currentId, setCurrentId }) => {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    Marriage: "",
    address: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const { createEmployee } = employeesActions;
  const { updateEmployee } = employeesActions;
  const employee = useSelector((state) =>
    currentId
      ? state.employeesReducers.employees.find((emp) => emp._id === currentId)
      : null
  );
  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      const employee = await api.createEmployee(employeeData);
      dispatch(createEmployee(employee));
    } else {
      console.log(currentId);
      const employee = await api.updateEmployee(currentId, employeeData);
      dispatch(updateEmployee(currentId, employee));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(createEmployee(employeeData));
  // };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"></Typography>
        <TextField
          name="firstName"
          variant="outlined"
          label="Enter first Name"
          fullWidth
          value={employeeData.firstName}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, firstName: e.target.value })
          }
        />
        <TextField
          name="lastName"
          variant="outlined"
          label="Enter last Name"
          fullWidth
          value={employeeData.lastName}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, lastName: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="Enter Email Address"
          fullWidth
          multiline
          value={employeeData.email}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, email: e.target.value })
          }
        />
        <TextField
          name="phone"
          variant="outlined"
          label="Enter phone Address"
          fullWidth
          multiline
          value={employeeData.phone}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, phone: e.target.value })
          }
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            variant="outlined"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            value={employeeData.gender}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, gender: e.target.value })
            }
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
          name="Address"
          variant="outlined"
          label="Enter your Address"
          fullWidth
          value={employeeData.address}
          onChange={(e) =>
            setEmployeeData({ ...employeeData, address: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setEmployeeData({ ...employeeData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
