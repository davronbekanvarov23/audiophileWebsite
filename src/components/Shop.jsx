import { Link } from "react-router-dom";
const shoping = [
  {
    img: "/image-category-thumbnail-headphones.png",
    name: "headphones",
  },
  {
    img: "/image-category-thumbnail-speakers.png",
    name: "speakers",
  },
  {
    img: "/image-category-thumbnail-earphones.png",
    name: "earphones",
  },
];
function Shop() {
 
  return (
    <div className=" align-content grid gap-[1.6rem] pt-[4rem] pb-[12rem] md:grid-flow-col md:grid-cols-3 md:gap-[1rem] md:py-[9.8rem] lg:gap-[3rem] lg:pt-[12rem] lg:pb-[16.8rem] md:mb-[2.2rem] lg:mb-0">
      {shoping.map((product, index) => {
        return (
          <>
            <Link key={index} to= {`/${product.name}`}>
              <div className="group relative z-[0] grid  justify-items-center">
                <img src={`/assets/shared/desktop${product.img}`} alt="" />
                <h5 className=" uppercase mb-6 font-bold">{product.name}</h5>
                <span className="flex items-center gap-[1.2rem]">
                  <Link
                    to={`/${product.name}`}
                    className="text-xs tracking-widest hover:orange uppercase"
                  >
                    Shop <span className="text-[#D87D4A]">&gt;</span>
                  </Link>
                </span>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Shop;
