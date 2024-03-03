const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching error:", error);
  }
};

function groupByCategory(products) {
    const categoryCounts = {};
    for (const product of products) {
      const category = product.category;
      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++; // Increment count for existing category
      } else {
        categoryCounts[category] = 1; // Add new category with count 1
      }
    }
    return categoryCounts;
  }

async function main() {
    try{
        const products = await fetchData()
        const categoryCounts = await groupByCategory(products)
        console.log(categoryCounts)
    }catch(error){
        console.error('Error', error)
    }
}

main()
// const category = (products) => {
//     const categoryCount = {}
//     products.forEach( (product) =>  {
//         const category = product.category
//         if(categoryCount.hasOwnProperty(category)){
//             categoryCount[category]++
//         } else {
//             categoryCount[category] = 1
//         }
//     })

//     return categoryCount
//     }

// category(data)
