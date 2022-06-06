import React from "react";
import Cartwidget from "./Cartwidget";
import '../App.css';
import { Link } from "react-router-dom";



const Navbar = () => {

 
    return(
        //  <!-- NAV MENU -->
    <nav className="bg-gray-800">
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">

                {/* <!-- logo brand --> */}
                <div className="flex items-center flex-shrink-0">
                <Link to='/'><img src="/img/logo.svg" alt="podium-logo"/> </Link>
                </div>
                {/* <!-- logo brand --> */}


                {/* <!-- ITEMS MENU --> */}
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                    <ul className="flex menu">
                        <li className="relative">
                        <Link className="px-2 py-2 text-sm font-medium text-gray-300 uppercase rounded-md" to='/productos'>Productos</Link>
                            <ul className="absolute w-40 bg-gray-800 rounded-sm submenu">
                                <li className="px-2 py-4">
                                <Link className="w-full p-2 text-sm font-medium text-gray-300 rounded-md hover:text-white" to='/categoria/recovery'>Recovery</Link>
                                </li>
                                <li className="px-2 py-4">
                                <Link className="p-2 text-sm font-medium text-gray-300 rounded-md hover:text-white" to='/categoria/endurance'>Endurance</Link>
                                </li>
                                <li className="px-2 py-4">
                                <Link className="p-2 text-sm font-medium text-gray-300 rounded-md hover:text-white" to='/categoria/hidratacion'>Hidratacion</Link>
                                </li>
                            </ul>
                            </li>
                            
                    </ul>
                            


                        
                    </div>
                </div>
                {/* <!-- ITEMS MENU --> */}
            </div>

            {/* <!-- ICON CART --> */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Cartwidget/>
            </div>
        </div>
    </div>


</nav>
    );
}

export default Navbar;

