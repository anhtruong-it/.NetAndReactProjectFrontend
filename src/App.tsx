import { useEffect, useState } from "react";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Re-Store</h1>
    </div>
  );
}

export default App;
