export default function Card(props) {
  return (
    <div className="bg-white  w-56 rounded-xl border border-gray-200">
      <div className="border-b p-3 border-gray-200">
        <p className="font-semibold">{props.title}</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <p className="text-gray-600 text-sm">{props.content}</p>
      </div>
      <div className="p-4  flex items-center justify-center">
      </div>
    </div>
  )
}