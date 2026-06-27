import FeatureCard from "./FeatureCard"

const features = [
  {
    title: "Amplify Insights",
    text: "Discover powerful analytics and make smarter decisions with your data.",
  },
  {
    title: "Global Presence",
    text: "Expand your business across different countries and markets.",
  },
  {
    title: "Language Support",
    text: "Communicate with customers without language barriers.",
  },
  {
    title: "Visualize Growth",
    text: "Track sales and performance using beautiful dashboards.",
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