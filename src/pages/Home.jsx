import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

import { MainFooter, Shop } from "../components";
//images
import heroD from "../../public/assets/home/desktop/image-hero.jpg";
import heroT from "../../public/assets/home/tablet/image-header.jpg";
import heroM from "../../public/assets/home/mobile/image-header.jpg";

import Zx9D from "../../public/assets/home/desktop/image-speaker-zx9.png";
import Zx9T from "../../public/assets/home/tablet/image-speaker-zx9.png";
import Zx9M from "../../public/assets/home/mobile/image-speaker-zx9.png";

const url = "/users";
export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data;
// console.log(products);
  return { products };
};

function Home() {
  const { products } = useLoaderData();
  const found = products.find(
    ({ slug }) => slug === "xx99-mark-two-headphones"
  );
  const foundzx9 = products.find(({ slug }) => slug === "zx9-speaker");
  const foundzx7 = products.find(({ slug }) => slug === "zx7-speaker");
  const foundyx1 = products.find(({ slug }) => slug === "yx1-earphones");

  return (
    <>
      <section className=" relative z-0 h-[40rem] overflow-hidden bg-black md:h-[45rem]">
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroD} />
          <source media="(min-width: 768px)" srcSet={heroT} />
          <img
            src={heroM}
            alt=""
            className="absolute z-[-1] h-full w-full object-cover opacity-50 lg:opacity-100"
          />
        </picture>
        <div className=" align-content grid justify-items-center lg:justify-items-start ">
          <div className="grid max-w-[39.7rem] justify-items-center pt-[5rem] md:pt-[20rem] lg:justify-items-start lg:pt-[10rem]">
            <p className="  pb-[1.6rem ] text-white/50   md:pb-[2.4rem] uppercase tracking-widest">
              new products
            </p>
            <h2 className=" text-6xl pb-[2.4rem] text-center text-white lg:text-left">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="max-w-[25rem] pb-[2.8rem] text-center text-base text-white/75 md:px-[1.5rem] md:pb-[4rem] lg:px-0 lg:text-left">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              className="btn  h-12 rounded-none border-none bg-[#D87D4A] font-bold text-white uppercase tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
              to={`/products/${found.slug}`}
            >
              See product
            </Link>
          </div>
        </div>
      </section>
      <Shop />
      <section className=" mb-12 align-content group grid justify-items-center gap-[3.2rem] rounded bg-orange-500 px-[2.4rem] py-[5.5rem] md:gap-[6.4rem] md:pt-[5.2rem] md:pb-[6.4rem] lg:h-[560px]] lg:grid-flow-col lg:grid-cols-2 lg:items-end lg:gap-0 lg:overflow-hidden lg:p-0">
        <picture className="lg:mr-[2.7rem] lg:justify-self-end">
          <source media="(1024px)" srcSet={Zx9D} />
          <source media="(728px)" srcSet={Zx9T} />
          <img
            src={Zx9M}
            alt=""
            className="w-[17rem] duration-200   md:w-[10rem] lg:w-[25rem] lg:translate-y-[1.8rem] ml-40"
          />
        </picture>
        <div className=" p-20 grid justify-items-center gap-[2.4rem] md:max-w-[34.9rem] lg:ml-[2.1rem] lg:justify-items-start lg:pb-[12.4rem]">
          <h2 className=" text-3xl text-center text-white lg:text-left">
            ZX9 SPEAKER
          </h2>
          <p className="text-center text-base text-white lg:text-left w">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            to={`/products/${foundzx9.slug}`}
            className="btn md:mt-[1.6rem] w-40 rounded-none border-none bg-black text-white uppercase "
          >
            See Product
          </Link>
        </div>
      </section>

      <section className=" bg-[url(../../public/assets/home/desktop/image-speaker-zx7.jpg)] bg-cover bg-right mb-12 align-content group grid justify-items-center gap-[3.2rem] rounded px-[2.4rem] py-[5.5rem] md:gap-[6.4rem] md:pt-[5.2rem] md:pb-[6.4rem] lg:h-[560px]] lg:grid-flow-col lg:grid-cols-2 lg:items-end lg:gap-0 lg:overflow-hidden lg:p-0">
        <div className="  p-20 grid justify-items-center gap-[2.4rem] md:max-w-[34.9rem]  lg:justify-items-start lg:pb-[12.4rem]">
          <h2 className=" text-2xl text-black">ZX7 SPEAKER</h2>

          <Link
            to={`/products/${foundzx7.slug}`}
            className="btn btn-ghost md:mt-[1.6rem ] mt-1 w-40 rounded-none border-black uppercase text-black hover:bg-black hover:text-white "
          >
            See Product
          </Link>
        </div>
      </section>

      <section className="align-content grid gap-[2.4rem] md:h-[24rem] md:grid-flow-col md:grid-cols-2 md:items-center md:gap-[1.1rem] lg:gap-[3.2rem] ">
        <div className="group  overflow-hidden w-full h-[20rem] rounded md:h-full">
          <picture>
            <source
              media="(min-width:1024px )"
              srcSet="../../public/assets/home/desktop/image-earphones-yx1.jpg"
            />
            <source
              media="(min-width:728px )"
              srcSet="../../public/assets/home/tablet/image-earphones-yx1.jpg"
            />
            <img
              src="../../public/assets/home/mobile/image-earphones-yx1.jpg"
              alt=""
            />
          </picture>
        </div>
        <div className="  grid  content-center gap-[3.2rem] rounded bg-light200   md:px-[4.1rem]">
          <h2 className=" text-2xl text-black uppercase">yx1-earphones</h2>

          <Link
            to={`/products/${foundyx1.slug}`}
            className="btn md:mt-[1.6rem ] mt-1 w-40 rounded-none  border-black uppercase text-black hover:bg-black hover:text-white  "
          >
            See Product
          </Link>
        </div>
      </section>
      <MainFooter />
    </>
  );
}

export default Home;
