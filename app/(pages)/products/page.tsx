"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/product";
import ProductCard from "@/app/components/product-card/product-card";

const page = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  if (!products) return <div className="text-3xl text-center mt-5">Loading...</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
