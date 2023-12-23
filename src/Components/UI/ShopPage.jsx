// Import necessary libraries and components
"use client";
import React, { useState, useEffect, useContext } from 'react';
import Data from '../../utils/fetchData'; // Import the data fetching function
import Card from '@/Components/UI/Card'; // Import the Card component
import { CartContext } from '@/context'; // Import the CartContext

// Define the Page component
function Page({ gender }) { // Add gender as a prop
  // Use the CartContext to get the addToCart function
  const { addToCart } = useContext(CartContext);

  // Define state variables
  const [start, setStart] = useState(0); // The index of the first item to display
  const [itemsPerPage, setItemsPerPage] = useState(8); // The number of items to display per page
  const [data, setData] = useState([]); // The data to display
  const [loading, setLoading] = useState(true); // Whether the data is currently being fetched

  // Fetch the data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data(); // Fetch the data
      setData(result); // Set the fetched data
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();

    // Update the number of items per page when the window is resized
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 640 ? 8 : 15);
    };

    window.addEventListener('resize', handleResize); // Add the event listener
    handleResize(); // Call the function to set the initial value of itemsPerPage

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define the function to go to the next page
  const handleNext = () => {
    setStart(prevStart => prevStart + itemsPerPage);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Define the function to go to the previous page
  const handlePrevious = () => {
    setStart(prevStart => Math.max(prevStart - itemsPerPage, 0));
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Filter the data based on the gender prop
  const filteredData = gender === "All" ? data : data.filter(item => item.gender === gender);

  // If the data is being loaded, display a loading spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-c2">
        <div className="animate-spin mr-3 h-10 w-10 border-t-2 border-b-2 border-c4 rounded-full"></div>
        <div>Loading...</div>
      </div>
    );
  }

  // Render the component
  return (
    <div className='w-full bg-c2 py-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-center items-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-c4  md:p-2'>{gender} New Arrivals</h1>
        </div>
        <div className=' grid grid-cols-2 gap-1 md:gap-4 md:grid-cols-3 justify-center items-center mt-16 mb-4'>
          {/* Map over the filtered data and render a Card for each item */}
          {filteredData.slice(start, start + itemsPerPage).map((item, index) => (
            <Card 
              key={index}
              image={item.image} 
              title={item.title} 
              description={item.description} 
              gender={item.gender}
              price={item.price} 
              className="w-full h-48 object-cover"
              onButtonClick={() => addToCart(item)} // Pass the addToCart function to the Card
            />
          ))}
        </div>
        <div className='flex flex-row justify-center items-center space-x-4 my-12'>
          {/* Render the Previous and Next buttons */}
          <button className='button' onClick={handlePrevious} disabled={start === 0}>Previous</button>
          {start + itemsPerPage < filteredData.length && <button className='button' onClick={handleNext}>Next</button>}
        </div>
      </div>
    </div>
  );
}

// Export the Page component
export default Page;
