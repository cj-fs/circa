import Link from 'next/link'
const Palette = () => {
  return (
    <div className="mx-[10vw]">
      <h2 className='font-hauora text-2xl font-semibold text-stone-500 mb-2'>
        Palette of the Megasecond
      </h2>
      <div className="grid grid-cols-8 grid-rows-2 h-[20vw] w-[80vw]">
        <div className="flex col-span-1 row-span-1 bg-[#1a1c2c] text-[#1a1c2c] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #1a1c2c
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#5d275d] text-[#5d275d] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #5d275d
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#b13e53] text-[#b13e53] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #b13e53
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#ef7d57] text-[#ef7d57] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #ef7d57
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#ffcd75] text-[#ffcd75] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #ffcd75
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#a7f070] text-[#a7f070] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #a7f070
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#38b764] text-[#38b764] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #38b764
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#257179] text-[#257179] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #257179
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#29366f] text-[#29366f] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #29366f
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#3b5dc9] text-[#3b5dc9] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #3b5dc9
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#41a6f6] text-[#41a6f6] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #41a6f6
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#73eff7] text-[#73eff7] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #73eff7
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#f4f4f4] text-[#f4f4f4] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #f4f4f4
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#94b0c2] text-[#94b0c2] hover:text-black font-hauora transition-all duration-200 justify-center items-center">
          #94b0c2
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#566c86] text-[#566c86] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #566c86
        </div>
        <div className="flex col-span-1 row-span-1 bg-[#333c57] text-[#333c57] hover:text-white font-hauora transition-all duration-200 justify-center items-center">
          #333c57
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p className="font-hauora text-xl font-medium text-stone-700">
          <Link href="https://lospec.com/palette-list/sweetie-16" passHref>
            <a className="font-semibold">Sweetie 16</a>
          </Link>{' '}
          by{' '}
          <Link href="https://grafxkid.tumblr.com/palettes" passHref>
            <a className="underline underline-offset-1">GrafxKid</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Palette
