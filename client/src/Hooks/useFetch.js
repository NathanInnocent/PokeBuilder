import { useEffect, useState } from "react";

export const useFetch = (url, setData) => {
 useEffect(() => {
  const fetchData = async () => {
   const data = await fetch(url);
   const json = await data.json();
   if (typeof setData === "function") {
    setData(Object.values(json.data));
   } else {
    return json;
   }
  };

  fetchData()
   // make sure to catch any error
   .catch(console.log("error"));
 }, [url]);
};
