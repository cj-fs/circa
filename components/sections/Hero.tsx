import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="mx-[10vw] pt-12">
        <div className="flex flex-col items-center w-min">
          <h1 className="font-hauora text-7xl font-bold text-center text-stone-700 mb-4 w-max">
            Pixel by Pixel.{"\n"}A Masterpiece.
          </h1>
          <p className="font-hauora text-xl font-regular text-center text-stone-700 mb-4 w-full">
            Every megasecond, a new matrix materializes. A new palette, a fresh
            start. Up to 100,000 members can participate. Memberships are
            available on any Polygon compatible marketplace for just 0.001 Ξ.
          </p>
          <div className="flex justify-center w-full">
            <button className="text-stone-100 font-hauora font-medium text-xl bg-stone-700 hover:bg-stone-600 hover:drop-shadow-md transition-all px-3 h-min py-2 mr-6">
              View the Matrix
            </button>
            <Link href={'https://rarible.com/megasecondmember/items'} passHref>
              <a target={'_blank'}>
                <button className="text-stone-100 font-hauora font-medium text-xl bg-stone-700 hover:bg-stone-600 hover:drop-shadow-md transition-all px-3 h-min py-2">
                  Buy a Membership
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <button className="text-stone-50 font-hauora font-medium text-xl bg-stone-400 hover:bg-stone-400 transition-all cursor-not-allowed px-3 h-min py-2">
                Buy a Membership
              </button> */
}
export default Hero
