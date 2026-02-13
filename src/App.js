import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{display:"flex", gap:"20px", padding:"40px"}}>
      <ProductCard name="Wireless Headphones" price="129.99" inStock={true} />
      <ProductCard name="Mechanical Keyboard" price="89.99" inStock={false} />
      <ProductCard name="Smart Watch" price="199.99" inStock={true} />
    </div>
  );
}

export default App;
