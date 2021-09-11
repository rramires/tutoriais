// Sempre importa o React
import React from "react";

// cria uma função com o mesmo nome do arquivo.js
function Header(props){
    return(
        // Digite aqui o HTML
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
// exporta o component
export default Header;