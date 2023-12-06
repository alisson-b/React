import { useState } from 'react'

const ManageData = () => {
    const [nome, setNome] = useState('João');
    return (
        <>
            <div>
                <h1>{nome}</h1>

            </div>
            <div>
                <button onClick={() => (setNome('Alisson'))}> Clique aqui!</button>
            </div>
        </>
    )
}

export default ManageData;