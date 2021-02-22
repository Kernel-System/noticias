import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
    //definir la categoria y noticias
    const [categoria, guardarCategoria] = useState("");
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=4260f196208a4d4f968de92ee5d213b4`;

            const respuesta = await fetch(url);
            const noticias = await respuesta.json();

            guardarNoticias(noticias.articles);
        };
        
        consultarAPI();
    }, [categoria]);

    return (
        <>
            <Header titulo="Buscador de Noticias" />

            <div className="container white">
                <Formulario guardarCategoria={guardarCategoria}></Formulario>
                <ListadoNoticias noticias={noticias}></ListadoNoticias>
            </div>
        </>
    );
}

export default App;
