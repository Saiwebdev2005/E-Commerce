"use client"
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '@/context';
import SearchDisplay from './SearchDisplay';
import Data from '../../utils/fetchData';

export default function SearchLogic() {
  const { addToCart } = useContext(CartContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);
  // Function to get three random items from data
  const getRandomItems = () => {
    let randomItems = [];
    for(let i = 0; i < 3; i++){
      let randomIndex = Math.floor(Math.random() * data.length);
      randomItems.push(data[randomIndex]);
    }
    return randomItems;
  }
  
  //Fetch The data
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data(); // Fetch the data
      setData(result); // Set the fetched data
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  },[]);

  // Set initial search results to three random items
  useEffect(() => {
    setSearchResults(getRandomItems());
  }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      setSearchResults(getRandomItems());
    } else {
      const results = data.filter(item =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.gender.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handlePriceRangeChange = event => {
    setPriceRange(event.target.value);
    const results = data.filter(item => {
      const price = parseInt(item.price);
      return (
        (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.gender.toLowerCase().includes(searchTerm.toLowerCase())) &&
        ((priceRange === '300-500' && price >= 300 && price <= 500) ||
        (priceRange === '600-1000' && price >= 600 && price <= 1000) ||
        priceRange === 'all')
      );
    });
    setSearchResults(results);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-c2">
        <div className="animate-spin mr-3 h-10 w-10 border-t-2 border-b-2 border-c4 rounded-full"></div>
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <SearchDisplay 
      searchTerm={searchTerm}
      handleChange={handleChange}
      handlePriceRangeChange={handlePriceRangeChange}
      priceRange={priceRange}
      searchResults={searchResults}
      addToCart={addToCart}
    />
  );
}
