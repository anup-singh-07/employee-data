import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import UpdateEmployeeForm from "../utils/UpdateEmployeeForm";

const UpdateEmployeeModel = ({
  index,
  showModel,
  setShowModel,
  setEmpData,
  empData,
}) => {
  const classes = useStyles();
  const handleClose = () => {
    setShowModel(false);
  };
  return (
    <div>
      <Modal
        open={showModel}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h1 className={classes.body}>
          <UpdateEmployeeForm
            index={index}
            setEmpData={setEmpData}
            empData={empData}
            setShowModel={setShowModel}
          />
        </h1>
      </Modal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  body: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    minWidth: 250,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default UpdateEmployeeModel;
