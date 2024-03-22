import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";


function Home() {
    const url ='https://api.coincap.io/v2/assets/'
    const [cryptomoneda, setCryptomoneda] = useState([url]);

    useEffect(() => {
    mostrarCripto();
    },[])
    
    const mostrarCripto = async()=> {
        try{
            const response = await (fetch(url))
            if (!response.ok){
                throw new Error('Error de busqueda de Crypto')
            }
            const cryptos = await response.json();
            setCryptomoneda(cryptos.data);
           

        }catch (error) {
            console.error('Error en la solucitud', error)  
        }
    }

    return(
        <>
            <h1>Home</h1>
            <h2>Listado de Cryptos</h2>
            <ul>
            {cryptomoneda.map((item, index) =>(
                <li key={index}>
                    
                  <p>
                    <Link to={`/coin/${item.id}`}>Name: {item.name}</Link>
                  </p> 
                </li>

            ))}                          
            </ul>
        </>
    )
}






export default Home;

