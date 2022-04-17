import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex bg-stone-100 justify-between w-screen px-12 py-6">
      <div className="flex w-[20%] justify-start items-center">
        <Link href="/" passHref>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4.5rem"
              height="4.5rem"
              fill="none"
              viewBox="0 0 121 121"
            >
              <path stroke="#44403C" strokeWidth="6" d="M2 2H119V119H2z"></path>
              <path
                fill="#44403C"
                d="M27.608 85V57.48L40.984 85h3.072l13.376-27.52V85h8.128V38.92h-7.808L42.52 69.512 27.288 38.92H19.48V85h8.128zm60.438.96c9.024 0 14.465-4.288 14.465-11.392 0-5.376-3.008-8.192-10.88-10.24-8.064-2.048-9.216-2.624-9.216-4.416 0-1.984 2.111-3.136 5.311-2.944 3.264.256 5.249 1.792 5.569 4.352l8.896-1.6c-.896-6.272-6.529-10.24-14.657-10.24-8.384 0-13.76 4.224-13.76 10.88 0 5.312 3.073 8 11.52 10.176 7.489 1.984 8.32 2.432 8.32 4.48 0 2.176-1.791 3.456-4.928 3.456-3.84 0-6.464-1.92-7.168-5.184l-8.895 1.344c1.151 7.232 6.72 11.328 15.423 11.328z"
              ></path>
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
        <Link href="/">
          <a className="text-stone-700 font-hauora font-medium hover-underline transition-all text-xl ml-12">
            About
          </a>
        </Link>
      </div>
      <div className="flex w-[20%] justify-end items-center">
        <button className="text-stone-100 font-hauora font-medium text-xl bg-stone-700 transition-all px-3 h-min py-2">
          Connect
        </button>
      </div>
    </nav>
  )
}

export default Navbar
