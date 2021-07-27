import Pages from './components/Pages';
import Images from 'next/image';
import ImageBook from '../public/undraw_Books.svg'
export default function Home() {
  return (
    <Pages className="p-4 w-full">
      <section className="">
        <div className="container max-w-5xl mx-auto m-4">
          <h1 className="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            It's My Comic
          </h1>
          <div className="w-full py-2 mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Perpustakaan Komik / Novel
              </h3>
              <p className="text-gray-600 mb-3">
                Ini adalah website untuk anda yang suka membuat komik / novel dan ingin mengabadikan karya anda sekaligus bisa diminati oleh seluruh orang.
              </p>
              <p className="text-gray-600">
                enjoy it!
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Images src={ImageBook} />
            </div>
          </div>
        </div>
      </section>
    </Pages>
  )
}
