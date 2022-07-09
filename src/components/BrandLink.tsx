import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const BrandLink = ({ brand, ...props }: any) => {
  const [params] = useSearchParams();
  const brands = params.getAll("brand");

  const isActive = brands.includes(brand);

  return (
    <Link
      style={{ color: isActive ? "red" : "blue" }}
      to={`/shoes?brand=${brand}`}
      {...props}
    />
  );
};

export default BrandLink;
