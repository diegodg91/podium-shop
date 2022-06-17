import React from "react"
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {
    return(
        <main className="home">
            <div className="px-8">
                <p className="text-3xl font-black text-yellow-400 uppercase shadow-xl">Suplementacion inteligente</p>
                <p className="text-5xl font-bold text-white uppercase shadow-xl">ideada para grandes objetivos</p>
                <div className="mt-5">
                <Link className="pt-4 text-lg font-light uppercase shadow-md text-slate-300 hover:text-slate-500" to='/productos'>conoce nuestros productos</Link>
                </div>
               
            </div>
        </main>
    )
}

export default Home