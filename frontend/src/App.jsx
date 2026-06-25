import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F2]">

      <Navbar />

      <Hero />

      <main className="max-w-7xl mx-auto px-8 pt-20 text-center">
        <h2 className="text-[90px] leading-none font-serif tracking-[-4px] text-black">
          Browse everything.
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-gray-600">
          Manage clients, products, orders and payments in one clean CRM platform.
        </p>

        <div className="relative mt-20 flex justify-center">
          <div className="absolute top-28 w-full max-w-6xl h-[280px] bg-[#B4C39B] rounded-[40px]"></div>

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Hero"
            className="relative z-10 w-full max-w-5xl h-[420px] object-cover rounded-[30px] shadow-2xl"
          />
        </div>
      </main>
    </div>
  )
}

export default App