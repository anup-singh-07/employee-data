import React from "react";
import CustomCard from "../components/CustomCard";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const RenderEmployeeList = ({ employeeData, setEmployeeData }) => {
  const classes = useStyles();
  return (
    <div>
      {employeeData.length > 0 ? (
        employeeData.map((empData, index) => (
          <Grid container>
            <Grid md={2} item />
            <Grid xs md={8} item>
              <CustomCard
                setEmployeeData={setEmployeeData}
                empData={employeeData}
                employeeData={empData}
                index={index}
              />
            </Grid>
            <Grid md={2} item />
          </Grid>
        ))
      ) : (
        <Typography className={classes.emptyText} align={"center"}>
          Add a new employee by clicking on the button present in the bottom
          right corner
        </Typography>
      )}
    </div>
  );
};

const useStyles = makeStyles({
  emptyText: {
    marginTop: 50,
  },
});

export default RenderEmployeeList;
