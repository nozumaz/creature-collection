import React, { useState } from "react";

function Form({ formData, handleChange, handleSubmit }) {

    const [valid, setValid] = useState("")
    const [error, setError] = useState("")
    const [validImg, setValidImg] = useState("")

    function onSubmitClick(e) {
        e.preventDefault();

        if (formData.name.trim() === "" ||
            formData.image.trim() === "" ) {
            setValid(false);
            setError("Please complete both name and image fields.");
            return;
        } else if (
            !formData.image.match(/\.(jpg|jpeg|png|gif|webp)$/)
        ) {
            setValid(false);
            setError("Please enter an image URL. Accepted extensions include jpg, jpeg, png, gif, and webp.");
            return;
        } else {
            setValid(true);
            setError("");
            handleSubmit();
        }
    }

    return (
        <>
            <form className="form" onSubmit={onSubmitClick}>
                <input className="text-input" type="text" onChange={handleChange} value={formData.name} name="name" placeholder="name"></input>
                <input className="text-input" type="text" onChange={handleChange} value={formData.image} name="image" placeholder="image URL"></input>
                <input className="text-input" type="text" onChange={handleChange} value={formData.notes} name="notes" placeholder="notes"></input>
                <input className="submit" value="submit" name="submit" type="submit"/>
            </form>
            <h2 className={valid ? "success" : "error"}>{valid ? "Success!" : error}</h2>
        </>
    )
}

export default Form;