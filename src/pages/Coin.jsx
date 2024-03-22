import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Coin() {
    const {id} = useParams;
    const [cryptomoneda, setCryptomoneda] = useState(null);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try{
                const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
                const data = await response.json();
                setCryptoData(data.data);
            }catch(error){
                console.error('Error al encontrar la crypto', error);
            }
        }
    })

    return(
        <>
        <h1>Coin</h1>
        </>
    )
}

export default Coin;