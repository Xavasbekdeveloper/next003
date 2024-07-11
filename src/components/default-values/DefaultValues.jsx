"use client";
import { defaultCounter } from "@/lib/features/counter/counterSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("counter")));
    // dispatch(defaultWishlist(JSON.parse(localStorage.getItem("wishlist"))));
  }, []);
  return null;
};

export default DefaultValues;
