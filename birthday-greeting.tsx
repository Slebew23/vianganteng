"use client"

import { useState } from "react"
import Image from "next/image"

export default function BirthdayGreeting() {
  const [showGift, setShowGift] = useState(false)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">HALO</h2>
          <h3 className="text-3xl font-bold mb-6">Rizkya Citra Kirana</h3>
          <p className="mb-6 text-lg">Hari ini tanggal 22 maret ya? 22 maret tuh tanggal spesial kan? karena.....</p>
          <button
            className="bg-black text-white py-4 px-12 rounded-md text-2xl font-bold"
            onClick={() => setShowGift(true)}
          >
            Click
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-2">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Pointing finger emoji"
              width={50}
              height={50}
              className="mr-2"
            />
            <p className="text-lg font-medium">Because Today Its Your Birthday</p>
            <div className="flex">
              <Image src="/placeholder.svg?height=30&width=30" alt="Sparkle" width={30} height={30} />
            </div>
          </div>

          <div className="flex items-center mb-2">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Heart eyes emoji"
              width={50}
              height={50}
              className="mr-2"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">Happy Birthday</h1>
          <h2 className="text-3xl font-bold mb-6">Rizkya Citra Kirana</h2>

          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Laughing emoji"
              width={50}
              height={50}
              className="mr-4"
            />
            <Image src="/placeholder.svg?height=50&width=50" alt="Party emoji" width={50} height={50} />
          </div>

          <div className="relative cursor-pointer" onClick={() => setShowGift(!showGift)}>
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Gift box"
              width={150}
              height={150}
              className="mb-2"
            />
            <p className="text-lg">klik kado diatas</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-end w-full mb-4">
            <Image src="/placeholder.svg?height=50&width=50" alt="Envelope" width={50} height={50} />
          </div>

          <div className="flex items-start mb-2">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Exclamation"
              width={30}
              height={30}
              className="mr-1"
            />
          </div>

          <h2 className="text-3xl font-bold mb-4">Selamat bertambah tua ya Kirana,</h2>

          <div className="flex items-center">
            <Image src="/placeholder.svg?height=30&width=30" alt="Sparkle" width={30} height={30} className="mr-1" />
          </div>

          <p className="text-2xl mb-6">
            happy ulang tahun yang ke 13, panjang umur sukses selalu dan selalu berbakti pada orang tua (wajib) serta
            kakaknya (opsional) dan selalu sayang sama adeknya
          </p>

          <div className="flex items-end">
            <Image src="/placeholder.svg?height=30&width=30" alt="Sparkle" width={30} height={30} className="mr-1" />
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="Exclamation"
              width={30}
              height={30}
              className="mr-1"
            />
            <Image src="/placeholder.svg?height=30&width=30" alt="Exclamation" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Gift popup */}
      {showGift && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={() => setShowGift(false)}
        >
          <div className="bg-white p-8 rounded-lg max-w-md text-center" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">🎉 Happy Birthday! 🎉</h3>
            <p className="mb-4">Wishing you a wonderful day filled with joy and happiness!</p>
            <button className="bg-black text-white py-2 px-6 rounded-md" onClick={() => setShowGift(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

