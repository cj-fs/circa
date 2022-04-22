import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Back from '../components/Back'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Back />
      <Head>
        <title>Megasecond | For the Masses</title>
      </Head>
      <Navbar />
      <Hero />
      <h5 className='text-stone-700 font-hauora text-xl font-regular absolute bottom-6 right-9 select-none'>Move your Mouse for a Colorful Surprise!</h5>
    </div>
  )
}

export default Home
