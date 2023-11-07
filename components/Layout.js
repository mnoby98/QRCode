import Navbar from "@/components/Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="  bg-white">
      <div className=" mx-auto max-w-7xl px-2  font-medium">
        <Navbar />
        <main className="  ">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
