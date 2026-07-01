function StepCard(props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">

      <h3 className="text-2xl font-bold mb-4">
        {props.number}
      </h3>

      <h4 className="text-xl font-semibold mb-2">
        {props.title}
      </h4>

      <p className="text-gray-600">
        {props.text}
      </p>

    </div>
  )
}

export default StepCard