
import Cartwidget from "./Cartwidget";


const Navbar = () => {
    return(
        //  <!-- NAV MENU -->
    <nav className="bg-gray-800">
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">

                {/* <!-- logo brand --> */}
                <div className="flex items-center flex-shrink-0">
                <img src="/img/logo.svg" alt="podium-logo"/> 
                </div>
                {/* <!-- logo brand --> */}


                {/* <!-- ITEMS MENU --> */}
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">

                        <a href="0"
                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Productos</a>

                        <a href="1"
                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">FAQ</a>

                        <a href="2"
                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">Contacto</a>
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

