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
      <h1>Add Creature</h1>
      <div className="info-box">
      <p>Use the form below to add a creature to the database.</p>
      <p>Name and image are required, and note is optional.</p>
      <p>Image URL must be .jpg, .jpeg, .png, .gif, or .webp to be accepted. Thanks!</p>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddNew;