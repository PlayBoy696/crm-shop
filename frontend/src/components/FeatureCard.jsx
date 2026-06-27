function FeatureCard(props) {
  return (
    <div className="bg-white p-8 rounded-[30px] shadow-lg min-h-[300px]">

      <div className="w-12 h-12 rounded-full bg-[#B4C39B] mb-6"></div>

      <h3 className="text-2xl font-semibold mb-4">
        {props.title}
      </h3>

      <p className="text-gray-600">
        {props.text}
      </p>

    </div>
  )
}

export default FeatureCard

