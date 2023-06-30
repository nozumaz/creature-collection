import React, { useState } from "react";

function Form() {
    return (
        <>
            <form className="form">
                <input className="text-input" type="text" name="name" placeholder="name"></input>
                <input className="text-input" type="text" name="image" placeholder="image URL"></input>
                <input className="submit" value="submit" name="submit" type="submit"/>
            </form>
        </>
    )
}

export default Form;