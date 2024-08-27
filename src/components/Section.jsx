import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
const url = "/users/?category=earphones";
export const loader = async () => {
  const req = await customFetch(url);
  const product = req.data;
  return { product };
};

function Section() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <>
      {product &&
        product.map((earphone, id) => {
          const { image, name, description, slug } = earphone;
          return (
            <div
              key={id}
              className=" align-content lg:flex justify-between items-center"
            >
              <img src={image.desktop} alt="" className=" w-[540px]" />

              <div className=" flex-col gap-6">
                {" "}
                <h1 className="font-bold text-3xl mb-6">{name}</h1>
                <p className=" w-[445px] mb-10">{description}</p>
                <Link
                  className="btn  h-12 rounded-none border-none bg-[#D87D4A] font-bold text-white uppercase tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
                  to={`/products/${slug}`}
                >
                  See product
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Section;
