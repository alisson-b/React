import { useState } from "react";


const CarDetails = ({newCar, km, color, brand }) => {
    const [carroNovo, setCarroNovo] = useState(false); 
    return (
        <div>
            <p>-------------------------------------------------------------------------------------</p>
            <h1>{brand}</h1>
            {newCar && <button onClick = {() => (setCarroNovo(!carroNovo))}>Clique aqui</button>}
            {carroNovo && <h3>Carro novo!</h3>}
            <h2>{km}km</h2>
            <h3>{color}</h3>
            <p>--------------------------------------------------------------------------------------</p>

        </div>
    )
}

export default CarDetails;