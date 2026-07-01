function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-52 bg-gray-200"></div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          {destination.city}
        </h3>

        <p className="text-gray-600 mb-4">
          {destination.country}
        </p>

        <p className="text-gray-800 font-semibold">
          {destination.price}
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;