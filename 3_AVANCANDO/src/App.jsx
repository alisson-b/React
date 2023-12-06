// Imagens
import Relogio from './assets/relogio.jpg';

//CSS
import './App.css'

//Componentes
import ManageData from './components/ManageData.jsx';
import PreviousState from './components/PreviousState.jsx';
import ConditionalRender from './components/ConditionalRender.jsx';
import UsarProps from './components/UsarProps.jsx';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import TestContainer from './components/TestContainer';
import FuncaoProp from './components/FuncaoProp';
import Exibe from './components/Exibe.jsx'
import Altera from './components/Altera';
import UserDetails from './components/UserDetails';

function App() {
  const [name] = useState('João');

  const [car] = useState([
    { id: 1, brand: 'Ferrari', color: 'Vermelho', km: 0, newCar: true },
    { id: 2, brand: 'Lamborghini', color: 'Roxo', km: 10000, newCar: false },
    { id: 3, brand: 'Peugeot', color: 'Branco', km: 0, newCar: true },
    { id: 4, brand: 'Ford', color: 'Preto', km: 59000, newCar: false },
  ]);

  const showMessage = () => console.log('Funçãozinha');

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    return setMessage(msg);
  }

  const [pessoas] = useState([
    { id: 1, name: 'Alisson', age: 25, job: 'Programador' },
    { id: 2, name: 'Daniel', age: 14, job: 'Estudante' },
    { id: 3, name: 'Victor', age: 38, job: 'Gerente de Estoque' },
  ]);

  return (
    <>
      {/*Imagem em public */}
      <div>
        <img src="./borboleta.jpg" alt="Borboleta" />
      </div>
      {/* Imagem em assets/img */}
      <div>
        <img src={Relogio} alt="Relogio" />
      </div>
      <div>
        <ManageData />
        <PreviousState />
        <ConditionalRender />
        <UsarProps nome={name} />
        {/*loop de componentes*/}
        {car.map((carro) => (
          <CarDetails
            key={carro.id}
            brand={carro.brand}
            km={carro.km}
            color={carro.color}
            newCar={carro.newCar}
          />
        ))}
        {/* Container */}
        <TestContainer nome='Alisson'>
          <p>Embreagem</p>
        </TestContainer>
        {/* função como prop */}
        <FuncaoProp showMessage={showMessage} />
        {/* State Lift */}
        <Exibe msg={message} />
        <Altera handleMessage={handleMessage} />
        {pessoas.map((user) => (
          <UserDetails
            key={user.id}
            name={user.name}
            age={user.age}
            job={user.job}
          />
        ))}

      </div>
    </>
  )
}

export default App;
