import React from "react";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Like from "../components/Like";
import Shop from "../components/Shop";
import MainFooter from "../components/MainFooter";
import { Hero } from "../components";
export const loader = async ({ params }) => {
  const req = await customFetch(`/users/?slug=${params.slug}`);
  const product = req.data;
  // console.log(product);
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <Like />
      <Shop />
      <MainFooter />
    </div>
  );
}

export default SingleProduct;
