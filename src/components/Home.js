import React, { useEffect, useState } from "react";
import Item from "./Item";

function Home() {

  const [items, setItems] = useState([]);

  function handleDeleteClick(deleteID) {
    const newList = items.filter(item => item.id !== deleteID)
    setItems(newList)
  }

  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div>
        <h1>Home Page</h1>
        {items.map((item => (
          <Item key={item.id} item={item} onDeleteClick={handleDeleteClick}/>
        )))}
    </div>
  );
}

export default Home;