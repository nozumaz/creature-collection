import React, { useState } from "react";
import Form from "./Form";

function AddNew() {
  
  const [formData, setFormData] = useState({
    name:"",
    image:"",
    notes:"",
  })

  //send POST request to add new item to json server
  function handleSubmit() {
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
        image:"",
        notes:""
    })
  }

  //add new item when "Submit" button is clicked
  function handleChange(e) {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  //display form for adding new items
  return (
    <div className="form-container">
      <h1>AddNew2</h1>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddNew;