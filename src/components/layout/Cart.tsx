"use client";
import { useState } from "react";

interface AddToCartProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Create a unique cart entry for the product
    const cartItem = { ...product, quantity };
  
    // Add the new cart item without checking for an existing product
    cart.push(cartItem);
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert("Product added to cart!");
  };
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex border border-gray-300 rounded">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="px-3 text-gray-600 hover:bg-gray-200"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
          className="w-10 text-center border-l border-r border-gray-300 focus:outline-none"
        />
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-3 text-gray-600 hover:bg-gray-200"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-bordercoloryello p-1 text-white  hover:bg-yellow-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
