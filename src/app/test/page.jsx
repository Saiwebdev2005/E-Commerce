"use client"
import { notFound } from 'next/navigation'

import React, { useState, useEffect } from 'react'
import Data from '../../utils/fetchData';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Data();
      setData(result)
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
       {data.map(item => {
        return(
          <div key={item.id}>
            <li>{item.id}</li>
            <img src={item.image} alt={item.title} />
          </div>
        )
       })}
      </ul>
    </div>
  )
}

export default Page;
