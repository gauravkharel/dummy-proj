import { useState, useEffect } from "react";

export const useFetch = (url: any,  initialSkip = 0) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(initialSkip);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`${url}?limit=10&skip=${skip}`);
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
  }, [url, skip]);


  const refetch = () => {
    setSkip(skip + 10);
  };

  const undoFetch = () => {
    setSkip(skip - 10)
  }
  return { data, isPending, error, refetch, undoFetch };
};