import "./Form.css";
import { useState } from "react";

const Form = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email, bio, role);

    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  const handleEmail = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Nome: </span>
        <input
          type="text"
          name="name"
          onChange={handleEmail}
          value={name}
          placeholder="Digite seu nome..."
        />
      </label>
      <label>
        <span>Email: </span>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Digite seu email..."
        />
      </label>

      <label>
        <span> Selecione </span>
        <select name="role" value={role} onChange={(event) => (setRole(event.target.value))}>
          <option value="user"> Usuário </option>
          <option value="editor"> Editor </option>
          <option value="admin"> Administrador </option>
        </select>
      </label>

      <label>
        <span> Bio:</span>
        <textarea
          name="bio"
          onChange={(event) => setBio(event.target.value)}
          value={bio}
          placeholder="Bio do usuário..."
        ></textarea>
      </label>
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Form;
