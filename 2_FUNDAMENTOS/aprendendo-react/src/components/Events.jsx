const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Apertou!");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando!</h1>;
        } else {
            return <h1>Renderizando igualmente!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click AQUI!</button>
            </div>
            <div>
                <button onClick={() => console.log('Obrigado por clicar!')}> Clique aqui também!</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    );
};

export default Events;