import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const CustomFloatingActionButton = ({ setShowModel }) => {
  const classes = useStyles();
  const onClickHandler = () => {
    setShowModel(true);
  };
  return (
    <div>
      <Fab
        onClick={onClickHandler}
        className={classes.root}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));

export default CustomFloatingActionButton;
