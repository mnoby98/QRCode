import Link from "next/link";
function Home() {
  return (
    <div className="  max-w-5xl mx-auto  pt-10 text-center h-[550px] sm:h-[700px] md:h-[900px]  ">
      <div className="flex flex-col gap-10 ">
        <h1 className=" text-[40px]">"QR Codes"</h1>
        <p className="text-2xl">
          QR codes are a type of barcode that can be scanned by smartphones and
          other devices to access information. They are often used to store
          website addresses, contact information, and other types of data.
        </p>
      </div>
      <Link
        href="/"
        className=" text-center ">
        <button className="  bg-black text-2xl hover:bg-gray-700 text-white w-72 py-2 mt-20 rounded-lg ">
          Generate Your QR Now
        </button>
      </Link>
    </div>
  );
}

export default Home;
