import Images from 'next/image';
import defaultImage from '../../public/undraw_default_image.svg';

export default function Card(props) {
  const { genre, title, chapter, synopsis } = props?.data;
  return (
    <div className="w-full px-2 pb-12">
      <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
        <a href="#" className="no-underline hover:no-underline">
          <Images src={defaultImage} className="h-48 w-full rounded-t shadow" width={400} height={300} />
          <div className="p-6 h-auto md:h-56">
            <div className="flex">
              <p className="text-gray-600 text-xs md:text-sm font-semibold">{genre}</p>
              <p className="text-gray-600 text-xs md:text-sm ml-4 font-semibold">{chapter} Chapter</p>
            </div>
            <div className="font-bold text-xl text-gray-900 mb-5">{title}</div>
            <p className="text-gray-800 font-serif text-base mb-5">
              {synopsis}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}