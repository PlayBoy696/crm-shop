function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">

      <h1 className="text-3xl font-semibold">
        Area
      </h1>

      <nav className="hidden md:flex gap-10 text-sm font-medium">
        <a href="#">Benefits</a>
        <a href="#">Specifications</a>
        <a href="#">How-To</a>
        <a href="#">Contact</a>
      </nav>

      <button className="bg-[#556B2F] text-white px-6 py-3 rounded-full">
        Learn More
      </button>

    </header>
  )
}

export default Navbar