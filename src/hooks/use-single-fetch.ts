"use client"
import { useState, useEffect } from "react";
export const useSingleFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        // setError({error});
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};
