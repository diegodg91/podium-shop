import React from "react"
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {
    return(
        <main className="home">
            <div className="px-8">
                <p className="text-3xl font-black text-yellow-400 uppercase">Productos enfocados</p>
                <p className="text-5xl font-bold text-yellow-500 uppercase">en tus objetivos</p>
                <Link className="text-lg font-semibold text-slate-300 hover:text-slate-700" to='/productos'>Ver todos los productos</Link>
            </div>
        </main>
    )
}

export default Home