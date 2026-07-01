import DestinationCard from "./DestinationCard";

const destinations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    price: "From £599",
  },
  {
    city: "Tokyo",
    country: "Japan",
    price: "From £899",
  },
  {
    city: "Rome",
    country: "Italy",
    price: "From £249",
  },
  {
    city: "New York",
    country: "United States",
    price: "From £699",
  },
];

function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-5xl font-serif text-black mb-16">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.city}
            destination={destination}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;