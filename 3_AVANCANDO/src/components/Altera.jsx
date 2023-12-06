
const Altera = ({ handleMessage }) => {
    const tipo = ['Olá', 'Oi', 'Eae'];
    return (
        <>
            <button onClick = {() => handleMessage(tipo[0])}>1</button>
            <button onClick = {() => handleMessage(tipo[1])}>2</button>
            <button onClick = {() => handleMessage(tipo[2])}>3</button>
        </>

    );
}

export default Altera;