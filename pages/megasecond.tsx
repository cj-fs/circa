import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Palette from '../components/Palette'
import Count from '../components/Count'
import Stats from '../components/Stats'

const Megasecond: NextPage = () => {
  return (
    <div className="flex flex-col items-start bg-stone-100 min-h-screen overflow-x-hidden">
      <Head>
        <title>Megasecond Zero</title>
      </Head>
      <Navbar />
      <div className='flex items-end justify-between mt-12 mb-6 w-screen'>
        <div>
          <h1 className="font-hauora text-6xl font-extrabold text-stone-700 ml-[10vw] mb-4">
            This Megasecond
          </h1>
          <p className="font-hauora text-xl text-stone-700 ml-[10vw] mb-4 text-left w-1/2">
            Stats are important too ... every megasecond is different.
            Here&apos;s what&apos;s going down this time.
          </p>
        </div>
        <Count />
      </div>
      <Palette />
      <Stats />
    </div>
  )
}

export default Megasecond
