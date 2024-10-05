import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-full bg-malibu-50 py-16 shadow-md">
      <div className="flex flex-col items-center">
        <img 
          src={require("./img11.png")}
          alt="User" 
          className="w-28 h-28 rounded-full mb-5 border-4 border-malibu-500" 
        />
        <h3 className="text-2xl font-bold text-primary-900">Asmaa Sharf</h3>
      </div>

      <nav className="mt-10">
        <ul className="space-y-2 text-center">
          <li>
            <Link to="/account" className="text-xl block py-2 px-4 rounded-md text-primary-700 hover:bg-malibu-100">
              Account
            </Link>
          </li>
          <li>
            <Link to="/posts" className=" text-xl block py-2 px-4 rounded-md text-primary-700 hover:bg-malibu-100">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-xl block py-2 px-4 rounded-md text-primary-700 hover:bg-malibu-100">
              LogOut
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
