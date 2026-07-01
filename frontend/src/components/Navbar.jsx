function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">

      <h1 className="text-3xl font-semibold">
          TravelHub
      </h1>

    <nav className="flex gap-10 text-sm font-medium">
  <a href="#">Flights</a>
  <a href="#">Hotels</a>
  <a href="#">Tours</a>
  <a href="#">Bookings</a>
</nav>
      <button className="bg-[#556B2F] text-white px-6 py-3 rounded-full">
        Sign In
      </button> 

    </header>
  )
}

export default Navbar