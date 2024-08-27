import React from "react";
import { Shop, Header, MainFooter, HeadSection } from "../components";
function Headphones() {
  return (
    <div>
      <Header name={"Headphones"} />
      <HeadSection />
      <Shop />
      <MainFooter />
    </div>
  );
}

export default Headphones;
