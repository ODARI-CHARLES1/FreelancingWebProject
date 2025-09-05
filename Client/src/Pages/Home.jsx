import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import JobListing from '../Components/JobListing'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div className='min-h-screen w-full flex flex-col bg-gray-900'>
        <Navbar/>
        <Header/>
        <JobListing/>
        <Footer/>
    </div>
  )
}

export default Home
