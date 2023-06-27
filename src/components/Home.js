import React, { useEffect, useState } from "react";


function Home() {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((r) => r.json())
      .then((toys) => console.log(toys));
  }, []);

  return (
    <div>
        <h1>Home Page</h1>
    </div>
  );
}

export default Home;