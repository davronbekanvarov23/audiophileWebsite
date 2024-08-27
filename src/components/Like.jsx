import { Link, useLoaderData } from "react-router-dom";

function Like() {
  const { product } = useLoaderData();
  return (
    <div className="align-content mb-[8rem] md:mb-[2.2rem] lg:mb-[4rem]">
      <h2 className=" uppercase text-3xl  mb-[4rem] font-bold text-center md:mb-[5.6rem] lg:mb-[6.4rem]">
        you may also like
      </h2>
      <div className="flex flex-col gap-[5.6rem] md:flex-row md:gap-[1.1rem] lg:gap-[3rem]">
        {product.map((prod, id) => {
          return prod.others.map((item, id) => {
            return (
              <div className="w-full">
                <div className="group relative overflow-hidden mb-[3.2rem] h-[12rem] rounded bg-light200 md:h-[20rem] md:mb-[4rem]">
                  <picture>
                    <source
                      media="(min-width:1024px )"
                      srcSet={`.${item.image.desktop}`}
                    />
                    <source
                      media="(min-width:728px )"
                      srcSet={`.${item.image.tablet}`}
                    />
                    <img src={`.${item.image.mobile}`} alt="rasm" />
                  </picture>
                </div>
                <div className="grid justify-items-center">
                  <h5 class="h5 mb-[3.2rem] text-center font-bold text-xl uppercase">
                    {item.name}
                  </h5>
                  <Link
                    to={`/products/${item.slug}`}
                    className="btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Like;
