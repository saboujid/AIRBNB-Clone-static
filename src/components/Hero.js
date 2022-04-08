import React from 'react'
import banner from '../img/banner.png'

export default function Navbar() {
  return (
    <div className="hero">
        <img src={banner} alt="" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
