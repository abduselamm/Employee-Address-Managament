import React from "react";
import { Grid } from "@material-ui/core";
import { Employees } from "../employees/Employees.jsx";
import { Grow, Container } from "@mui/material";
import { useState } from "react";
import Form from "../form/Form";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Employees setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
