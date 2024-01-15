"use client"
import React, { useState } from 'react'

const Homepage = ({data}) => {
  return (
    <ul>
        {data?.map((item, index) => (
            <li key={index}>{item.title}</li>
        ))}
    </ul>
  )
}

export default Homepage