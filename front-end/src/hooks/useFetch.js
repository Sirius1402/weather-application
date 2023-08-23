import { useState, useEffect } from "react";

export const useFetch = async (uri) => {
  const [data, setData] = useState();
  // const [error, setError] = useState()

  if (!uri) return;
  const res = await fetch(uri);
  if (res.status === 200) {
    const data = await res.json();
    setData(data);
  } else {
    alert("Wrong request");
  }
  return {
    data,
  };
};
