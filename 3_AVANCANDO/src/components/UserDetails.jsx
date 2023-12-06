const UserDetails = ({ name, age, job }) => {
    return (
        <div>
            <li>
                <h4>Nome: {name} | Idade: {age} | Profissão: {job}</h4>
                {age >= 18 ? (<p>Pode tirar carteira!</p>) : (<p>Não pode tirar carteira!</p>)}
            </li>

        </div>
    )
}

export default UserDetails;