import axios from "axios";
const productsUrl =
  "http://localhost:4000/";

export const customFetch = axios.create({
  baseURL: productsUrl,
});

// format price

export const formatPrice = (price) => {
  let dollarAmout = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(Math.trunc(price));

  return dollarAmout;
};
