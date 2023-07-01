import React from "react";

function Item({ item, onDeleteClick }) {

    //send DELETE request to json server when Delete button is clicked
    function handleDeleteClick(id) {
        fetch(`http://localhost:4000/toys/${id}`, {
            method: "DELETE"
       })
    .then(resp => resp.json())
    .then(() => onDeleteClick(id))
    }

    //display item in HTML
    return (
        <div className="item">
            <h2>{item.name}</h2>
            <img src={item.image} alt="pic"/>
            <p>{item.notes}</p>
            <div className="button-container">
                <button className="delete" onClick={() => handleDeleteClick(item.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Item;