import React, { useState } from "react";
import Form from "./Form";

function AddNew() {
  
  const [formData, setFormData] = useState({
    name:"",
    image:""
  })

  function handleSubmit() {
    console.log("submitted");
  }

  return (
    <div className="form-container">
      <h1>AddNew2</h1>
      <Form formData={formData} handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddNew;