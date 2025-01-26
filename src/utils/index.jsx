import axios from "axios";
const productsUrl = "https://6793a3f65eae7e5c4d8f6585.mockapi.io/products";

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
