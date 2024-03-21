import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
//import ("dotenv").config() ?? No me permite  utilizar el require en react?

function Home() {
    return(
        <>
        <h1>Home</h1>
        <h2>Listado de Cryptos</h2>
        

    

        </>
    )
}

export default Home;


// We encourage clients to use compression via the Accept-Encoding header. 
// Accept-Encoding: gzip or Accept-Encoding: deflate
// If you have an API Key use it as a Bearer Token.
// Programmatically, set the header field Authorization=Bearer 9e832b3e-d392-4d23-9994-7b176499f4ab




//Otro problema tendré que integrar todo esto en un JSX que está leyendo como si fuera un html como lo integro?

//En Home busco imprimir un listado de crypto haré un fetch, gestionaré la asincronía utilizando el .then()
// fetch('api.coincap.io/v2/assets', {
//   headers: {
//     'Accept-Encoding': 'gzip, deflate', //Esto reduce el tamaño del data y el tiempo de carga
//"Authorization"="Bearer 9e832b3e-d392-4d23-9994-7b176499f4ab" //Duplica la velocidad de carga si tienes autorización 
//   }
//})
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Hubo un problema con la solicitud: ' + response.status);
//     }
//     return response.json(); // Si la solicitud = 200, cuerpoRespuesta-> formato JSON
//   })
//   .then(data => { // Trabajar con los datos obtenidos   
//let coins=data.map((coin)=>{
//<div className="coinBox"> 
//  <h2>Nombre: {data.name}</h2>
//  imagen: {data.symbol}
// precio: {data.preiceUsd} </div>
//}) 
//     console.log(coins);
//   })
//   .catch(error => {
//     // Capturar cualquier error ocurrido durante el proceso
//     console.error('Error al realizar la solicitud:', error);
//   });
