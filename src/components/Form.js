import React, { useState } from "react";

function Form({ formData, handleSubmit }) {

    function onSubmitClick(e) {
        e.preventDefault();

        handleSubmit();
    }

    return (
        <>
            <form className="form" onSubmit={onSubmitClick}>
                <input className="text-input" type="text" name="name" placeholder="name"></input>
                <input className="text-input" type="text" name="image" placeholder="image URL"></input>
                <input className="submit" value="submit" name="submit" type="submit"/>
            </form>
        </>
    )
}

export default Form;