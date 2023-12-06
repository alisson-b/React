import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState('Giancarlo');
    return (
        <>
            <div>
                <h1>Impressão!</h1>
                {x && <p>Olá! X é verdadeiro!</p>}
            </div>
            <div>
                <h1>Meu nome é {name}!</h1>
            </div>
            {name === 'Alisson' ? (
                <button onClick = {() => setName('Robson')}> Trocar nome!</button>
            ):(
              <button onClick = {() => setName('Victor')}> Trocar!</button>    
            )}
        </>
    )
}

export default ConditionalRender;