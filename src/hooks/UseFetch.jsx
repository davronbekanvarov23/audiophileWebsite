import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPanding] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something went wrong !");
        }
        const data = await req.json();
        setData(data);
        setIsPanding(false);
      } catch (err) {
        alert(err.message);
        setError(err.message);
        setIsPanding(false);
      }
    };

    getData();
  }, [url]);
  return { data, isPending, error };
}
export { useFetch };
