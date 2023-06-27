import React, { useEffect, useState } from "react";
import Item from "./Item";

function Home() {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((r) => r.json())
      .then((toys) => setToys(toys));
  }, []);

  console.log(toys);

  return (
    <div>
        <h1>Home Page</h1>
        {toys.map((toy => (
          <Item key={toy.id} toy={toy}/>
        )))}
    </div>
  );
}

export default Home;