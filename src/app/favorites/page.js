import HeaderHome from '@/Components/HeaderHome/HeaderHome'
import Footer from '@/Components/Footer/Footer'
import Favorites from '@/views/main/Favorites/Favorites'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeaderHome />
        <Favorites />
        <Footer />
    </div>
  )
}

export default page