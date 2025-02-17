import React, { useEffect, useState } from 'react'

const Child = ({title}) => {
    const [counter , setCounter] = useState(0);
    function counters(){
        setCounter(counter+1)
    }
    useEffect(() => {
        console.log(counter)
      });
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="h-[400px] w-[500px] bg-white shadow-2xl rounded-2xl flex flex-col items-center justify-center p-6 mx-5">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6">Current Count: <span className="font-bold text-blue-600">{counter}</span></p>
        <button 
          onClick={counters} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300">
          Increase
        </button>
      </div>
    </div>
  )
}

export default Child
