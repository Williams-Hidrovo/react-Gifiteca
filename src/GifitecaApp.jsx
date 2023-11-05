import { useState } from "react";
import AddCategoria from "./components/AddCategoria";
import GifGrid from "./components/GifGrid";
import './GifitecaApp.css';

const GifitecaApp=()=>{

    const [categorias,setCategorias]=useState(['goku']);    

    return(
        <>

        <h2>Gifiteca</h2>
        <AddCategoria setCategorias={setCategorias}/>
        <div className="caja">
            {
                categorias.map((categoria) =>
                <GifGrid key={categoria} categoria={categoria}/>
                )
            }

        </div>
        

        
        </>
        
    );

}

export default GifitecaApp
