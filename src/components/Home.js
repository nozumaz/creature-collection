import React, { useEffect, useState } from "react";
import Item from "./Item";

function Home() {

  const [items, setItems] = useState([]);

  //update items when an item is deleted
  function handleDeleteClick(deleteID) {
    const newList = items.filter(item => item.id !== deleteID)
    setItems(newList)
  }

  //fetch items from json server with GET request
  useEffect(() => {
    fetch("http://localhost:4000/creatures")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  //display all items in HTML
  return (
    <div>
        <h1>Mythical Creature Collection</h1>
        {items.map((item => (
          <Item key={item.id} item={item} onDeleteClick={handleDeleteClick}/>
        )))}
    </div>
  );
}

export default Home;