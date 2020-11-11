import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const AddEmployeeForm = ({ setEmpData, empData, setShowModel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let temp = [...empData];
    temp.push({ name, email, phone, address });
    setEmpData(temp);
    setShowModel(false);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <h5>Add new Employee</h5>
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
