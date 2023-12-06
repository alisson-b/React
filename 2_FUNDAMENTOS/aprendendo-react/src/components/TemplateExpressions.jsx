import MyComponent from './MyComponent.jsx';

const TemplateExpressions = () => {
    const name = 'Alfredo';
    const data = {
        nome: 'Afonso Padilha',
        emprego: 'Comediante',
        hobbie: 'bater punheta',
    };

    return (
        <div>
            <h1>Meu nome é {name}!</h1>
            <h2>Seu nome é {data.nome} e você é um {data.emprego} que gosta bastante de {data.hobbie}!</h2>
            <MyComponent />
        </div>
    );

};

export default TemplateExpressions;