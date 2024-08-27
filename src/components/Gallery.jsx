import { useLoaderData } from "react-router-dom";
function Gallery() {
  const { product } = useLoaderData();

  return (
    <div>
      {product.map((item, id) => {
        return (
          <div
            key={id}
            className="align-content mb-[12rem] grid gap-[2rem] md:grid-flow-col md:grid-cols-[auto_0.6fr] md:grid-rows-2 md:gap-[1.8rem] lg:mb-[16rem]"
          >
            <div className="group relative overflow-hidden h-[10rem] lg:h-[18rem] bg-light200 rounded">
              <picture>
                <source
                  media="1024px"
                  srcSet={`.${item.gallery.first.desktop}`}
                />
                <source
                  media="768px"
                  srcSet={`.${item.gallery.first.tablet}`}
                />
                <img
                  src={`.${item.gallery.first.mobile}`}
                  alt="rasm"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover duration-300 ease-in-out group-hover:scale-[105%] w-full h-full"
                />
              </picture>
            </div>

            <div className="group relative overflow-hidden h-[17.4rem] lg:h-[18rem] bg-light200 rounded">
              <picture>
                <source
                  media="1024px"
                  srcSet={`.${item.gallery.second.desktop}`}
                />
                <source
                  media="768px"
                  srcSet={`.${item.gallery.second.tablet}`}
                />
                <img
                  src={`.${item.gallery.second.mobile}`}
                  alt="rasm"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover duration-300 ease-in-out group-hover:scale-[105%] w-full h-full"
                />
              </picture>
            </div>

            <div className="group relative overflow-hidden h-[36.8rem] md:row-span-2 md:h-full bg-light200 rounded">
              <picture>
                <source
                  media="1024px"
                  srcSet={`.${item.gallery.third.tablet}`}
                />
                <source media="768px" srcSet={`.${item.gallery.third.mobile}`} />
                <img
                  src={`.${item.gallery.third.desktop}`}
                  alt="rasm"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover duration-300 ease-in-out group-hover:scale-[105%] w-full h-full"
                />
              </picture>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
