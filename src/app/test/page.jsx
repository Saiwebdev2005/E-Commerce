import { notFound } from 'next/navigation'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/clothes',{cache:"no-store"})
  if(!res.ok) return notFound();
  return res.json();
}

const page = async() => {
  const data = await getData();
  console.log(data)
  return (
    <div>
      <ul>
       {data.map(data => {
        return(
          <li>{data.id}</li>
        )
       })}
      </ul>
    </div>
  )
}

export default page