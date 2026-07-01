import FeatureCard from "./FeatureCard"

const features = [
  {
    title: "Smart Search",
    text: "Find flights, hotels and tours based on your destination and budget.",
  },
  {
    title: "Easy Booking",
    text: "Book your trip in a few clicks with a simple and clean experience.",
  },
  {
    title: "Travel Dashboard",
    text: "Manage bookings, customers and payments from one place.",
  },
  {
    title: "Secure Payments",
    text: "Pay safely online and keep all booking details in your account.",
  },
]

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-6xl font-serif text-black mb-16">
        We've cracked the code.
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <FeatureCard 
          key={feature.title}
          title={feature.title}
          text={feature.text} 
          />
        ))}
      </div>
    </section>
  )
}

export default Features