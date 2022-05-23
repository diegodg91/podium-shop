import ItemCount from "./ItemCount";
const ItemListContainer = ({greeting}) => {
    return(
        <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Suplementos</span>
            <span className="block text-indigo-600 xl:inline">Deportivos</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{greeting}</p>
         
        </div>
        <ItemCount />
      </main>
    )
}

export default ItemListContainer;