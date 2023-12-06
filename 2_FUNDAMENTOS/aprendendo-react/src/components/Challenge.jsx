const Challenge = () => {
    const ameba = 2;
    const jureba = 3;

    return (
        <>
            <div>
                <h1>A: {ameba} e B: {jureba}</h1>
            </div>
            <div>
                <button onClick = {() => {window.alert(ameba + jureba)}}> Clique para somar!</button>
            </div>
        </>
    )

};


export default Challenge;