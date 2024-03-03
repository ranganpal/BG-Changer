import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-screen h-screen duration-200 flex justify-center" style={{ backgroundColor: color }}>
      <div className="absolute top-6 drop-shadow-lg bg-white flex flex-wrap justify-center rounded-3xl">
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
          red
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>
          green
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>
          blue
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>
          olive
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>
          purple
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>
          black
        </button>
        <button className="text-black px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>
          yellow
        </button>
        <button className="text-black px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>
          pink
        </button>
        <button className="text-black px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "lavender" }} onClick={() => setColor("lavender")}>
          lavender
        </button>
        <button className="text-white px-4 py-1 mx-2 my-1 rounded-2xl" style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>
          grey
        </button>
      </div>
    </div>
  )
}

export default App
