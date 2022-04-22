import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex bg-stone-100 justify-between w-screen px-12 py-6 h-[15vh]">
      <div className="flex w-[20%] justify-start items-center">
        <Link href="/" passHref>
          <a>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6rem"
      height="2.4rem"
      fill="none"
      viewBox="0 0 750 300"
    >
      <path fill="#44403C" d="M0 150H150V300H0z"></path>
      <path fill="#44403C" d="M600 150H750V300H600z"></path>
      <path fill="#44403C" d="M450 0H600V150H450z"></path>
      <path fill="#44403C" d="M300 150H450V300H300z"></path>
      <path fill="#44403C" d="M150 0H300V150H150z"></path>
    </svg>
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <a className="text-stone-700 font-hauora font-medium hover-underline transition-all text-xl">
            Home
          </a>
        </Link>
        <Link href="/megasecond">
          <a className="text-stone-700 font-hauora font-medium hover-underline transition-all text-xl ml-12">
            This Megasecond
          </a>
        </Link>
        <Link href="/">
          <a className="text-stone-700 font-hauora font-medium hover-underline transition-all text-xl ml-12">
            Matrix
          </a>
        </Link>
        <Link href="/about">
          <a className="text-stone-700 font-hauora font-medium hover-underline transition-all text-xl ml-12">
            About
          </a>
        </Link>
      </div>
      <div className="flex w-[20%] justify-end items-center">
        <button className="text-stone-100 font-hauora font-medium text-xl bg-stone-700 hover:bg-stone-600 hover:drop-shadow-md transition-all px-3 h-min py-2">
          Connect
        </button>
      </div>
    </nav>
  )
}

export default Navbar
