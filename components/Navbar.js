import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center  sm:flex-row flex-col  text-3xl  gap-2   py-8 bg-white">
        <h1>QRCode Scanner</h1>
        <ul className="flex gap-4 text-2xl sm:text-3xl  justify-center px-2 pt-3 mx-2  items-center">
          <Link href="/home">
            <p>Home</p>
          </Link>
          <Link
            className=" bg-black sm:text-3xl sm:px-2 sm:py-1 text-2xl hover:bg-gray-700 px-5 text-white w-32 sm:w-32  rounded-lg "
            href="/"
          >
            QRCode
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
