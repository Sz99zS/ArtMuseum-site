import HeaderHome from '@/Components/HeaderHome/HeaderHome'
import Footer from '@/Components/Footer/Footer'
import Info from '@/views/main/Info/Info'
import React from 'react'


const page = () => {
  return (
    <div className='PageWrapper'>
      <HeaderHome />
      <Info />
      <Footer />
    </div>
  )
}

export default page