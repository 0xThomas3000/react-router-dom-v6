import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const BrandLink = ({ brand, ...props }: any) => {
  let [params] = useSearchParams();
  const brands = params.getAll("brand");

  const isActive = brands.includes(brand);

  if (!isActive) {
    params.append("brand", brand);
  } else {
    params = new URLSearchParams(
      Array.from(params).filter(
        ([key, value]) => key !== "brand" || value !== brand
      )
    );
  }

  return (
    <Link
      style={{ color: isActive ? "red" : "blue" }}
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  );
};

export default BrandLink;
