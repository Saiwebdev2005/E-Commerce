// pages/index.js
"use client"
import axios from 'axios';

export default function Home() {
  const handleClick = async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
    };

    try {
      const res = await axios.post('http://localhost:3000/api/order', userData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center bg-c2 h-screen'>
      <button className='button' onClick={handleClick}>Create User</button>
    </div>
  );
}
