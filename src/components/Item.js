import React from "react";

function Item({toy}) {
    return (
        <div>
            <h2>{toy.name}</h2>
            <img src={toy.image} alt="picture" width="300px"/>
        </div>
    )
}

export default Item;