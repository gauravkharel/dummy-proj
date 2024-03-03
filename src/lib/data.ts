const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching error:", error);
  }
};

function groupByCategory(data) {
  const categoryCounts = {};
  data.products.forEach((product) => {
    const category = product.category;
    if (categoryCounts[category]) {
      categoryCounts[category] += 1;
    } else {
      categoryCounts[category] = 1;
    }
  });
  return categoryCounts;
}

const graphData = async () => {
  try {
    const rawData = await fetchData();
    if (!rawData) {
      return null;
    }
    const categoryCounts = await groupByCategory(rawData);
    const result = [];
    for (const category in categoryCounts) {
      result.push({
        category,
        productCount: categoryCounts[category],
      });
    }
    return result;
  } catch (error) {
    console.error("Error", error);
    return null
  }
};

export default graphData
export {fetchData, groupByCategory}
