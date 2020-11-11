import React, { useState } from "react";
import CustomAppBar from "./components/CustomAppBar";
import CustomFloatingActionButton from "./components/CustomFloatingActionButton";
import RenderEmployeeList from "./utils/RenderEmployeeList";
import AddEmployeeModel from "./components/AddEmployeeModel";

const App = () => {
  const [empData, setEmpData] = useState([]);
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <CustomAppBar />
      <RenderEmployeeList employeeData={empData} setEmployeeData={setEmpData} />
      <CustomFloatingActionButton setShowModel={setShowModel} />
      <AddEmployeeModel
        setEmpData={setEmpData}
        showModel={showModel}
        setShowModel={setShowModel}
        empData={empData}
      />
    </div>
  );
};

export default App;
