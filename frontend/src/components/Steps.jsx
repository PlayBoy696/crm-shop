import StepCard from "./StepCard"

const steps = [
  {
    number: "1",
    title: "Create Account",
    text: "Sign up and set up your workspace in just a few minutes.",
  },
  {
    number: "2",
    title: "Manage Everything",
    text: "Add customers, products and orders from one dashboard.",
  },
  {
    number: "3",
    title: "Grow Faster",
    text: "Track your progress using clear reports and analytics.",
  },
]

function Steps() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-5xl font-serif text-black mb-16">
        Map Your Success
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Steps