import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpointUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();

    // setTimeout(() => {
    //   fetch(endpointUrl, { signal: abortCont.signal })
    //     // .then((response) => {
    //     //   if (!response.ok) {
    //     //     throw Error("could not fetch the data for the resource");
    //     //   }
    //     //   return response.json();
    //     // })
    //     .then((result) => {
    //       // var responseData = data.data;
    //       console.log("here we dey now");
    //       setData(result.data);

    //       setIsPending(false);
    //       setError(null);
    //     })
    //     .catch((error) => {
    //       if (error.name === "AbortError") {
    //         console.log("fetch aborted");
    //       } else {
    //         setIsPending(false);
    //         setError(error.message);
    //         console.log(error.message);
    //       }
    //     });
    // }, 1000);
    axios
      .get(endpointUrl)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setIsPending(false);
        setError(null);
      });
    // }, 1000);
  }, []);

  return { data, isPending, error };
};

export default useFetch;
