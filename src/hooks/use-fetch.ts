import { useState, useEffect } from "react";

export const useFetch = (initialSkip = 0) => {
  const [serverUrl, setServerUrl] = useState("https://dummyjson.com/products");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(initialSkip);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(`${serverUrl}?limit=10&skip=${skip}`);
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
  }, [skip]);

  const refetch = () => {
    setSkip(skip + 10);
  };

  const undofetch = () => {
    setSkip(skip - 10);
  };
  return { data, isPending, error, refetch, undofetch };
};
