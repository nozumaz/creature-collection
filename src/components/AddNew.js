import React, { useState } from "react";
import Form from "./Form";

function AddNew() {
  
  const [formData, setFormData] = useState({
    name:"",
    image:""
  })

  function handleSubmit() {
    console.log(formData.name);
    console.log(formData.image);

    fetch("http://localhost:4000/toys", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...formData
        })
    })
    setFormData({
        name:"",
        image:""
    })
  }

  function handleChange(e) {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  return (
    <div className="form-container">
      <h1>AddNew2</h1>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddNew;