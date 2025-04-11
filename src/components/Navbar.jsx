import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">BROOFFICE IT</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/books" className="hover:text-gray-200">Books</Link>
        <Link to="/it-tools" className="hover:text-gray-200">IT Tools</Link>
      </div>
    </nav>
  );
};

export default Navbar;
