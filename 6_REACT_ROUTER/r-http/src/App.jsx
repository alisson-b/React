import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [product, setProduct] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [vegetal, setVegetal] = useState('Batata');

  const url = 'http://localhost:3000/products';

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProduct(data)
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();

    setProduct((prevProducts) => [...prevProducts, addedProduct]);
    setName('');
    setPrice('');
  }

  return (
    <>
      <div className="titulo">
        <h1>Lista de produtos</h1>
        <h1>{vegetal}</h1>
        <button onClick={()=> (setVegetal('Limão'))}>Clique</button>
        <ul>
          {product.map((product) => (
            <li key={product.id}>{product.id} - {product.name} - R${product.price}</li>
          ))}
        </ul>
        <hr />
        <form onSubmit={handleSubmit}>
          <label className='label-choice'>
            <span>Nome</span>
            <input type="text" value={name} name='name' placeholder='Nome' onChange={(event) => (setName(event.target.value))} />
          </label>
          <label className="label-choice">
            <span>Preço</span>
            <input type="number" value={price} name='price' placeholder='Preço' onChange={(event) => (setPrice(event.target.value))} />
          </label>
          <input type="submit" value='Enviar' />
        </form>
      </div>
    </>
  )
}

export default App;
