import React from "react";

function Item({toy}) {
    return (
        <div>
            <img src={toy.image} alt="picture" width="300px"/>
        </div>
    )
}

export default Item;