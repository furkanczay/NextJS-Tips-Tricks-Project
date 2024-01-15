"use client"

import Homepage from "@/components/main/pages/Homepage"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData(){
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
      const r = await res.json();
      console.log(r);
      setData(r.data);
    }
    getData();
  }, [])
  return (
    <Homepage data={data}/>
  )
}
