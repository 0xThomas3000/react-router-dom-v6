import React from "react";
import BrandLink from "../components/BrandLink";

const Shoes = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <main style={{ padding: "1rem" }}>
        <div style={{ padding: "1rem", display: "block" }}>
          <BrandLink brand="gucci">Gucci</BrandLink>
        </div>
        <div style={{ padding: "1rem", display: "block" }}>
          <BrandLink brand="nike">Nike</BrandLink>
        </div>
        <div style={{ padding: "1rem", display: "block" }}>
          <BrandLink brand="adidas">Adidas</BrandLink>
        </div>
        <div style={{ padding: "1rem", display: "block" }}>
          <BrandLink brand="bitis">Bitis</BrandLink>
        </div>
        <div style={{ padding: "1rem", display: "block" }}>
          <BrandLink brand="skechers">Skechers</BrandLink>
        </div>
      </main>
    </div>
  );
};

export default Shoes;
