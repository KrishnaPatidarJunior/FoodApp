import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {

  // const [foodCat, setfoodCat]= useState([])
  // const [foodItem, setfoodItem]= useState([])

  // const loadData = async()=>{
  //   let response = await fetch("http://localhost:5000/api/foodData",{
  //     method:"POST",
  //     headers:{
  //       'Content-Type':'application/json'
  //     }

  //   })
  //   response = await response.json()
  //   console.log(response[0],response[1])
  // }

  // useEffect(()=>{
  //   loadData()
  // },[])
 
  return (
    <>
      <div><Navbar></Navbar></div>
      <div><Carousel></Carousel></div>
      <div><Card></Card></div>
      <div><Footer></Footer></div>
    </>
  )
}
