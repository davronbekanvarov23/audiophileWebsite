import { useLoaderData } from "react-router-dom";

function Features() {
  const { product } = useLoaderData();

  console.log(product);
  return product.map((audioP) => {
    let { id, features, includes } = audioP;
    return (
      <div key={id} className="my-10 flex items-start justify-between align-content ">
        <div className="w-[650px] flex flex-col gap-5">
          <h5 className="text-2xl font-bold text-black">FEATURES</h5>
          <p className=" opacity-70">{features.slice(0, 300)}</p>
          <p className=" opacity-70">{features.slice(300, 700)}</p>
        </div>
        <div>
          <h5 className=" uppercase mb-10 text-2xl font-bold">in the box</h5>
          <ul className="flex flex-col gap-4">
            {includes.map((cart, id) => {
              return (
                <li key={id} className="flex gap-5 ">
                  <span className=" text-orange-600">{cart.quantity}x</span>{" "}
                  <span className=" opacity-70">{cart.item}</span>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
}

export default Features;
