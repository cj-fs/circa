import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Megasecond | For the Masses</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  )
}

export default Home
