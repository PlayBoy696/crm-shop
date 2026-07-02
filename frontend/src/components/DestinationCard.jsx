function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-[30px] shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
  <button className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-md">
    ♡
  </button>
      <img
  src={destination.image}
  alt={destination.city}
  className="h-52 w-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
        <h3 className="text-2xl font-semibold">
          {destination.city}
        </h3>
         <span className="text-sm">⭐ 4.9</span>
        </div>

        <p className="text-gray-600 mb-4">
          📍{destination.country}
        </p>

        <div className="flex justify-between items-center">
        <p className="text-gray-800 font-semibold">
          {destination.price}
        </p>
        <button className="bg-[#556B2F] text-white px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-black hover:scale-105" >
            Book Now
          </button>
      </div>
    </div>
    </div>
  );
}

export default DestinationCard