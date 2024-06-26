import { IProduct } from "@/app/types/product";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { title, price, image } = product;

  return (
    <a href="#" className="group">
      <div className="aspect-square w-full overflow-hidden rounded-l xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </a>
  );
};

export default ProductCard;
