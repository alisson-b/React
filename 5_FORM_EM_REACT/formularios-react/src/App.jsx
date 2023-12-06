import "./App.css";
import Form from "./components/Form";

function App() {

  return (
    <>
      <h1> Formulários </h1>
      <Form user={{ name: "Tonho", email: "tonho@gmail.com", bio: "Bonito e gostoso.", role: "user" }}/>
    </>
  );
}

export default App;
