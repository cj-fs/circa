import Countdown from 'react-countdown'
const Count = () => {
  const Completionist = () => (
    <span className="flex text-stone-700 font-hauora text-4xl font-bold self-end mr-[10vw] pl-10">
      Oops! This megasecond has passed!
    </span>
  )
  const renderer = (cd: {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (cd.completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <div className="flex flex-col self-end mr-[10vw] pl-10">
          <h2 className="text-stone-500 font-hauora text-xl font-bold mb-2">
            Time Left in this Megasecond
          </h2>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-2">
            <div className="col-span-1 row-span-1 text-stone-700 font-hauora text-5xl font-bold">
              {cd.days}
            </div>
            <div className="col-span-1 row-span-1 text-stone-700 font-hauora text-5xl font-bold">
              {cd.hours}
            </div>
            <div className="col-span-1 row-span-1 text-stone-700 font-hauora text-5xl font-bold">
              {cd.minutes}
            </div>
            <div className="col-span-1 row-span-1 text-stone-700 font-hauora text-5xl font-bold w-min">
              {cd.seconds}
            </div>
            <div className="col-span-1 row-span-1 text-stone-500 font-hauora text-xl font-bold">
              Days
            </div>
            <div className="col-span-1 row-span-1 text-stone-500 font-hauora text-xl font-bold">
              Hours
            </div>
            <div className="col-span-1 row-span-1 text-stone-500 font-hauora text-xl font-bold">
              Minutes
            </div>
            <div className="col-span-1 row-span-1 text-stone-500 font-hauora text-xl font-bold w-min">
              Seconds
            </div>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      <Countdown date={'2022-04-26T22:17:29'} renderer={renderer} />
    </>
  )
}

export default Count
