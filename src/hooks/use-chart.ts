import { fetchData, groupByCategory } from "@/lib/data";
import { useEffect, useState } from "react";

const useChart = () => {
  const [graphData, setGraphData] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const rawData = await fetchData();
        if (!rawData) {
          return;
        }
        const categoryCounts = groupByCategory(rawData);
        const result = [];
        for (const category in categoryCounts) {
          result.push({
            category,
            productCount: categoryCounts[category],
          });
        }
        setIsPending(false);
        setGraphData(result);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err);
      }
    };

    getData();
  }, []);

  return { graphData,isPending, error };
};

export default useChart;
