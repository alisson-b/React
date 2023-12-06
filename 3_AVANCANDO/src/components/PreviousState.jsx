import {useState} from 'react'

const PreviousState = () => {
    const [pessoa, setPessoa] = useState([
        {nome: 'Alisson', id: 1, age: 25},
        {nome: 'Giancarlo', id: 2, age: 26},
        {nome: 'Flavimar', id: 3, age: 23},
    ]);

    const deleteRandom = () => {
        const randomPeople = Math.floor(Math.random() * 4);

        setPessoa((prevPessoa) => {
        return prevPessoa.filter((user) => randomPeople !== user.id);
        });
    }

  return (
    <>
        <h1>Pessoas:</h1>
        <ul>
            {pessoa.map((item) => (
                <li key={item.id}>{item.nome} - {item.age}</li>
            ))}
        </ul>
        <button onClick ={deleteRandom} >Deletar pessoa aleatória!</button>
    </>
  )
}

export default PreviousState;