import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const img =
    "https://thumbs.dreamstime.com/b/space-rocket-vector-illustration-blasting-off-sky-32237994.jpg";
console.log(error);
  if (error.status == 404) {
    return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg mx-auto">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-lg text-gray-600">
            Uzr, lekin ko'rayotgan narsangiz topilmadi. Qaytib uy sahifasiga
            boramizmi?
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Uy Sahifasiga Qaytish
          </Link>
          <img src={img} className=" mt-8 w-32 mx-auto" alt="Rocket" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Oops!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Uzr, lekin ko'rayotgan narsangiz yo'qolgan ko'rinadi. Qaytib uy
          sahifasiga boramizmi?
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Uy Sahifasiga Qaytish
        </Link>
        <img src={img} className=" mt-8 w-32 mx-auto" alt="Rocket" />
      </div>
    </div>
  );
}

export default Error;
