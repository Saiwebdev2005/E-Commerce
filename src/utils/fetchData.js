import { notFound } from "next/navigation";
// In your data fetching module
async function getData() {
  const res = await fetch('http://localhost:3000/api/clothes',{cache:"no-store"})
  if(!res.ok) return notFound();
  return res.json();
}

let clothNames = ["T-Shirt", "Jeans", "Jacket", "Sweater", "Shirt", "Shorts", "Skirt", "Hoodie"];

// Modify the title and description for an e-commerce store
async function Data() {
  let data = await getData();
  data = data.map((item, index) => {
    let clothName = clothNames[index % clothNames.length]; // Cycle through cloth names
    item.title = clothName;
    item.description = `This ${clothName} is a must-have for your wardrobe. It's stylish and comfortable.`;
    return item;
  });
  return data;
}
export default Data
