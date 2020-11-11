import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const UpdateEmployeeForm = ({ setEmpData, empData, setShowModel, index }) => {
  const [name, setName] = useState(empData[index].name);
  const [email, setEmail] = useState(empData[index].email);
  const [phone, setPhone] = useState(empData[index].phone);
  const [address, setAddress] = useState(empData[index].address);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let temp = [...empData];
    temp[index] = { name, email, phone, address };
    setEmpData(temp);
    setShowModel(false);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <h5>Update Details</h5>
        </label>
        <TextField
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin={"normal"}
          fullWidth
          label={"Name"}
          variant={"outlined"}
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin={"normal"}
          fullWidth
          label={"Email Address"}
          variant={"outlined"}
        />
        <TextField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          margin={"normal"}
          fullWidth
          label={"Phone Number"}
          variant={"outlined"}
        />
        <TextField
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          margin={"normal"}
          fullWidth
          label={"Address"}
          variant={"outlined"}
        />
        <Button
          color={"primary"}
          type={"submit"}
          variant={"contained"}
          fullWidth
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
