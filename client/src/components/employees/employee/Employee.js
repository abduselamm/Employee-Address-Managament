import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import * as api from "../../../api";
import { employeesActions } from "../../../store/employeeSlice";

const Post = ({ employee, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { deleteEmployee } = employeesActions;
  const handleDelete = async (id) => {
    await api.deleteEmployee(id);
    dispatch(deleteEmployee(id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          employee.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={employee.firstName}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{employee.firstName}</Typography>
        <Typography variant="body2">
          {moment(employee.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(employee._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {employee.email}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {employee.address}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {employee.phone}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDelete(employee._id)}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
