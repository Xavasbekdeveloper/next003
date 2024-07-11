import Header from "@/components/header/Header";
import ProductWrapper from "@/components/product wrapper/ProductWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center pt-10 text-3xl font-bold">REDUX TOOLKIT</h1>
      <Link href={"/wishlist"}>wishlist</Link>
      <Header />
      <ProductWrapper />
    </div>
  );
}
