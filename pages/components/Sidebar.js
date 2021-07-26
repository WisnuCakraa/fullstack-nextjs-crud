import Link from 'next/link';

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Home from '@material-ui/icons/Home';

const Sidebar = () => {
  return (
    <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
      <div className="border-b py-3 mt-1 flex justify-around ">
        <p className="text-blue-500 text-xl uppercase font-bold">Wellcome, Wisnu</p>
      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4" >
          <Link href="/">
            <div className="">
              <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <Home className="text-gray-300" />
                <a>Beranda</a>
              </div>
            </div>
          </Link>
          <Link href="/product">
            <div className="">
              <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <SupervisorAccountIcon className="text-gray-300" />
                <a>Produk</a>
              </div>
            </div>
          </Link>
          <Link href="/book">
            <div className="">
              <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                <LibraryBooksIcon className="text-gray-300" />
                <a>Buku</a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
