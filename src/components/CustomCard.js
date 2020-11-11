import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Grid, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import UpdateEmployeeModel from "./UpdateEmployeeModel";

const CustomCard = ({ index, employeeData, setEmployeeData, empData }) => {
  const [showModel, setShowModel] = useState(false);
  const onDeleteHandler = () => {
    let temp = [...empData];
    temp.splice(index, 1);
    setEmployeeData(temp);
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <UpdateEmployeeModel
        index={index}
        showModel={showModel}
        setEmpData={setEmployeeData}
        empData={empData}
        setShowModel={setShowModel}
      />
      <CardContent>
        <Grid container alignItems={"center"} justify={"space-between"}>
          <Grid xs={8} justify={"flex-start"} container item>
            <Grid item xs={1}>
              <Typography>{index + 1}</Typography>
            </Grid>
            <Grid item xs={11}>
              {employeeData.name}
            </Grid>
          </Grid>

          <Grid container xs={4} justify={"flex-end"} item>
            <Grid item>
              <IconButton
                onClick={onDeleteHandler}
                color="primary"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => setShowModel(true)}
                color="primary"
                size="small"
              >
                <CreateIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: 25,
  },
});

export default CustomCard;
