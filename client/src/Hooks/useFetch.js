import { useEffect } from "react";

export const useFetch = (url, setData) => {
 useEffect(() => {
  const fetchData = async () => {
   const data = await fetch(url);
   const json = await data.json();
   if (typeof setData === "function" && json.data) {
    setData(Object.values(json.data));
   } else {
    return setData(json);
   }
  };

  fetchData()
   // make sure to catch any error
   .catch((error) => console.log(error));
 }, [url]);
};
