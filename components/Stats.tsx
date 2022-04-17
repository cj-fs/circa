const Stats = () => {
  return (
    <div className="grid w-screen mx-[10vw] mt-12 grid-cols-3">
      <div className="col-span-1 flex flex-col">
        <h3 className="text-stone-500 font-hauora text-2xl font-semibold mb-2">
          Blocks Placed
        </h3>
        <p className="text-stone-700 font-hauora text-4xl font-bold">13428</p>
      </div>
      <div className="col-span-1 flex flex-col">
        <h3 className="text-stone-500 font-hauora text-2xl font-semibold mb-2">
          Most Common Color
        </h3>
        <p className="text-stone-700 font-hauora text-4xl font-bold">#b13e53</p>
      </div>
      <div className="col-span-1 flex flex-col">
        <h3 className="text-stone-500 font-hauora text-2xl font-semibold mb-2">
          Participants
        </h3>
        <p className="text-stone-700 font-hauora text-4xl font-bold">2638</p>
      </div>
    </div>
  )
}

export default Stats
