"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const WishlistWrapper = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData);
  return (
    <div>
      {wishlistData?.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <Image
              width={200}
              height={200}
              alt={product.title}
              src={product.images[0]}
            />
          </Link>
          <h3>{product.title}</h3>
          {/* {
                wishlistData.some(el => el.id === product.id) ?
            } */}
          <button>Like</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistWrapper;
