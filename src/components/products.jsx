import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function Products() {
  // clothes api
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold  uppercase text-center py-10 text-violet-500">
      Newest Products
      </h1>

      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:grid-cols-3  gap-5 px-20 ">
        {loading &&
          Array(5)
            .fill()
            .map((_, i) => (
              <Stack key={i} spacing={1}>
                <Skeleton variant="rounded" width={250} height={240} />
                <Skeleton variant="text" width={210} height={10} />
                <Skeleton variant="text" width={50} height={10} />
              </Stack>
            ))}

        {products.slice(1, 11).map((product) => (
          <div key={product.id} className="bg-violet-50 rounded-md ">
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-md w-full h-60 object-cover "
            />
            <h1 className="text-sm font-semibold text-black pt-2 w-full truncate ">
              {product.title}
            </h1>
            <p className="text-lg font-semibold text-violet-600">
              ${product.price}
            </p>
            <button
              className="bg-violet-500 text-white font-semibold px-4 py-[2px] rounded-md w-full"
            >
             Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
