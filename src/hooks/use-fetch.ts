import { useState, useEffect } from "react";

export const useFetch = (url, initialSkip = 0, category=null ) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(initialSkip);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(!category ? `${url}?limit=10&skip=${skip}`: `${url}/${category}`);
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
  }, [skip, url, category]);

  const refetch = () => {
    setSkip(skip + 10);
  };

  const undofetch = () => {
    setSkip(skip - 10);
  };
  return { data, isPending, error, refetch, undofetch };
};
