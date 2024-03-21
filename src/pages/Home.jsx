import React, { useState, useEffect } from 'react';

function Home() {
    return(
        <>
        <h1>Home</h1>
        <h2>Listado de Cryptos</h2>
        <ul>
            <li></li>
        </ul>
        </>
    )
}

export default Home;

//En Home busco imprimir un listado de crypto haré un fetch
// fetch('api.coincap.io/v2/assets')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Hubo un problema con la solicitud: ' + response.status);
//     }
//     // Si la solicitud fue exitosa, devolver el cuerpo de la respuesta en formato JSON
//     return response.json();
//   })
//   .then(data => { // Trabajar con los datos obtenidos   
//let coins=data.map((coin)=>{
//<div className="coinBox"> <h2>Nombre: {data.name}</h2>
//imagen: {data.symbol}
// precio: {data.preiceUsd} </div>
//}) 
//     console.log(coins);
//   })
//   .catch(error => {
//     // Capturar cualquier error ocurrido durante el proceso
//     console.error('Error al realizar la solicitud:', error);
//   });
